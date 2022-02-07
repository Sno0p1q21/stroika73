import Main from '../pages/Main';
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
];

export default routes;
