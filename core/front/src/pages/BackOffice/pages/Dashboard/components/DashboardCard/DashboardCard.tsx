import { Link } from "react-router";
import { Trash } from "lucide-react";
import { Button } from "@/components/shadcdn/ui/button";
import "./DashboardCard.css";

interface DashboardCardProps {
  id: number;
  label: string;
  name: string;
  disabledActions?: ('read' | 'update' | 'delete')[]
}

interface ActionProps {
  show: boolean;
  label: string | React.ReactNode;
  variant: React.ComponentProps<typeof Button>['variant']
}

export default function DashboardCard({ id, label, name, disabledActions = [] }: DashboardCardProps) {

  const buttons: Record<string, ActionProps> = {
    read: { show: !disabledActions.includes('read'), label: "Voir", variant: "secondary" },
    update: { show: !disabledActions.includes('update'), label: "Modifier", variant: "secondary" },
    delete: { show: !disabledActions.includes('delete'), label: <Trash />, variant: "destructive" }
  }

  return (
    <div className="dashboard-card">
      {label.length > 15 ? (
        <span>{label.slice(0, 15)}...</span>
      ) : (
        <span>{label}</span>
      )}
      <div className="actions">
        {
          Object.keys(buttons).map((key) => {
            return buttons[key].show && (
              <Button key={key} size="sm" variant={buttons[key].variant}>
                <Link to={`/back-office/dashboard/${name}/${key}/${id}`}>
                  {buttons[key].label}
                </Link>
              </Button>
            )
          }
          )
        }
      </div>
    </div>
  );
}
