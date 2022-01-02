import React, { useState, useEffect } from 'react';
import * as common from "../../js/common";
import HeaderData from '../../data/HeaderData.json';
import MbtiData from '../../data/QuizStepResultData.json';

export default function Header() {
  const [isActive, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ToggleClass = () => {
    setActive(!isActive);
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scollTop;

    if (scrollPosition >= 0) {
      document.getElementById('root').classList.add('header-fixed');
    } else {
      document.getElementById('root').classList.remove('header-fixed');
    }
  }

  const reSetIntro = () => {
    common.deleteCookie('userName');
    common.deleteCookie('mbti');
    window.location.href = '/';
  }

  const mbtiInfo = MbtiData && MbtiData.filter((list) => list.resultType === common.getCookie('mbti'));

  useEffect(() => {
    let mbti = common.getCookie('mbti');
    let name = common.getCookie('userName');

    if (mbti === '' || name === '' || mbti === undefined || name === undefined) {
      reSetIntro();
    }

    window.addEventListener('scroll', handleScroll);
    document.getElementById('mbti').classList.add(mbti);
    document.getElementById('name').innerText = name;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <header className={isActive ? "active" : null}>
        <div className="header-box">
          <h1><a href="/#/main"><em>K</em><span>IM</span><em>H</em><span>YUN</span><em>S</em><span>U</span></a></h1>
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
      <section className="profile-card">
        <strong id="mbti"></strong>
        <span>{mbtiInfo[0].subTitle}<br /><em id="name"></em>님<br />방문 감사합니다</span>
        <button type="button" onClick={reSetIntro}>다시 설정하기</button>
      </section>
    </>
  )
}