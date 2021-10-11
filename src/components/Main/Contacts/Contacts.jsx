import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import MapSection from './MapSection';

import style from './style.scss';

const cx = cn.bind(style);

const Contacts = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="С нами выгодно"
      description="Как с нами связаться"
    />
    <div className={cx('contacts-wrap')}>
      <div className={cx('contacts-wrap__requisites')}>
        <span className={cx('contacts-wrap__requisites__title')}>Наши контакты</span>
        <ul className={cx('contacts-wrap__requisites__list')}>
          <li>
            <span>◼ </span>
            Ульяновск, Локомотивная, 31
          </li>
          <li>
            <span>◼ </span>
            Email: vsemtruby.com
          </li>
          <li>
            <span>◼ </span>
            Телефон: +79671454492
          </li>
        </ul>
      </div>
      <div className={cx('contacts-wrap__map')}>
        <MapSection />
      </div>
    </div>
  </Container>
);

export default Contacts;
