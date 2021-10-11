import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import Product from './Product';
import img from './assets/brick.jpg';

import style from './style.scss';

const cx = cn.bind(style);
const FilterSection = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="Большой асортимент"
      description="В наличии или под заказ"
    />
    <div className={cx('content-wrap')}>
      <div className={cx('content-wrap__filter')}>
        <ul>
          <li>Керамические блоки</li>
          <li>Газобетонные блоки</li>
          <li>Тротуарные плитки</li>
          <li>Кирпичи</li>
          <li>Кольца</li>
        </ul>
      </div>
      <div className={cx('content-wrap__products')}>
        <Product img={img} />
        <Product img={img} />
        <Product img={img} />
        <Product img={img} />
      </div>
      <div />
    </div>
  </Container>
);

export default FilterSection;
