import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

import img_ynd_intro from '../../assets/images/main/img_ynd_intro.jpg';
import img_ticketing from '../../assets/images/main/img_ticketing.jpg';

export default function PortfolioMotion() {
    const motionList = [
        {
            "mainTitle": "Yanadoo Intro Sample",
            "subTitle": "Scroll event 활용 야나두 소개 샘플링 페이지 (javascript, css)",
            "pageURL": "/interaction",
            "linkType": "blank",
            "imageURL": img_ynd_intro
        },
        {
            "mainTitle": "Ticketing Event",
            "subTitle": "티켓팅 이벤트 인트로 모션 (css)",
            "pageURL": "/interaction",
            "imageURL": img_ticketing
        },
        {
            "mainTitle": "Yanadoo University",
            "subTitle": "야나두 입학 소개 모션 (javascript)",
            "pageURL": "/interaction",
            "imageURL": img_ynd_intro
        },
        {
            "mainTitle": "Yanadoo Audio",
            "subTitle": "야나두 오디오 강의 모션 (css)",
            "pageURL": "/interaction",
            "imageURL": img_ynd_intro
        },
        {
            "mainTitle": "Yanadoo",
            "subTitle": "야나두를 만든 사람들 (javascript, css)",
            "pageURL": "/interaction",
            "imageURL": img_ynd_intro
        }
    ];
    return (
        <>
            <section className="main-section interest-col">
                <div className="inner">
                    <h1>모션</h1>
                    <div className="icon-motion"><span></span><span></span></div>
                    <div className="play-list">
                        <ul>
                            {motionList && motionList.map((item, idx) =>
                                <li key={idx}>
                                    <a href={item.pageURL} target={(item.linkType === 'blank') ? '"_blank"' : ''} style={{ 'backgroundImage': 'url(' + item.imageURL + ')' }}>
                                        <p><strong>{item.mainTitle}</strong><br />{item.subTitle}</p>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}