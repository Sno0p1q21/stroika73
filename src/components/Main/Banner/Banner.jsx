import React, { useState } from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Modal from '../../UI/Modal';
import style from './style.scss';
import Form from '../Form';
import img from './assets/main.jpg';

const cx = cn.bind(style);

const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container maxWidth="lg" style={{ background: '#fff' }}>
      <div className={cx('banner-container')} style={{ backgroundImage: `url(${img})` }}>
        <div className={cx('banner-container__title')}>
          <div><span>Широкий ассортимент</span></div>
          <div><span>стройматериалов</span></div>
          <div><span>оптом с доставкой по Ульяновску</span></div>
        </div>
        <ul className={cx('banner-container__list')}>
          <li>
            <span>◼ </span>
            Широкий ассортимент строительных материалов
          </li>
          <li>
            <span>◼ </span>
            Кирпич строительный полнотелый
          </li>
          <li>
            <span>◼ </span>
            Газосиликатные блоки
          </li>
          <li>
            <span>◼ </span>
            Кирпич облицовочный
          </li>
          <li>
            <span>◼ </span>
            Доставка бесплатно
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
