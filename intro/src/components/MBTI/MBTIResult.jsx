import React, { useState, useEffect }  from 'react';
import AptitudeResultData from '../../data/QuizStepResultData.json';

export default function MBTIResult (props, resultList) {
    const [filterResult, setFilterResult] = useState('');

    const resultView = (type) => {
        document.querySelector('.aptitude-col').classList.add('result-view');
        setFilterResult(type);
    }

    const reStart = () => {
        props.getPageType('start');
    }

    useEffect(() => {
        resultView(props.resultList[0] + props.resultList[1] + props.resultList[2] + props.resultList[3]);
    }, [])
    return (
        <>
            <div className="aptitude-col">
                <div className="inner-col">
                    <div className="progress-box">
                        <span className="progress-item">결과 확인 중</span>
                    </div>
                    {AptitudeResultData &&
                        AptitudeResultData.filter(item => item.resultType === filterResult).map((item, index) =>
                        <div className="result-box" key={index}>
                            <dl>
                                <dt className={item.resultType}><strong>{item.resultType}</strong>{item.subTitle}</dt>
                                <dd>
                                    <p className="result-content">
                                        {item.resultContent}
                                    </p>
                                    <button type="button" onClick={reStart}>처음으로 돌아가기</button>
                                    <span>* 이미지 및 설문 정보 출처 : www.16personalities.com</span>
                                </dd>
                            </dl>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}