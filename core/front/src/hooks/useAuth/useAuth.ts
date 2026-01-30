import { keepUpClient } from "@/pages/BackOffice/instances";
import { useNavigate } from "react-router";

export function useAuth() {
  const navigate = useNavigate();

  function login(redirectTo: string = "/back-office/dashboard"): string {
    const uniqId = typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2) + Date.now().toString(36);

    navigate(redirectTo);

    return uniqId;
  }

  function logout() {
    keepUpClient.baseHttpClient.clearToken();
    navigate("/back-office/login");
  }

  function checkLogin() {
    if (!keepUpClient.baseHttpClient.getToken()) {
      navigate("/back-office/login");
    }
  }

  return { login, logout, checkLogin };
}
