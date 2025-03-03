import axiosInstance from "@/config/axios.config";

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  accountType: string;
  phone: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  isSuccess: boolean;
  message: string;
  data?: {
    user: {
      id: string;
      email: string;
      name: string;
    };
    token: string;
    refreshToken: string;
  };
}

export interface VerifyEmailData {
  verificationCode: string;
  email: string;
}

export interface ResetPasswordData {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  const response = await axiosInstance.post<AuthResponse>(
    "/Auth/register",
    data
  );
  return response.data;
}

export async function login(data: LoginData): Promise<AuthResponse> {
  const response = await axiosInstance.post<AuthResponse>("/Auth/login", data);
  if (response.data.isSuccess && response.data.data) {
    localStorage.setItem("auth-token", response.data.data.token);
    localStorage.setItem("refresh-token", response.data.data.refreshToken);
  }
  return response.data;
}

export async function logout(): Promise<void> {
  await axiosInstance.delete("/Auth/logout");
  localStorage.removeItem("auth-token");
  localStorage.removeItem("refresh-token");
}

export async function forgotPassword(email: string): Promise<AuthResponse> {
  const response = await axiosInstance.post<AuthResponse>(
    "/Auth/forgot-password",
    { email }
  );
  return response.data;
}

export async function resetPassword(
  data: ResetPasswordData
): Promise<AuthResponse> {
  const response = await axiosInstance.post<AuthResponse>(
    "/Auth/reset-password",
    data
  );
  return response.data;
}

export async function verifyEmail(
  token: string,
  email: string
): Promise<AuthResponse> {
  const response = await axiosInstance.post<AuthResponse>(
    "/Auth/email-verify",
    { verificationCode: token, email }
  );
  return response.data;
}

export async function enableTwoFactor(): Promise<AuthResponse> {
  const response = await axiosInstance.put<AuthResponse>(
    "/Auth/enable-twofactor"
  );
  return response.data;
}

export async function verifyTwoFactor(code: string): Promise<AuthResponse> {
  const response = await axiosInstance.post<AuthResponse>(
    "/Auth/two-factor-verification",
    { code }
  );
  return response.data;
}

export async function checkToken(): Promise<boolean> {
  try {
    await axiosInstance.get("/Auth/refresh-token");
    return true;
  } catch {
    return false;
  }
}
