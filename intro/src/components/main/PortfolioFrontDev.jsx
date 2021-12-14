import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

import img_ynd_intro from '../../assets/images/main/img_ynd_intro.jpg';
import img_ticketing from '../../assets/images/main/img_ticketing.jpg';

export default function PortfolioFrontDev() {
    const motionList = [
        {
            "mainTitle": "MBTI Compatibility",
            "subTitle": "당신과 나의 MBTI 궁합은?",
            "pageURL": "/interaction",
            "imageURL": img_ynd_intro
        },
        {
            "mainTitle": "Yanadoo Mindset",
            "subTitle": "야나두 입학 서약서 작성",
            "pageURL": "/interaction",
            "linkType": "blank",
            "imageURL": img_ynd_intro
        },
        {
            "mainTitle": "Yafit",
            "subTitle": "야핏 운동성공율 예측",
            "pageURL": "/interaction",
            "imageURL": img_ticketing
        },
        {
            "mainTitle": "Yanadoo University",
            "subTitle": "야나두 적성검사",
            "pageURL": "/interaction",
            "imageURL": img_ynd_intro
        },
        {
            "mainTitle": "Yanadoo Audio",
            "subTitle": "랜덤 컨텐츠 만들기",
            "pageURL": "/interaction",
            "imageURL": img_ynd_intro
        }
    ];
    return (
        <>
            <section className="main-section interest-col">
                <div className="inner">
                    <h1>프론트개발</h1>
                    <div className="icon-front"><span></span><span></span></div>
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