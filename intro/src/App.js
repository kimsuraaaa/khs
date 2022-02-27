import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import KhsRouter from './components/KhsRouter';

import './assets/styles/common.scss';
import './assets/styles/common.css';

// const helloNpm = require('hsmotion');

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <main>
          <KhsRouter />
        </main>
        {/* <Footer /> */}
        {/* {hello} */}
      </Router>
    </>
  );
}
