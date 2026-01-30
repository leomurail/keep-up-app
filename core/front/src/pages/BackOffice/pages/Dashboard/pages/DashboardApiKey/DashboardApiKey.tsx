import { Outlet } from "react-router";
import DashboardViewWrapper from "../../components/DashboardViewWrapper/DashboardViewWrapper";

export default function DashboardApiKey() {
  return (
    <DashboardViewWrapper
      title="Dashboard Api Keys"
      id="dashboard-api-keys"
      createRoute="/back-office/dashboard/api-key/create"
    >
      <Outlet />
    </DashboardViewWrapper>
  );
}
