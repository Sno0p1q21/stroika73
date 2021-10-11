import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import style from './style.scss';
import img from './assets/brick.jpg';

const cx = cn.bind(style);

const Assortments = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="Большой выбор"
      description="Все категории"
    />
    <div className={cx('assortments-list')}>
      <div className={cx('assortments-list__top')}>
        <section className={cx('assortments-list__item')}>
          <img src={img} alt="brick" width="335px" height="235px" />
          <div>Строительный кирпич</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={img} alt="brick" width="335px" height="235px" />
          <div>Строительный кирпич</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={img} alt="brick" width="335px" height="235px" />
          <div>Строительный кирпич</div>
        </section>
      </div>
      <div className={cx('assortments-list__bottom')}>
        <section className={cx('assortments-list__item')}>
          <img src={img} alt="brick" width="335px" height="235px" />
          <div>Строительный кирпич</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={img} alt="brick" width="335px" height="235px" />
          <div>Строительный кирпич</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={img} alt="brick" width="335px" height="235px" />
          <div>Строительный кирпич</div>
        </section>
      </div>
    </div>
  </Container>
);

export default Assortments;
