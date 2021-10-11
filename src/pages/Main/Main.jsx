import React from 'react';
import Header from '../../components/Main/Header';
import Banner from '../../components/Main/Banner';
import Advantages from '../../components/Main/Advantages';
import Assortments from '../../components/Main/Assortments';
import FilterSection from '../../components/Main/FilterSection';
import Contacts from '../../components/Main/Contacts';
import Footer from '../../components/Main/Footer';

const Main = () => (
  <div style={{ background: '#f6faff' }}>
    <Header />
    <Banner />
    <Advantages />
    <Assortments />
    <FilterSection />
    <Contacts />
    <Footer />
  </div>
);

export default Main;
