import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './style.scss';

const cx = cn.bind(style);

const Product = ({ img }) => (
  <div className={cx('product-wrap')}>
    <img src={img} width={220} height={220} alt="brick" />
    <span className={cx('product-wrap__title')}>Керамический камень</span>
    <span className={cx('product-wrap__description')}>Керамический блок Поротерм 10.7НФ</span>
    <button type="button">Узнать подробнее</button>
  </div>
);

Product.propTypes = {
  img: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
};

export default Product;
