import { Home, Inbox, type LucideProps } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcdn/ui/sidebar";
import { Link } from "react-router";
import LogoutButton from "../LogoutButton/LogoutButton";

import "./AppSideBar.css";

interface menuItem {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  items?: menuItem[];
}

export default function AppSidebar() {
  const items: menuItem[] = [
    {
      title: "Home",
      url: "/back-office/dashboard/home",
      icon: Home,
    },
    {
      title: "Airdrop",
      url: "/back-office/dashboard/airdrop/list",
      icon: Inbox,
    },
    {
      title: "Category",
      url: "/back-office/dashboard/category/list",
      icon: Inbox,
    },
    {
      title: "Social media",
      url: "/back-office/dashboard/social-media/list",
      icon: Inbox,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const hasSubItems = item && item.items && item.items.length > 0;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>

                    {hasSubItems && (
                      <SidebarGroupContent className="pl-4">
                        <SidebarMenu>
                          {item.items &&
                            item.items.map((subItem) => (
                              <SidebarMenuItem key={subItem.title}>
                                <SidebarMenuButton asChild>
                                  <Link to={subItem.url}>
                                    <subItem.icon className="h-4 w-4" />
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
            <div className="app-sidebar-logout">
              <LogoutButton />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
