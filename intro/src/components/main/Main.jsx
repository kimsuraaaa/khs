import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';
import Hello from './Hello';
import Skill from './Skill';
import PortfolioFrontDev from './PortfolioFrontDev';
import Contact from './Contact';
import Header from '../common/Header';
import Footer from '../common/Footer';
import PortfolioBlogList from './PortfolioBlogList';
import ModalPortal from '../../ModalPortal';
import ModalPopup from '../modal/ModalPopup';

export default function Main() {
  return (
    <>
      <Header />
      <Hello />
      <Skill />
      <PortfolioFrontDev />
      <PortfolioBlogList />
      <Contact />
      <Footer />
      {/* <ModalPortal>
        <ModalPopup />
      </ModalPortal> */}
    </>
  );
}
