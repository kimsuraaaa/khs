import React, { useEffect } from 'react';
import * as common from '../../js/common';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

export default function Hello() {
    useEffect(() => {
        const nameCard = document.querySelectorAll('.name-card');
        const userName = localStorage.getItem('userName');
        for (let i = 0; i < nameCard.length; i++) {
            nameCard[i].innerHTML = userName;
        }
    }, []);

    return (
        <>
            <section className="main-section hello-col">
                <div className="inner">
                    <h1><span>인사말</span></h1>
                    <div className="icon-keyboard">
                        <span></span><span className="eft-keyup-5"></span><span></span><span className="eft-keyup-3"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span className="eft-keyup-1"></span><span></span><span></span><span></span><span></span><span></span><span></span><span className="eft-keyup-3"></span><span></span><span></span>
                        <span></span><span className="eft-keyup-4"></span><span></span><span></span><span></span><span></span><span></span><span></span><span className="eft-keyup-4"></span><span></span><span></span><span className="eft-keyup-2"></span><span></span><span></span><span></span><span className="eft-keyup-4" style={{ width: "4.5em" }}></span><span></span><span></span><span></span>
                    </div>
                    <p>안녕하세요 <em className="name-card"></em>님,<br />제 홈페이지에 방문해 주셔서 감사합니다.<br />저는 <strong>인터렉션한 프론트 개발</strong>에 관심이 많은 김현수라고 합니다.</p>
                    <p>이 사이트는 개인 소개 목적으로 만들어진 사이트로,<br />React로 개발되었으며, <em>Interaction motion</em> 요소들은 최대한 라이브러리 사용을 피해<br /><strong>Javascript</strong> 와 <strong>CSS Keyframe animation</strong>을 사용하여 구현했습니다.</p>
                </div>
            </section>
        </>
    )
}