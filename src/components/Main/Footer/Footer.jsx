import React from 'react';
import cn from 'classnames/bind';
import style from './style.scss';

const cx = cn.bind(style);

const Footer = () => (
  <div className={cx('footer-wrap')}>
    <div className={cx('footer-wrap__menu')}>
      <span className={cx('footer-wrap__title')}>Меню</span>
      <span className={cx('footer-wrap__item')}>Главная</span>
      <span className={cx('footer-wrap__item')}>О компании</span>
      <span className={cx('footer-wrap__item')}>Преимущества</span>
      <span className={cx('footer-wrap__item')}>Каталог</span>
    </div>
    <div className={cx('footer-wrap__contacts')}>
      <span className={cx('footer-wrap__title')}>Связь с нами</span>
      <span className={cx('footer-wrap__item')}>Телефон: +7793243432</span>
      <span className={cx('footer-wrap__item')}>Mail: asfa@ru</span>
    </div>
  </div>
);

export default Footer;
