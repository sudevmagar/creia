import { ReactNode } from "react";

export type SidebarLink ={
    label: string;
    href: string;
    icon?: ReactNode;
}

export type SidebarSection = {
    title: string;
    links: SidebarLink[];
}

export interface SidebarProps {
    sections: SidebarSection[];
}