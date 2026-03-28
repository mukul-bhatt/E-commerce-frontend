// services/apiClient.ts
// Core HTTP engine. Accepts ApiEndpoint objects so method, path, and auth
// requirements are all derived from the endpoint definition — never repeated.

import { tokenStorage } from "./storage/tokenStorage"
import { ApiEndpoint, API } from "./apiEndpoints"

const BASE_URL = "https://shortsightedly-nonborrowing-gilma.ngrok-free.dev/api"


// ─── Internal: Refresh Token ─────────────────────────────────────────────────

async function refreshAccessToken(): Promise<string> {

  const storedRefreshToken = await tokenStorage.getRefreshToken()

  if (!storedRefreshToken) {
    throw new Error("No refresh token available")
  }

  console.log(`[apiClient] Refreshing token: ${BASE_URL}${API.refreshToken.path}`)
  const response = await fetch(`${BASE_URL}${API.refreshToken.path}`, {
    method: API.refreshToken.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: storedRefreshToken }),
  })

  console.log(`[apiClient] Refresh status: ${response.status}`)

  if (!response.ok) {
    throw new Error("Token refresh failed")
  }

  const data = await response.json()

  const newAccessToken: string = data.data.accessToken
  const newRefreshToken: string = data.data.refreshToken

  await tokenStorage.setTokens(newAccessToken, newRefreshToken)

  return newAccessToken

}


// ─── Public: apiFetch ─────────────────────────────────────────────────────────

export async function apiFetch(
  endpoint: ApiEndpoint,
  body?: unknown
): Promise<Response> {

  // requiresAuth is true by default (only false when explicitly set)
  const needsAuth = endpoint.requiresAuth !== false

  // Build headers
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }

  if (needsAuth) {
    const accessToken = await tokenStorage.getAccessToken()
    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`
    }
  }

  const requestInit: RequestInit = {
    method: endpoint.method,
    headers,
    ...(body !== undefined && { body: JSON.stringify(body) }),
  }


  // ── First attempt ──────────────────────────────────────────────────────────
  console.log(`[apiClient] Fetching: ${endpoint.method} ${BASE_URL}${endpoint.path}`)
  let response = await fetch(`${BASE_URL}${endpoint.path}`, requestInit)
  console.log(`[apiClient] Response status: ${response.status}`)

  // If not a 401 or endpoint is public, return immediately
  if (response.status !== 401 || !needsAuth) {
    return response
  }


  // ── 401: Try to refresh and retry once ────────────────────────────────────
  try {

    const newToken = await refreshAccessToken()

    response = await fetch(`${BASE_URL}${endpoint.path}`, {
      ...requestInit,
      headers: {
        ...headers,
        Authorization: `Bearer ${newToken}`,
      },
    })

    return response

  } catch (error) {

    await tokenStorage.clearTokens()
    throw error

  }

}