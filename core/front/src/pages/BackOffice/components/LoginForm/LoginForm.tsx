import { Button } from "@/components/shadcdn/ui/button";
import { keepUpClientApi } from "@/pages/BackOffice/instances";
import CustomField from "../InputField/InputField";
import FormWrapper from "../FormWrapper/FormWrapper";
import { useAuth } from "@/hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import "./LoginForm.css";

interface LoginFormProps {
  redirectTo: string;
}

export default function LoginForm({ redirectTo }: LoginFormProps) {
  const form = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const { login } = useAuth();

  async function handleLogin(data: { userName: string; password: string }) {
    const { userName, password } = data;
    try {
      const response = await keepUpClientApi.auth.login({ email: userName, password });

      keepUpClientApi.baseHttpClient.setToken(response.token);
      login();
      navigate(redirectTo);

    } catch (e) {
      console.error("Login failed", e);
      form.setError("root", {
        message: e instanceof Error ? e.message : "Login failed"
      });
    }
  }

  return (
    <div className="login-wrapper">
      <FormWrapper form={form} onSubmit={handleLogin} className="login-form">
        <CustomField
          form={form}
          name="userName"
          label="Nom d'utilisateur"
          placeholder="jhon_doe"
        />

        <CustomField
          form={form}
          name="password"
          label="Mot de passe"
          placeholder="password..."
          type="password"
        />
        <Button type="submit">Submit</Button>
      </FormWrapper>
    </div>
  );
}
