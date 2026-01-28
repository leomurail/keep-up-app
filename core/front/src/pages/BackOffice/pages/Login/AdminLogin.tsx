import LoginForm from "../../components/LoginForm/LoginForm";
import "./AdminLogin.css";

export default function AdminLogin() {
  return (
    <section id="back-office-login">
      <h1>Back Office</h1>
      <LoginForm redirectTo="/back-office/dashboard/home" />
    </section>
  );
}
