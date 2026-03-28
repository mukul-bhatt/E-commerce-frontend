// services/apiEndpoints.ts
// Single source of truth for all API endpoints.
// requiresAuth defaults to true — only explicitly set to false for public endpoints.

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export interface ApiEndpoint {
  path: string
  method: HttpMethod
  requiresAuth?: boolean // defaults to true when omitted
}


// ─── Endpoint Definitions ────────────────────────────────────────────────────

export const API = {

  // AUTH — public endpoints (no token needed)
  login: {
    path: "/auth/login",
    method: "POST",
    requiresAuth: false,
  } satisfies ApiEndpoint,

  register: {
    path: "/auth/register",
    method: "POST",
    requiresAuth: false,
  } satisfies ApiEndpoint,

  refreshToken: {
    path: "/auth/refresh-token",
    method: "POST",
    requiresAuth: false,
  } satisfies ApiEndpoint,


  // PRODUCTS — all require auth (omit requiresAuth, defaults to true)
  products: {
    path: "/products",
    method: "GET",
  } satisfies ApiEndpoint,

  productById: (id: string): ApiEndpoint => ({
    path: `/products/${id}`,
    method: "GET",
  }),


  // ORDERS
  createOrder: {
    path: "/orders",
    method: "POST",
  } satisfies ApiEndpoint,

  myOrders: {
    path: "/orders/my",
    method: "GET",
  } satisfies ApiEndpoint,


  // USER PROFILE
  profile: {
    path: "/users/profile",
    method: "GET",
  } satisfies ApiEndpoint,

  updateProfile: {
    path: "/users/profile",
    method: "PATCH",
  } satisfies ApiEndpoint,

}

