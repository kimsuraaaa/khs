import React from 'react';
import app_ynd_webview_01 from '../../assets/images/app_ynd_webview_01.png';
import app_ynd_webview_02 from '../../assets/images/app_ynd_webview_02.png';
import mobile_ticketing_01 from '../../assets/images/mobile_ticketing_01.png';
import mobile_ticketing_02 from '../../assets/images/mobile_ticketing_02.png';
import mobile_ynd from '../../assets/images/mobile_ynd.png';
import pc_ynd from '../../assets/images/pc_ynd.png';
import mobile_yndclass from '../../assets/images/mobile_yndclass.png';
import pc_yndclass from '../../assets/images/pc_yndclass.png';
import mobile_realseries from '../../assets/images/mobile_realseries.png';
import pc_realseries from '../../assets/images/pc_realseries.png';
import mobile_potential_01 from '../../assets/images/mobile_potential_01.png';
import mobile_potential_02 from '../../assets/images/mobile_potential_02.png';
import mobile_catchform from '../../assets/images/mobile_catchform.png';
import pc_catchform from '../../assets/images/pc_catchform.png';
import mobile_ubiq from '../../assets/images/mobile_ubiq.png';
import pc_ubiq from '../../assets/images/pc_ubiq.png';
import pc_onepointeng from '../../assets/images/pc_onepointeng.png';
import mobile_newlite from '../../assets/images/mobile_newlite.png';
import mobile_newlite_sub from '../../assets/images/mobile_newlite_sub.png';
import mobile_skevent from '../../assets/images/mobile_skevent.png';
import mobile_skevent_sub from '../../assets/images/mobile_skevent_sub.png';
import mobile_skylife from '../../assets/images/mobile_skylife.png';
import pc_skylife from '../../assets/images/pc_skylife.png';
import pc_judapring from '../../assets/images/pc_judapring.png';
import img_khs from '../../assets/images/img_khs.png';

