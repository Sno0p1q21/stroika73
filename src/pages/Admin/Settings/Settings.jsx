import React, { useState } from 'react';
import cn from 'classnames/bind';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '../../../components/UI/Modal';
import NavBar from '../../../components/Admin/NavBar/NavBar';
import style from './style.scss';

const cx = cn.bind(style);
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Settings = () => {
  const classes = useStyles();
  const [productShow, setProductShow] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  return (
    <>
      <NavBar />
      <Button
        className={classes.button}
        variant="contained"
        color="default"
        onClick={() => setProductShow(true)}
      >
        Добавить продукт
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="default"
        onClick={() => setCategoryShow(true)}
      >
        Добавить категорию
      </Button>
      <Modal open={productShow} handleClose={() => setProductShow(false)}>
        <div className={cx('category-field')}>
          <div className={cx('category-field__title')}>
            Название товара
            <span> *</span>
          </div>
          <input className={cx('category-field__input')} />
        </div>
        <div className={cx('category-field')}>
          <div className={cx('category-field__title')}>
            Категория товара
            <span> *</span>
          </div>
          <input className={cx('category-field__input')} />
        </div>
        <div className={cx('category-field')}>
          <div className={cx('category-field__title')}>Описание товара</div>
          <input className={cx('category-field__input')} />
        </div>
        <div className={cx('category-field')}>
          <div className={cx('category-field__title')}>
            Изображение
            <span> *</span>
          </div>
          <input type="file" className={cx('category-field__input')} />
          <div className={cx('category-field__support-text')}>
            <span>*</span>
            <span> - поля, обязательные для заполнения.</span>
          </div>
          <button type="button">Сохранить</button>
        </div>
      </Modal>
      <Modal open={categoryShow} handleClose={() => setCategoryShow(false)}>
        <div className={cx('category-field')}>
          <div className={cx('category-field__title')}>Название категории</div>
          <input className={cx('category-field__input')} />
          <button type="button">Сохранить</button>
        </div>
      </Modal>
    </>

  );
};
export default Settings;
