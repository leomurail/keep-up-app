import { Button } from "@/components/shadcdn/ui/button";
import { Link, useLocation } from "react-router";

import "./DashboardViewWrapper.css";

interface DashboardViewWrapperProps {
  children: React.ReactNode;
  title?: string;
  id?: string;
  createRoute: string;
}

export default function DashboardViewWrapper({
  children,
  title = "",
  id = "",
  createRoute,
}: DashboardViewWrapperProps) {
  const location = useLocation();
  const lastRoute = location.pathname.split("/").pop();

  return (
    <section id={id} className="dashboard-view-wrapper">
      <div className="top">
        {title && <h1>{title}</h1>}
        {lastRoute == "list" && (
          <Button>
            <Link to={createRoute}>Créer</Link>
          </Button>
        )}
      </div>
      {children}
    </section>
  );
}
