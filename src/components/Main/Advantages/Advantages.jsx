import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import style from './style.scss';

const cx = cn.bind(style);

const Advantages = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="С нами выгодно"
      description="Доступные цены"
    />
    <div className={cx('catalog')}>
      <div className={cx('catalog__item')} />
      <div className={cx('catalog__item')} />
      <div className={cx('catalog__item')} />
      <div className={cx('catalog__item')} />
    </div>
  </Container>
);

export default Advantages;
