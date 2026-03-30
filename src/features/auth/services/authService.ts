// features/auth/services/authService.ts
// Auth-specific service functions. Uses the central apiFetch engine
// and endpoint definitions — no raw fetch() or hardcoded URLs here.

import { API } from "../../../services/apiEndpoints"
import { apiFetch } from "../../../services/apiClient"
import { LoginRequest } from "../models/loginModel"
import { RegisterRequest, RegisterApiResponse } from "../models/registerApiResponse"


// ─── Login ────────────────────────────────────────────────────────────────────

export const loginUser = async (
  payload: LoginRequest
): Promise<RegisterApiResponse> => {

  const response = await apiFetch(API.login, payload)

  let data: RegisterApiResponse
  try {
    data = await response.json()
  } catch (err) {
    const text = await response.clone().text()
    console.log(`[authService] Login JSON parse failed. Raw body: ${text.substring(0, 500)}`)
    throw new Error(`JSON Parse Error: ${err instanceof Error ? err.message : String(err)}`)
  }

  if (!response.ok) {
    throw new Error(data.msg ?? "Login failed")
  }

  return data

}


// ─── Register ─────────────────────────────────────────────────────────────────

export const registerUser = async (
  payload: RegisterRequest
): Promise<RegisterApiResponse> => {

  const response = await apiFetch(API.register, payload)

  let data: RegisterApiResponse
  try {
    data = await response.json()
  } catch (err) {
    const text = await response.clone().text()
    console.log(`[authService] Register JSON parse failed. Raw body: ${text.substring(0, 500)}`)
    throw new Error(`JSON Parse Error: ${err instanceof Error ? err.message : String(err)}`)
  }

  if (!response.ok) {
    throw new Error(data.msg ?? "Registration failed")
  }

  return data

}
