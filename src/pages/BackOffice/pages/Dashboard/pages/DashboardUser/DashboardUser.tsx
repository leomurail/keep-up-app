import { Outlet } from "react-router";
import DashboardViewWrapper from "../../components/DashboardViewWrapper/DashboardViewWrapper";

export default function DashboardUser() {
  return (
    <DashboardViewWrapper
      title="Dashboard Users"
      id="dashboard-user"
      createRoute="/back-office/dashboard/users/create"
    >
      <Outlet />
    </DashboardViewWrapper>
  );
}
