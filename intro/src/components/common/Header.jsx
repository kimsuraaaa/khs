import React, { useState, useEffect } from 'react';
import HeaderData from '../../data/HeaderData.json';

export default function Header () {
  const [isActive, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ToggleClass = () => {
    setActive(!isActive);
  }

  const handleScroll = () =>{
    const scrollPosition = window.scrollY || document.documentElement.scollTop;

    if(scrollPosition >= 0){
      document.getElementById('root').classList.add('header-fixed');
    } else {
      document.getElementById('root').classList.remove('header-fixed');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
  return(
    <>
      <header className={isActive ? "active" : null}>
        <div className="header-box">
          <h1><a href="/"><em>K</em><span>IM</span><em>H</em><span>YUN</span><em>S</em><span>U</span></a></h1>
          <nav>
            <ul>
              {HeaderData && 
                HeaderData.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link}>{item.menuName}</a>
                    </li>
                  )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}