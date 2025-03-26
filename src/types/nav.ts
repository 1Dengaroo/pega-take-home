import { Home, Bug, FileText } from "lucide-react";
import { FC } from "react";

export interface NavItem {
  label: string;
  path: string;
  icon: FC;
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    path: "/home",
    icon: Home,
  },
  {
    label: "Bugs",
    path: "/bugs",
    icon: Bug,
  },
  {
    label: "Epics",
    path: "/epics",
    icon: FileText,
  },
];
