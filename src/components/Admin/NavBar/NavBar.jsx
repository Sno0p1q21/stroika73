import React from 'react';
import Link from '@material-ui/core/Link';
import BuildIcon from '@material-ui/icons/Build';
import MarkEmailReadIcon from '@material-ui/icons/Mail';
import cn from 'classnames/bind';
import style from './style.scss';

import { SETTINGS_ROUTE, MAIL_ROUTE } from '../../../utils/constants';

const cx = cn.bind(style);

const NavBar = () => (
  <div className={cx('navbar-wrap')}>
    <div className={cx('navbar-link')}>
      <BuildIcon width={45} height={45} />
      <Link variant="body2" href={SETTINGS_ROUTE}>Настройки</Link>
    </div>
    <div className={cx('navbar-link')}>
      <MarkEmailReadIcon width={45} height={45} />
      <Link variant="body2" href={MAIL_ROUTE}> Заявки</Link>
    </div>
  </div>
);

export default NavBar;
