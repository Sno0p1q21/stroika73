import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './style.scss';

const cx = cn.bind(style);

const Title = ({ title, description }) => (
  <div className={cx('wrap')}>
    <div className={cx('wrap__title')}>
      <span>
        {title}
      </span>
    </div>
    <div className={cx('wrap__description')}>
      <span>
        {description}
      </span>
    </div>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Title;
