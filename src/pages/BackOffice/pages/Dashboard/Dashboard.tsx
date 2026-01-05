import { Outlet } from "react-router";
import "./Dashboard.css";
import AppSideBar from "./components/SideBar/AppSideBar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/shadcdn/ui/sidebar";
import { useAuth } from "@/hooks/useAuth/useAuth";
import { useEffect } from "react";

export default function Dashboard() {
  const { checkLogin } = useAuth();

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <section id="dashboard">
      <SidebarProvider>
        <AppSideBar />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </section>
  );
}
