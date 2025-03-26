import {
  Home,
  Bug,
  FileText,
  Plus,
  Sparkle,
  LayoutGrid,
  SendHorizontal,
  Bell,
  RefreshCcw,
  ClipboardList,
} from "lucide-react";
import { FC } from "react";

export interface NavItem {
  label: string;
  type: "link" | "dropdown";
  icon?: FC;
  path?: string;
  nested?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Create",
    type: "dropdown",
    icon: Plus,
    nested: [
      {
        label: "Bug",
        type: "link",
        path: "/create/bug",
      },
      {
        label: "Epic",
        type: "link",
        path: "/create/epic",
      },
    ],
  },
  {
    label: "Home",
    type: "link",
    path: "/home",
    icon: Home,
  },
  {
    label: "My Dashboard",
    type: "link",
    path: "/dashboard",
    icon: Sparkle,
  },
  {
    label: "Spaces",
    type: "link",
    path: "/spaces",
    icon: LayoutGrid,
  },
  {
    label: "Documents",
    type: "link",
    path: "/documents",
    icon: SendHorizontal,
  },
  {
    label: "Bugs",
    type: "link",
    path: "/bugs",
    icon: Bug,
  },
  {
    label: "Epics",
    type: "link",
    path: "/epics",
    icon: LayoutGrid,
  },
  {
    label: "Goals",
    type: "link",
    path: "/goals",
    icon: FileText,
  },
];

export const footerNavItems: NavItem[] = [
  {
    label: "Notifications",
    type: "link",
    path: "/notifications",
    icon: Bell,
  },
  {
    label: "Recents",
    type: "link",
    path: "/recents",
    icon: RefreshCcw,
  },
  {
    label: "My Applications",
    type: "link",
    path: "/applications",
    icon: ClipboardList,
  },
];
