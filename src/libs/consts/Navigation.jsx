import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineUser,
  HiOutlinePencil,
  HiOutlineCubeTransparent,
  HiOutlineCash,
  HiOutlineUserAdd,
  HiOutlineCollection,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import { HiOutlineBellAlert, HiOutlineCalendarDays, HiOutlineClipboardDocument, HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { GiBackwardTime, GiPartyPopper } from "react-icons/gi";

export const DASHBOARD_MAIN_LINKS= [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: 'RMS/',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'apps',
    label: 'Apps',
    path: 'RMS/app',
    icon: <HiOutlineCube />,
    subLinks: [
      { key: 'contacts', label: 'Contacts', path: 'RMS/apps/contacts' },
    ],
  }
]

export const DASHBOARD_EMPLOYEE_LINKS = [
  {
    key: 'employees',
    label: 'Employees',
    path: 'RMS/employees',
    icon: <HiOutlineUser />,
    subLinks: [
      { key: 'all employees', label: 'All Employees', path: 'RMS/employees/all' },
      { key: 'holidays', label: 'Holidays', path: 'RMS/employees/holidays' },
      { key: 'leaves', label: 'Leaves (Employee)', path: 'RMS/employees/leaves' },
      { key: 'overtime', label: 'Overtime', path: 'RMS/employees/overtime' }
    ],
  },
  {
    key: 'clients',
    label: 'Clients',
    path: 'RMS/clients',
    icon: <HiOutlineUsers />
  },
  {
    key: 'projects',
    label: 'Projects',
    path: 'RMS/projects',
    icon: <HiOutlineCubeTransparent />,
  },
  {
    key: 'leads',
    label: 'Leads',
    path: 'RMS/leads',
    icon: <HiOutlinePencil />
  }
]

export const DASHBOARD_HR_LINKS = [
  {
    key: 'accounts',
    label: 'Accounts',
    path: 'RMS/accounts',
    icon: <HiOutlineCash />,
    subLinks: [
      { key: 'invoices', label: 'Invoices', path: 'RMS/accounts/invoices' },
      { key: 'expenses', label: 'Expenses', path: 'RMS/accounts/Expenses' },
      { key: 'provident fund', label: 'Provident Fund', path: 'RMS/accounts/providentfund' },
      { key: 'taxes', label: 'Taxes', path: 'RMS/accounts/taxes' },
    ]
  },
  {
    key: 'policies',
    label: 'Policies',
    path: 'RMS/policies',
    icon: <HiOutlineClipboardDocument />
  },
  {
    key: 'assets',
    label: 'Assets',
    path: 'RMS/assets',
    icon: <HiOutlineCollection />
  },
  {
    key: 'activities',
    label: 'activities',
    path: 'RMS/activities',
    icon: <HiOutlineBellAlert />
  },
]

export const DASHBOARD_AGENTS_LINKS = [
  {
    key: 'agents',
    label: 'All Agents',
    path: 'RMS/agents/all',
    icon: <HiOutlineUserGroup />,
  },
  {
    key: 'agents detail',
    label: 'Agents Details',
    path: 'RMS/agents/details',
    icon: <HiOutlineClipboardDocumentList />
  },
  {
    key: 'agents status',
    label: 'Agent Status',
    path: 'RMS/agents/status',
    icon: <GiBackwardTime />
  },
  {
    key: 'agents holiday',
    label: 'Holidays',
    path: 'RMS/agents/holidays',
    icon: <GiPartyPopper />
  },
  {
    key: 'leaves',
    label: 'Leaves (Agents)',
    path: 'RMS/agents/leaves',
    icon: <HiOutlineCalendarDays/>
  },
]

export const DASHBOARD_HIERARCHY_LINKS = [
  {
    key: 'hierarchy',
    label: 'Hierarchy',
    path: 'RMS/hierarchy',
    icon: <HiOutlineUserGroup />,
    subLinks: [
      { key: 'add head', label: 'Add Head', path: 'RMS/hierarchy/addhead' },
      { key: 'add position', label: 'Add Position', path: 'RMS/hierarchy/addposition' },
      { key: 'hierarchy graph', label: 'Hierarchy Graph', path: 'RMS/hierarchy/graph' },
    ]
  }, 
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'users',
    label: 'Users',
    path: 'RMS/users',
    icon: <HiOutlineUserAdd />
  },
  {
    key: 'settings',
    label: 'Settings',
    path: 'RMS/settings',
    icon: <HiOutlineCog />
  },
]