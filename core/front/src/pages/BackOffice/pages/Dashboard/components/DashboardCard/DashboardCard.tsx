import { Link } from "react-router";
import { Trash } from "lucide-react";
import { Button } from "@/components/shadcdn/ui/button";
import "./DashboardCard.css";

interface DashboardCardProps {
  id: number;
  title: string;
  name: string;
}

export default function DashboardCard({ id, title, name }: DashboardCardProps) {
  return (
    <div className="dashboard-card">
      {title}
      <div className="actions">
        <Button size="sm" variant="secondary">
          <Link to={`/back-office/dashboard/${name}/update/${id}`}>
            Modifier
          </Link>
        </Button>
        <Button size="sm" variant="secondary">
          <Link to={`/back-office/dashboard/${name}/read/${id}`}>Voir</Link>
        </Button>
        <Link to={`/back-office/dashboard/${name}/delete/${id}`}>
          <Trash width="20px" />
        </Link>
      </div>
    </div>
  );
}
