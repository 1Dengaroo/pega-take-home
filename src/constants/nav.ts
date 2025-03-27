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
  ClipboardList
} from 'lucide-react';
import { FC } from 'react';

export type SectionViewType = 'search' | 'notifications' | 'recents';

type BaseNavItem = {
  label: string;
  icon?: FC;
  notificationCount?: string;
};

type LinkNavItem = BaseNavItem & {
  type: 'link';
  path: string;
};

type DropdownNavItem = BaseNavItem & {
  type: 'dropdown';
  nested: NavItem[];
};

type SectionToggleNavItem = BaseNavItem & {
  type: 'sectionToggle';
  secondaryViewType: SectionViewType;
};

export type NavItem = LinkNavItem | DropdownNavItem | SectionToggleNavItem;

export const navItems: NavItem[] = [
  {
    label: 'Create',
    type: 'dropdown',
    icon: Plus,
    notificationCount: '2',
    nested: [
      {
        label: 'Bug',
        type: 'link',
        path: '/create/bug'
      },
      {
        label: 'Epic',
        type: 'link',
        path: '/create/epic'
      }
    ]
  },
  {
    label: 'Home',
    type: 'link',
    path: '/home',
    icon: Home
  },
  {
    label: 'My Work',
    type: 'link',
    path: '/dashboard',
    icon: Sparkle
  },
  {
    label: 'Spaces',
    type: 'link',
    path: '/spaces',
    icon: LayoutGrid
  },
  {
    label: 'Documents',
    type: 'link',
    path: '/documents',
    icon: SendHorizontal
  },
  {
    label: 'Bugs',
    type: 'link',
    path: '/bugs',
    icon: Bug
  },
  {
    label: 'Epics',
    type: 'link',
    path: '/epics',
    icon: LayoutGrid
  },
  {
    label: 'Goals',
    type: 'link',
    path: '/goals',
    icon: FileText
  }
];

export const footerNavItems: NavItem[] = [
  {
    label: 'Notifications',
    type: 'sectionToggle',
    notificationCount: '99',
    secondaryViewType: 'notifications',
    icon: Bell
  },
  {
    label: 'Recents',
    type: 'sectionToggle',
    secondaryViewType: 'recents',
    icon: RefreshCcw
  },
  {
    label: 'My Applications',
    type: 'link',
    path: '/applications',
    icon: ClipboardList
  }
];
