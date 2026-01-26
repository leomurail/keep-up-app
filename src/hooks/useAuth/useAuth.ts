import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies(["auth", "token"]);
  const navigate = useNavigate();

  function login(redirectTo: string = "/back-office/dashboard"): string {
    const uniqId = typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2) + Date.now().toString(36);

    // Set auth marker with root path
    setCookie("auth", uniqId, {
      path: "/",
    });

    navigate(redirectTo);

    return uniqId;
  }

  function logout() {
    removeCookie("auth", { path: "/" });
    removeCookie("token", { path: "/" });
    navigate("/back-office/login");
  }

  function checkLogin() {
    if (!cookies.auth && !cookies.token) {
      navigate("/back-office/login");
    }
  }

  return { login, logout, checkLogin };
}
