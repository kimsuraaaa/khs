import React from 'react';

export default function MBTIStart (props) {
    const pageMoveStep = () => {
        document.querySelector('.aptitude-col').classList.add('aqtitude-start');
        setTimeout(function() {
            props.getPageType('step');
        }, 1500);
    }
    return (
        <>
            <div className="aptitude-col">
                <div className="inner-col">
                    <div className="begin-box">
                        <dl>
                            <dt><span></span>1분 MBTI</dt>
                            <dd>
                                <p>포트폴리오 용도로 만들어진<br/>테스트 페이지 입니다.</p>
                                <button type="button" onClick={pageMoveStep}>시작하기</button>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}