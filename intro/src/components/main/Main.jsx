import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';
import Hello from './Hello';
import Skill from './Skill';
import PortfolioMotion from './PortfolioMotion';
import Contact from './Contact';
import Header from '../common/Header';
import Footer from '../common/Footer';
import PortfolioFrontDev from './PortfolioFrontDev';

export default function Main() {
    return (
        <>
            <Header />
            <Hello />
            <Skill />
            <PortfolioMotion />
            <PortfolioFrontDev />
            <Contact />
            <Footer />
        </>
    )
}