import { AuthResponseData } from "./loginModel"


// {
//   "email": "mukulBhatt@example.com",
//   "password": "MyPass@123",
//   "first_name": "Mukul",
//   "last_name": "Bhatt",
//   "phone": "9999988888",
//   "device_type": "Android",
//   "device_name": "Samsung Galaxy S23",
//   "device_id": "device-uuid-001"
// }

export interface RegisterRequest {
  email: string
  password: string
  first_name: string
  last_name: string
  phone: string
  device_type: string
  device_name: string
  device_id: string
}


export interface RegisterApiResponse {
  result: number
  statusCode: number

  msg: string

  data: AuthResponseData

}