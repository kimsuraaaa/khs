import React, { useEffect } from 'react';
import hsPackage from 'hsmotion';

export default function MBTIStart(props) {
  const pageMoveStep = () => {
    document.querySelector('.aptitude-col').classList.add('aqtitude-start');
    setTimeout(function () {
      props.getPageType('step');
    }, 1500);
  };

  useEffect(() => {
    document.querySelector('.aptitude-col').classList.add('active');
    hsPackage.minHeightFull('.aptitude-col');
  }, []);

  return (
    <>
      <section className="aptitude-col start">
        <div className="inner-col">
          <div className="begin-box">
            <dl>
              <dt>
                <span></span>1분 MBTI
              </dt>
              <dd>
                <p>
                  <span>4문항만 답해주시면 됩니다.</span>
                  <span>시작 버튼을 눌러주세요.</span>
                </p>
                <button type="button" onClick={pageMoveStep}>
                  시작!
                </button>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
