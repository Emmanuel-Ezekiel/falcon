export interface RegisterData {
    email: string
    password: string
    name: string
  }
  
  export interface LoginData {
    email: string
    password: string
  }
  
  export interface ResetPasswordData {
    email: string
    token: string
    newPassword: string
  }
  
  export interface AuthResponse {
    success: boolean
    message: string
    token?: string
  }
  
  