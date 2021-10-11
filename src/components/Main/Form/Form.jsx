import React from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames/bind';
import style from './style.scss';

const cx = cn.bind(style);

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className={cx('form-wrap')} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx('form-wrap__title')}>Заполните форму</div>
      <div className={cx('field')}>
        <div className={cx('field__title')}>Введите Имя</div>
        <div>
          <input className={cx('field__input')} defaultValue="test" {...register('example')} />
        </div>
      </div>
      <div className={cx('field')}>
        <div className={cx('field__title')}>Введите почту</div>
        <input className={cx('field__input')} defaultValue="test" {...register('example')} />
      </div>
      <div className={cx('field')}>
        <div className={cx('field__title')}>Введите телефон</div>
        <input className={cx('field__input')} defaultValue="test" {...register('example')} />
      </div>
      <button type="submit">Оставить заявку</button>
    </form>
  );
};

export default Form;
