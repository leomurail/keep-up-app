import { Outlet } from "react-router";
import DashboardViewWrapper from "../../components/DashboardViewWrapper/DashboardViewWrapper";

export default function DashboardSocialMedia() {
  return (
    <DashboardViewWrapper
      title="Dashboard Social Media"
      id="dashboard-social-media"
      createRoute="/back-office/dashboard/social-media/create"
    >
      <Outlet />
    </DashboardViewWrapper>
  );
}
