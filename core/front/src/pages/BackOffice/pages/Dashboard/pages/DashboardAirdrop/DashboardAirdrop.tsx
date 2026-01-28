import DashboardViewWrapper from "../../components/DashboardViewWrapper/DashboardViewWrapper";
import { Outlet } from "react-router";

export default function DashboardAirdrop() {
  return (
    <DashboardViewWrapper
      title="Dashboard Airdrop"
      id="dashboard-airdrop"
      createRoute="/back-office/dashboard/airdrop/create"
    >
      <Outlet />
    </DashboardViewWrapper>
  );
}
