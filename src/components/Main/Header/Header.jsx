import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import style from './style.scss';

const cx = cn.bind(style);

const Header = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <div className={cx('container')}>
      <ul className={cx('container__list')}>
        <li>Главная</li>
        <li>О компании</li>
        <li>Преимущества</li>
        <li>Каталог</li>
        <li>Контакты</li>
      </ul>
    </div>
  </Container>
);

export default Header;
