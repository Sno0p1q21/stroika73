import Main from '../pages/Main';
import Auth from '../pages/Auth';
import Admin from '../pages/Admin';
import Settings from '../pages/Admin/Settings';
import Mail from '../pages/Admin/Mail';
import {
  MAIN_ROUTE, AUTH_ROUTE, ADMIN_ROUTE, SETTINGS_ROUTE, MAIL_ROUTE,
} from './constants';

const routes = [
  {
    id: 1,
    path: MAIN_ROUTE,
    component: Main,
    exact: true,
  },
  {
    id: 2,
    path: AUTH_ROUTE,
    component: Auth,
  },
  {
    id: 3,
    path: ADMIN_ROUTE,
    component: Admin,
  },
  {
    id: 4,
    path: SETTINGS_ROUTE,
    component: Settings,
  },
  {
    id: 5,
    path: MAIL_ROUTE,
    component: Mail,
  },
];

export default routes;
