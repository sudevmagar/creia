"use client";

import Sidebar from "./Sidebar";
import { Home, Settings, Users, FileText, BarChart3, Bell } from "lucide-react";
import { SidebarSection } from "./sidebar/type";

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // sections for sidebar
  const sidebarSections: SidebarSection[] = [
    {
      title: "Workspace",
      links: [
        {
          label: "Projects",
          href: "/dashboard/projects",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          label: "Analytics",
          href: "/dashboard/analytics",
          icon: <BarChart3 className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Network",
      links: [
        {
          label: "Team",
          href: "/dashboard/team",
          icon: <Users className="w-4 h-4" />,
        },
        {
          label: "Notifications",
          href: "/dashboard/notifications",
          icon: <Bell className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar sections={sidebarSections} />
      <main className="flex-1 lg:ml-64 min-h-screen bg-background">
        <div className="p-6 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
