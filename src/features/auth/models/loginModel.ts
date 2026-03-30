export interface LoginRequest {
  email: string;
  password: string;
  device_type: string;
  device_name: string;
  device_id: string;
}
  

export interface LoginResponse {
  
}


export interface User {

  id: string
  email: string

  first_name: string
  last_name: string

  role: "customer" | string

}

export interface AuthTokens {

  accessToken: string
  refreshToken: string

}

export interface AuthResponseData {

  user: User

  accessToken: string
  refreshToken: string

}

