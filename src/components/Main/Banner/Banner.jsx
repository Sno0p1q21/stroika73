import React, { useState } from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Modal from '../../UI/Modal';
import style from './style.scss';
import Form from '../Form';

import image from './assets/pipe.jpg';

const cx = cn.bind(style);

// style={{ backgroundImage: `url(${image})` }}
const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container maxWidth="lg" style={{ background: '#fff', paddingLeft: 0, paddingRight: 0 }}>
      <div className={cx('banner-container')} style={{ position: 'relative', backgroundImage: `url(${image})` }}>
        <div className={cx('banner-container__title')}>
          <div><span>Широкий ассортимент</span></div>
          <div><span>стройматериалов</span></div>
          <div><span /></div>
        </div>
        <ul className={cx('banner-container__list')}>
          <li>
            <span>◼ </span>
            Широкий ассортимент материалов
          </li>
          <li>
            <span>◼ </span>
            Высокое качество товаров
          </li>
          <li>
            <span>◼ </span>
            Более 60% покупателей возвращаются к нам снова
          </li>
          <li>
            <span>◼ </span>
            В 96% случаев поставляем свою продукцию раньше назначенного времени
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setModalShow(true)}
          className={cx('banner-container__banner-button')}
        >
          Узнать подробнее
        </button>
      </div>
      <Modal open={modalShow} handleClose={() => setModalShow(false)}>
        <Form />
      </Modal>
    </Container>
  );
};

export default Banner;
