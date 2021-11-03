import { lazy } from 'react';
const Dashboard = lazy(() => import('pages/Dashboard/index'));
const Displays = lazy(() => import('pages/Devices/index'));
const Projects = lazy(() => import('pages/Projects/index'));
const DisplayGroups = lazy(() => import('pages/DeviceGroup/index'));
const Media = lazy(() => import('pages/Media/index'));
const Login = lazy(() => import('pages/Login/index'));
const Clients = lazy(() => import('pages/Clients'));
const Users = lazy(() => import('pages/Users'));
const DisplayAppUpdates = lazy(() => import('pages/DisplayAppUpdates'));
const ResetPassword = lazy(() => import('containers/login/ResetPassword'));
const ManageAccount = lazy(() => import('containers/account/ManageAccount'));

export const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/displays',
    component: Displays,
    exact: true,
  },
  {
    path: '/displays/add-new-display',
    component: Displays,
    exact: true,
  },
  {
    path: '/displays/settings',
    component: Displays,
    exact: true,
  },
  {
    path: '/displays/logs',
    component: Displays,
    exact: true,
  },
  {
    path: '/displays/execution-status',
    component: Displays,
    exact: true,
  },
  {
    path: '/displays/groups',
    component: DisplayGroups,
    exact: true,
  },
  {
    path: '/displays/groups/add-edit',
    component: DisplayGroups,
    exact: true,
  },
  {
    path: '/displays/app-updates',
    component: DisplayAppUpdates,
    exact: true,
  },

  {
    path: '/media',
    component: Media,
    exact: true,
  },
  {
    path: '/projects',
    component: Projects,
    exact: false,
  },
  {
    path: '/clients',
    component: Clients,
    exact: true,
  },
  {
    path: '/clients/new',
    component: Clients,
    exact: true,
  },
  {
    path: '/clients/edit',
    component: Clients,
    exact: true,
  },
  {
    path: '/users',
    component: Users,
    exact: true,
  },
  {
    path: '/users/add',
    component: Users,
    exact: true,
  },
  {
    path: '/users/edit',
    component: Users,
    exact: true,
  },
  {
    path: '/user/user/activate-user/:id',
    component: ResetPassword,
    exact: false,
  },
  {
    path: '/user/user/reset-password/:id',
    component: ResetPassword,
    exact: false,
  },
  {
    path: '/account/manageAccount',
    component: ManageAccount,
    exact: true,
  },
];

export const unAuthenticatedRoutes = ['/user/user/activate-user', '/user/user/reset-password'];
