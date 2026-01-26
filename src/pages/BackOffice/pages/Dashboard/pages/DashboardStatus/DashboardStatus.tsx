import { Outlet } from "react-router";

import DashboardViewWrapper from "../../components/DashboardViewWrapper/DashboardViewWrapper";

export default function DashboardStatus() {
    return (
        <DashboardViewWrapper
            title="Dashboard statut"
            id="dashboard-status"
            createRoute="/back-office/dashboard/status/create"
        >
            <Outlet />
        </DashboardViewWrapper>
    );
}
