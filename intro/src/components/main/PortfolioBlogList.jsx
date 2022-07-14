import React from 'react';
import '../../assets/styles/common.scss';
import '../../assets/styles/main.scss';

import img_scrollmove from '../../assets/images/bloglist/img_scrollmove.jpg';
import img_npmpackage from '../../assets/images/bloglist/img_npmpackage.jpg';
import img_study01 from '../../assets/images/bloglist/img_study_01.png';
import img_swiperreact from '../../assets/images/bloglist/img_swiperreact.jpg';
import img_spooner from '../../assets/images/bloglist/img_spooner.jpg';
import img_browser from '../../assets/images/bloglist/img_browser.jpg';
import img_markup from '../../assets/images/bloglist/img_markup.jpg';
import img_entitycode from '../../assets/images/bloglist/img_entitycode.jpg';
import img_nextjs from '../../assets/images/bloglist/img_nextjs.jpg';
import img_editor from '../../assets/images/bloglist/img_editor.png';
import img_tensorflow from '../../assets/images/bloglist/img_tensorflow.png';

const commingSoon = () => {
  alert('업데이트 예정입니다.');
};

export default function PortfolioBlogList() {
  const motionList = [
    {
      mainTitle: 'TensorFlowjs',
      subTitle: 'TensorFlowjs를 통해 머신러닝 기술을 적용해보고, 샘플페이지를 만들어 보자.',
      pageURL:
        'https://mire-diascia-324.notion.site/TensorFlow-js-440b6c638d5c4478884cf9fd3aecf993',
      linkType: 'blank',
      imageURL: img_tensorflow,
    },
    {
      mainTitle: '[SSAKLOG] 커스텀 에디터 컴포넌트 개발',
      subTitle: 'Contenteditable 커스텀 에디터 컴포넌트 개발(진행중)',
      pageURL: 'https://mire-diascia-324.notion.site/SSAKLOG-7c2c3e88db29477b821beeea922aa443',
      linkType: 'blank',
      imageURL: img_editor,
    },
    {
      mainTitle: 'NPM Package',
      subTitle: '내가 만든 module을 NPM Package 배포를 통해 사용해 보자.',
      pageURL: 'https://mire-diascia-324.notion.site/NPM-Package-420ae483a2d04a14bee8be0f8fc88c14',
      linkType: 'blank',
      imageURL: img_npmpackage,
    },
    {
      mainTitle: '직사각형넓이 구하기',
      subTitle: '프로그래머스 javascript 테스트 코드 작성',
      pageURL: 'https://mire-diascia-324.notion.site/08acbd1247fa4f838277b0965dd26430',
      linkType: 'blank',
      imageURL: img_study01,
    },
    {
      mainTitle: 'NextJS',
      subTitle: 'React NextJS 배경 및 장점 설치.',
      pageURL: 'https://mire-diascia-324.notion.site/NextJS-b4b867e2114a4edcba172ebe57428767',
      linkType: 'blank',
      imageURL: img_nextjs,
    },
    {
      mainTitle: 'ScrollMove',
      subTitle: 'Cross Browser 이슈 없는 특정위치로 scroll move Javascript 함수 구현.',
      pageURL: 'https://mire-diascia-324.notion.site/ScrollMove-654bada70b52451cb36fcaded0a418e3',
      linkType: 'blank',
      imageURL: img_scrollmove,
    },
    {
      mainTitle: 'Swiper React Components',
      subTitle: 'swiper 효과를 적용하기 위한 package 고민.',
      pageURL: 'https://mire-diascia-324.notion.site/swiper-865cefabad3a436fb50acab2b04e67c7',
      linkType: 'blank',
      imageURL: img_swiperreact,
    },
    {
      mainTitle: 'Spooner NFT 작업 회고',
      subTitle: 'Spooner NFT 프로젝트 Front 개발 KPT 회고.',
      pageURL: 'https://mire-diascia-324.notion.site/Spooner-NFT-330a37b6bbf2413a8ec7230d9996e083',
      linkType: 'blank',
      imageURL: img_spooner,
    },
    {
      mainTitle: 'Browser Rendering',
      subTitle: 'Web Browser 구조와 Rendering 과정 이해.',
      pageURL:
        'https://mire-diascia-324.notion.site/Browser-Rendering-cba78a237a5a41d58df4599ecef3b6e1',
      linkType: 'blank',
      imageURL: img_browser,
    },
    {
      mainTitle: 'Entity Code',
      subTitle: 'Entity Code를 사용해야하는 이유.',
      pageURL: 'https://mire-diascia-324.notion.site/EntityCode-afb4c754ceee4fb9b9f02e8e8a8d38c8',
      linkType: 'blank',
      imageURL: img_entitycode,
    },
    {
      mainTitle: 'Markup',
      subTitle: 'Markup 기본 내용 정리.',
      pageURL: 'https://mire-diascia-324.notion.site/Markup-538911e098694aa1a9d0d5006c6e40dc',
      linkType: 'blank',
      imageURL: img_markup,
    },
  ];
  return (
    <>
      <section className="main-section interest-col front-col">
        <div className="inner">
          <h1>개인블로그 기록</h1>
          <div className="icon-front">
            <span></span>
            <span></span>
          </div>
          <div className="blog-list">
            <ul>
              {motionList &&
                motionList.map((item, idx) => (
                  <li key={idx}>
                    {item.linkType === 'blank' ? (
                      <a
                        href={item.pageURL}
                        target="_blank"
                        style={{
                          backgroundImage: 'url(' + item.imageURL + ')',
                        }}
                      >
                        <p>
                          <strong>{item.mainTitle}</strong>
                          {item.subTitle}
                        </p>
                      </a>
                    ) : item.linkType === 'soon' ? (
                      <button type="button" className="soon" onClick={commingSoon}>
                        <p>
                          <strong>{item.mainTitle}</strong>
                          {item.subTitle}
                        </p>
                      </button>
                    ) : (
                      <a
                        href={item.pageURL}
                        style={{
                          backgroundImage: 'url(' + item.imageURL + ')',
                        }}
                      >
                        <p>
                          <strong>{item.mainTitle}</strong>
                          {item.subTitle}
                        </p>
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
