import React, { use } from "react";
import { SidebarLink, SidebarProps } from "./sidebar/type";
import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar({ sections }: SidebarProps) {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  // main links
  const mainLinks: SidebarLink[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Home className="w-4 h-4" />,
    },
  ];
  return (
    <>
      <aside className="fixed top-0 left-0 h-full z-10 w-64 border-r border-sidebar-border ">
        <div className="flex flex-col h-full bg-sidebar-background text-sidebar-foreground">
          {/* Logo */}
          <div className="flex items-center gap-1 border-b border-sidebar-border p-4">
            <h1 className="text-3xl font-bold ">Creia</h1>
            <span className="text-3xl font-bold leading-none text-primary">
              .
            </span>
          </div>
          {/* Sidebar Content */}
          <nav className="flex-1 p-4">
            {/* Main Links */}
            <div className="mb-8">
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-3 py-2 gap-2 text-sm font-medium rounded-md  ${
                        isLinkActive(link.href)
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                          : "text-sidebar-foreground hover:text-sidebar-foreground/80"
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Links */}
            {sections.map((section) => (
              <div key={section.title} className="mb-6">
                <h2 className="text-sm font-semibold uppercase text-sidebar-foreground/70 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center px-3 py-2 gap-2 text-sm font-medium rounded-md  ${
                          isLinkActive(link.href)
                            ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                            : "text-sidebar-foreground hover:text-sidebar-foreground/80"
                        }`}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
