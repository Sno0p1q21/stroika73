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
      description="Преимущества"
    />
    <div className={cx('catalog')}>
      <div className={cx('catalog__requisites')}>
        <div />
        <ul className={cx('catalog__list')}>
          <li>
            <span>◼ </span>
            Высокое качество наших товаров позволяет нам почти не тратиться на рекламу, люди находят нас сами. Следовательно, сбереженные на рекламе средства &quot;облегчают&quot; стоимость продукции
          </li>
          <li>
            <span>◼ </span>
            Мы являемся диструбьюторами компании &quot;Чебоксарский трубный завод&quot;, являющимся одним из лидеров отрасли
          </li>
          <li>
            <span>◼ </span>
            По статистике, более 60% покупателей возвращаются к нам снова
          </li>
          <li>
            <span>◼ </span>
            В 97% случаев мы поставляем свою продукцию раньше назначенного времени
          </li>
          <li>
            <span>◼ </span>
            Мы еще не первые в своей отрасли, а потому нам приходится стараться больше других, чтобы доказать, что мы достойны быть первыми
          </li>
        </ul>
      </div>
    </div>
  </Container>
);

export default Advantages;
