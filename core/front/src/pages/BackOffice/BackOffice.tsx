import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/shadcdn/ui/theme-provider";

export default function BackOffice() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Outlet />
    </ThemeProvider>
  );
}