export default function Intro () {
    return (
        <>
            <ul>
                <li className="intro">
                    <div className="inner">
                        <h1>intro</h1>
                        <div className="logo-box">
                            <p><strong><em>K</em>IM<em>H</em>YUN<em>S</em>U</strong></p>
                            <p><span className="media-scale">Copyright &copy; KIMHYUNSU, All rights reserved.</span></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <h1><em>i</em>ntroduce<span>소개</span></h1>                
                        <div className="introduce-box">
                            <div className="icon-khs">
                                <dl>
                                    <dt><span className="icon-hear"></span><span className="icon-eye"></span><span className="icon-mouth"></span></dt>
                                    <dd><span></span></dd>
                                </dl>
                            </div>
                            <div className="motion-fade-down">
                                <ul>
                                    <li>안녕하세요 퍼블리셔 김현수 입니다</li>
                                    <li>사이트 구축에 있어 퍼블리싱은 기반이 되는 작업이기 때문에 매우 중요한 역할이라고 생각합니다.</li>
                                    <li>단순 UI를 그리기 위한 코딩이 아닌 효율적이고 직관적인 사이트를 구축할 수 있도록 고민하며 시멘틱 마크업을 기본으로 페이지에서 표현하고자 하는 구조에 대해 먼저 생각하며 유지보수를 고려하고, SEO를 통해 다수의 사용자들이 접근할 수 있는 코드를 만들기 위해 노력합니다.</li>
                                    <li>HTML, CSS, Javascript를 메인 기술로 사용하고 디자인은 기존 디자인을 유지보수 정도 가능하며, 인터렉티브한 CSS에 관심이 있습니다.</li>
                                    <li>다수의 프로젝트를 진행하면서 각 Design과 Backend 파트의 협업에 있어 어려움이 없습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <h1><em>s</em>kill<span>할 수 있는 것</span></h1>
                        <div className="icon-keyboard">
                            <span></span><span className="eft-keyup-5"></span><span></span><span className="eft-keyup-3"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span className="eft-keyup-1"></span><span></span><span></span><span></span><span></span><span></span><span></span><span  className="eft-keyup-3"></span><span></span><span></span>
                            <span></span><span className="eft-keyup-4"></span><span></span><span></span><span></span><span></span><span></span><span></span><span className="eft-keyup-4"></span><span></span><span></span><span className="eft-keyup-2"></span><span></span><span></span><span></span><span className="eft-keyup-4" style={{ width: "4.5em" }}></span><span></span><span></span><span></span>
                        </div>
                        <div className="skill-box">
                            <ul>
                                <li>
                                    <dl>
                                        <dt><span>&lt;/&gt;</span><strong>HTML</strong></dt>
                                        <dd><em>시멘틱 마크업</em>을 기본으로 페이지에서 표현하고자 하는 구조에 대해 먼저 생각합니다.<br/><em>유지보수와 확장성을 고려한 코딩</em>을 지향하고, <em>SEO</em>를 통해 다수의 사용자들이 접근할 수 있도록 노력합니다.</dd>
                                    </dl>
                                </li>                            
                                <li>
                                    <dl>
                                        <dt><span>CSS</span><strong>CSS</strong></dt>
                                        <dd><em>Cross Browsing</em>을 고려하며 유지보수에 용이하도록 style 가이드를 작성합니다.<br/>라이브러리를 사용하지 않고 <em>interaction한 motion</em>을 구현하기 위한 style을 지향합니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><span>JS</span><strong>Javascript</strong></dt>
                                        <dd><em>JS, Jquery를 통한 동적 기능 구현</em>이 가능하며 오픈소스를 활용하여 기획, 디자인에서 목표한 기능까지 구현합니다. </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><span>D</span><strong>Design</strong></dt>
                                        <dd><em>Adobe Photoshop</em> 툴을 사용하며 기존 <em>디자인된 페이지를 유지보수</em> 가능합니다</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><span>C</span><strong>형상관리</strong></dt>
                                        <dd><em>SVN, Git 등 형상관리 시스템 사용</em>에 다수의 경험이 있어 프로젝트 협업에 어려움이 없습니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><span>E</span><strong>etc.</strong></dt>
                                        <dd>그 외 <em>Microsoft Office Word, Excel, Power Point</em> 등 사용 가능하며 <em>JIRA, Confluence</em> 협업 툴을 사용합니다</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <h1><em>w</em>ork<span>어떤 일들을 해왔나요</span></h1>
                        <div className="icon-work">
                            <div className="icon-gear"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
                            <div className="icon-gear"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
                        </div>
                        <div className="work-box active">
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={app_ynd_webview_01} alt="야나두 앱 Webview 1" /></div>
                                            <div className="work-mobile"><img src={app_ynd_webview_02} alt="야나두 앱 Webview 2" /></div>
                                        </dt>
                                        <dd>
                                            <p>
                                                <strong>야나두 2.0 APP Webview</strong>
                                                <em>
                                                    <a href="https://itunes.apple.com/kr/app/id1539582420" target="_blank" className="device-ios">[APP 다운로드]</a>
                                                    <a href="https://play.google.com/store/apps/details?id=kr.co.yanadoo.app2&hl=ko" target="_blank" className="device-aos">[APP 다운로드]</a>
                                                </em>
                                            </p>
                                            <p><span>APP Webview page</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_ticketing_01} alt="야나두 티켓팅 이벤트 1" /></div>
                                            <div className="work-mobile"><img src={mobile_ticketing_02} alt="야나두 티켓팅 이벤트 2" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>야나두 티켓팅 이벤트</strong><em><a href="https://event.yanadoo.co.kr/event/yanadooticketing" target="_blank">https://event.yanadoo.co.kr/event/yanadooticketing</a></em></p>
                                            <p><span>Mobile 이벤트 페이지 퍼블리싱</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_ynd} alt="mobile 야나두" /></div>
                                            <div className="work-pc"><img src={pc_ynd} alt="PC 야나두" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>야나두</strong><em><a href="https://m.yanadoo.co.kr" target="_blank">https://m.yanadoo.co.kr</a><br/><a href="https://www.yanadoo.co.kr" target="_blank">https://www.yanadoo.co.kr</a></em></p>
                                            <p><span>PC, Mobile 야나두 운영 사이트 상품 랜딩 페이지 및 이벤트 페이지 퍼블리싱, 각 페이지 유지보수 및 이벤트, 상품 랜딩 페이지</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_yndclass} alt="mobile 야나두클래스" /></div>
                                            <div className="work-pc"><img src={pc_yndclass} alt="PC 야나두클래스" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>야나두 클래스</strong><em><a href="https://m.yanadooclass.co.kr" target="_blank">https://m.yanadooclass.co.kr</a><br/><a href="https://www.yanadooclass.co.kr" target="_blank">https://www.yanadooclass.co.kr</a></em></p>
                                            <p><span>PC, Mobile 야나두 클래스 사이트 모든 페이지 퍼블리싱, 각 페이지 유지보수</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_realseries} alt="mobile 리얼시리즈" /></div>
                                            <div className="work-pc"><img src={pc_realseries} alt="PC 리얼시리즈" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>리얼시리즈</strong><em><a href="https://m.realseries.co.kr" target="_blank">https://m.realseries.co.kr</a><br/><a href="https://www.realseries.co.kr" target="_blank">https://www.realseries.co.kr</a></em></p>
                                            <p><span>PC, Mobile 야나두 리얼시리즈 사이트 모든 페이지 퍼블리싱, 각 페이지 유지보수</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_potential_01} alt="mobile 포텐셜큐1" /></div>
                                            <div className="work-mobile"><img src={mobile_potential_02} alt="mobile 포텐셜큐2" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>포텐셜큐</strong><em><a href="https://m.potential-q.co.kr" target="_blank">https://m.potential-q.co.kr</a></em></p>
                                            <p><span>Mobile 포텐셜큐 사이트 페이지 퍼블리싱, 각 페이지 유지보수</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_catchform} alt="mobile 캐치폼" /></div>
                                            <div className="work-pc"><img src={pc_catchform} alt="PC 캐치폼" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>캐치폼</strong><em><a href="http://www.catchform.co.kr/" target="_blank">http://www.catchform.co.kr</a></em></p>
                                            <p><span>PC, Mobile 캐치폼 반응형 사이트 유지보수</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_ubiq} alt="mobile 유빅S&amp;C" /></div>
                                            <div className="work-pc"><img src={pc_ubiq} alt="PC 유빅S&amp;C" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>유빅S&amp;C</strong><em><a href="http://ubiquesnc.com/" target="_blank">http://ubiquesnc.com</a></em></p>
                                            <p><span>PC, Mobile 유빅S&amp;C 모든페이지 퍼블리싱 및 유지보수</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-pc"><img src={pc_onepointeng} alt="PC 원포인트이엔지" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>원포인트이엔지</strong><em><a href="http://www.onepointeng.co.kr/" target="_blank">http://www.onepointeng.co.kr/</a></em></p>
                                            <p><span>PC 기획, 디자인 및 퍼블리싱 사이트 개발</span></p>
                                            <p><span>Design, Photoshop, HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_newlite} alt="mobile 뉴라이트 건강지킴이" /></div>
                                            <div className="work-mobile"><img src={mobile_newlite_sub} alt="mobile 뉴라이트 건강지킴이 sub" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>뉴라이트 건강지킴이 Event Page</strong><em>페이지 없음</em></p>
                                            <p><span>Mobile Event page 퍼블리싱</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_skevent} alt="mobile SK Event" /></div>
                                            <div className="work-mobile"><img src={mobile_skevent_sub} alt="mobile SK Event sub" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>SK Mini Event Page</strong><em>페이지 없음</em></p>
                                            <p><span>Mobile Event page 퍼블리싱</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-mobile"><img src={mobile_skylife} alt="mobile Skylife" /></div>
                                            <div className="work-pc"><img src={pc_skylife} alt="PC Skylife" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>Skylife Event Page</strong><em>페이지 없음</em></p>
                                            <p><span>PC, Mobile Event page 퍼블리싱</span></p>
                                            <p><span>HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <div className="work-pc"><img src={pc_judapring} alt="PC JUDAPRING" /></div>
                                        </dt>
                                        <dd>
                                            <p><strong>개인 홈페이지 (JUDAPRING)</strong><em><a href="http://kimfilla.cafe24.com/judapring/judapring/" target="_blank">http://kimfilla.cafe24.com/judapring/judapring/ (Demo site)</a></em></p>
                                            <p><span>PC 기획, 디자인 및 퍼블리싱 사이트 개발</span></p>
                                            <p><span>Design, Photoshop, Flash, HTML, CSS, Javascript</span></p>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                            <button type="button" className="btn-more active">접기</button>
                        </div>
                    </div>
                </li>
                <li className="about">
                    <div className="inner">
                        <h1><em>c</em>ontact<span>연락처</span></h1>
                        <div className="icon-contact">
                            <span></span>
                        </div>
                        <div className="profile-box">
                            <img src={img_khs} alt="김현수" />
                            <p>KIMHYUNSU / 1985.06.29<br/><a href="sms:01049221429">01049221429</a> / <a href="mailto:primenumber43@naver.com">primenumber43@naver.com</a></p>
                        </div>
                    </div>
                </li>
            </ul>
            <button type="button" className="btn-top media-scale">맨위로</button>
        </>
    )
}