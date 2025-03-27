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

export type SectionViewType = "search" | "notifications" | "recents";

type BaseNavItem = {
  label: string;
  icon?: FC;
};

type LinkNavItem = BaseNavItem & {
  type: "link";
  path: string;
};

type DropdownNavItem = BaseNavItem & {
  type: "dropdown";
  nested: NavItem[];
};

type SectionToggleNavItem = BaseNavItem & {
  type: "sectionToggle";
  secondaryViewType: SectionViewType;
};

export type NavItem = LinkNavItem | DropdownNavItem | SectionToggleNavItem;

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
    type: "sectionToggle",
    secondaryViewType: "notifications",
    icon: Bell,
  },
  {
    label: "Recents",
    type: "sectionToggle",
    secondaryViewType: "recents",
    icon: RefreshCcw,
  },
  {
    label: "My Applications",
    type: "link",
    path: "/applications",
    icon: ClipboardList,
  },
];

export type NotificationViewItem = {
  title: string;
  subtitle: string;
  type: string;
  timestamp?: string;
  bookmarked?: boolean;
};

export const sampleNotificationItems = [
  {
    title: "New UI Patterns",
    subtitle: "Melvin Fields commented on this",
    type: "GOAL-2021",
    timestamp: "1h",
    bookmarked: false,
  },
  {
    title: "Mama's got a brand new bag, and Papa's got a new pair of shoes.",
    subtitle: "Lula Richards updated the stage on this",
    type: "EPIC-1211",
    timestamp: "2d",
    bookmarked: true,
  },
  {
    title: "Cosmos Work",
    subtitle: "Corey Lee followed this",
    type: "SPACE-912",
    timestamp: "1w",
    bookmarked: false,
  },
  {
    title: "Sample notification goes here...",
    subtitle: "Additional details about this item",
    type: "GOAL-2021",
    timestamp: "3d",
    bookmarked: true,
  },
];
