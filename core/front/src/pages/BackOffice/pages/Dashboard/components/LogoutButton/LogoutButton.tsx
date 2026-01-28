import { Button } from "@/components/shadcdn/ui/button";
import { useAuth } from "@/hooks/useAuth/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth() as {
    logout: React.MouseEventHandler<HTMLButtonElement>;
  };

  return (
    <Button className="logout-btn" onClick={logout}>
      Déconnexion
    </Button>
  );
}
