import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import style from './style.scss';

const cx = cn.bind(style);

const About = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="С нами выгодно"
      description="О нас"
    />
    <div style={{ maxWidth: '350px', fontSize: '16px', fontWeight: '300' }}>
      &quot;Строй Тандем&quot; - еще молодая фирма, но уже успевшая себя зарекомендовать на таких больших строительных объектах, как гофрокартонный завод АО &quot;Архбум&quot; и уже имеющая множество крупных партнеров.
    </div>
  </Container>
);

export default About;
