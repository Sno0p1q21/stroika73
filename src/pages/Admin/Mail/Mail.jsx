import React from 'react';
import cn from 'classnames/bind';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavBar from '../../../components/Admin/NavBar/NavBar';
import style from './style.scss';

const cx = cn.bind(style);
const source = [
  {
    name: 'Andrey',
    telephone: 881545,
    message: 'Hello!',
  },
  {
    name: 'Andrey',
    telephone: 881545,
    message: 'Hello!',
  },
  {
    name: 'Andrey',
    telephone: 881545,
    message: 'Hello!',
  },
];
const Mail = () => (
  <div className={cx('mail-wrap')}>
    <NavBar />
    <div className={cx('mail-wrap__title')}>Входящие заявки</div>
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell align="right">Телефон</TableCell>
            <TableCell align="right">Сообщение</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {source.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.telephone}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default Mail;
