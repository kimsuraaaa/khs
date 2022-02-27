import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import styles from '../endingCredit/scss/endingCredit.scss';
// import styles from '../endingCredit/EndingCredit.module.css';
import yndItem01 from "../endingCredit/image/default_profile_image01.png";
import yndItem02 from "../endingCredit/image/default_profile_image02.png";
import yndItem03 from "../endingCredit/image/default_profile_image03.png";
import yndItem04 from "../endingCredit/image/default_profile_image04.png";
import yndItem05 from "../endingCredit/image/default_profile_image05.png";
import yndItem06 from "../endingCredit/image/default_profile_image06.png";

export default function EndingCredit() {
    let mainInterval;
    let endInterval;
    let dropInterval;
    let effectTimeout;
    let sloganTimeout;
    let randomStarTimeout;
    const userList = [
        {
            "groupName": "개발팀",
            "captain":
            {
                "memberName": "개발팀장",
                "comment": "개발팀장의 코멘트 입니다."
            },
            "memberList":
                [
                    {
                        "memberName": "팀원일",
                        "comment": "팀원일님의 코멘트 입니다."
                    },
                    {
                        "memberName": "팀원이",
                        "comment": "팀원이님의 코멘트 입니다."
                    },
                    {
                        "memberName": "팀원삼",
                        "comment": "팀원삼님의 코멘트 입니다."
                    },
                    {
                        "memberName": "팀원사",
                        "comment": "팀원사님의 코멘트 입니다."
                    },
                    {
                        "memberName": "팀원오",
                        "comment": "팀원오님의 코멘트 입니다."
                    },
                    {
                        "memberName": "팀원육",
                        "comment": "팀원육님의 코멘트 입니다."
                    },
                    {
                        "memberName": "김현수",
                        "comment": "멘트에 욕심 있는 경우 내용이 많을때 테스트 입니다. 멘트에 욕심 있는 경우 내용이 많을때 테스트 입니다. 멘트에 욕심 있는 경우 내용이 많을때 테스트 입니다."
                    }
                ]
        },
        {
            "groupName": "테스트팀",
            "captain":
            {
                "memberName": "테스터리더",
                "comment": "테스터리더의 코멘트 입니다."
            },
            "memberList":
                [
                    {
                        "memberName": "테스터일",
                        "comment": "테스터1님의 코멘트 입니다."
                    },
                    {
                        "memberName": "테스터이",
                        "comment": "테스터2님의 코멘트 입니다."
                    },
                    {
                        "memberName": "테스터삼",
                        "comment": "테스터3님의 코멘트 입니다."
                    },
                    {
                        "memberName": "테스터사",
                        "comment": "테스터4님 이름이 중복인 경우 테스트."
                    },
                    {
                        "memberName": "테스터오",
                        "comment": "테스터5님의 코멘트 입니다."
                    }
                ]
        },
        {
            "groupName": "런닝맨",
            "captain":
            {
                "memberName": "유재석",
                "comment": "유재석님의 코멘트 입니다."
            },
            "memberList":
                [
                    {
                        "memberName": "지석진",
                        "comment": "지석진님의 코멘트 입니다."
                    },
                    {
                        "memberName": "양세찬",
                        "comment": "양세찬님의 코멘트 입니다."
                    },
                    {
                        "memberName": "김종국",
                        "comment": "김종국님의 코멘트 입니다."
                    },
                    {
                        "memberName": "송지효",
                        "comment": "송지효님의 코멘트 입니다."
                    },
                    {
                        "memberName": "이광수",
                        "comment": "이광수님의 코멘트 입니다."
                    },
                    {
                        "memberName": "전소민",
                        "comment": "전소민님의 코멘트 입니다."
                    },
                    {
                        "memberName": "하동훈",
                        "comment": "하동훈님의 코멘트 입니다."
                    }
                ]
        },
        {
            "groupName": "무한도전",
            "captain":
            {
                "memberName": "유재석",
                "comment": "유재석님의 코멘트 입니다."
            },
            "memberList":
                [
                    {
                        "memberName": "박명수",
                        "comment": "박명수님의 코멘트 입니다."
                    },
                    {
                        "memberName": "정준하",
                        "comment": "정준하님의 코멘트 입니다."
                    },
                    {
                        "memberName": "하동훈",
                        "comment": "하동훈님의 코멘트 입니다."
                    },
                    {
                        "memberName": "정형돈",
                        "comment": "정형돈님의 코멘트 입니다."
                    },
                    {
                        "memberName": "노홍철",
                        "comment": "노홍철님의 코멘트 입니다."
                    },
                    {
                        "memberName": "황광희",
                        "comment": "황광희님의 코멘트 입니다."
                    },
                    {
                        "memberName": "양세형",
                        "comment": "양세형님의 코멘트 입니다."
                    },
                    {
                        "memberName": "길성준",
                        "comment": "길님의 코멘트 입니다."
                    }
                ]
        },
    ];

    let bubbleItemImg = [
        yndItem01,
        yndItem02,
        yndItem03,
        yndItem04,
        yndItem05,
        yndItem06
    ]

    const memberCheck = () => {
        let nameCheck = '';
        let checkCount = 0;
        console.log('[부서별 인원체크]');
        for (let i = 0; i < userList.length; i++) {
            for (let j = 0; j < userList[i].memberList.length; j++) {
                nameCheck = userList[i].memberList[j].memberName;
                for (let k = 0; k < userList[i].memberList.length; k++) {
                    if (nameCheck === userList[i].memberList[k].memberName && j !== k) {
                        checkCount++
                    }
                }
            }
            console.log('- ' + userList[i].groupName + ' : ' + (userList[i].memberList.length + 1) + '명 / 이름중복체크 : ' + checkCount / 2 + '건');
            checkCount = 0;
        }
    }

    window.effectActive = (e) => {
        if (e.classList.value.indexOf('active') == -1) {
            e.classList.add('active');
            effectTimeout = setTimeout(function () {
                e.classList.remove('active');
                clearTimeout(effectTimeout);
            }, 1400);
        }
    }

    const mainMotion = () => {
        const yanaderList = document.getElementById('yanaderList');
        const bubbleGroup = document.getElementById('bubbleGroup');
        let groupData = '';
        let memberData = '';
        let moving = 0;

        bubbleGroup.style.display = 'block';
        userList.sort(function () {
            return Math.random() - Math.random();
        });
        bubbleItemImg.sort(function () {
            return Math.random() - Math.random();
        });
        for (let i = 0; i < userList.length; i++) {
            userList[i].memberList.sort(function () {
                return Math.random() - Math.random();
            });
            memberData = '<li><strong>' + userList[i].captain.memberName + '<span> / ' + userList[i].groupName + '</span></strong><p>' + userList[i].captain.comment + '</p></li>';
            for (let j = 0; j < userList[i].memberList.length; j++) {
                memberData += '<li>\n' +
                    '  <strong>' + userList[i].memberList[j].memberName + '<span> / ' + userList[i].groupName + '</span></strong>\n' +
                    '  <p>' + userList[i].memberList[j].comment + '</p>\n' +
                    '</li>\n';
            }
            groupData += '<div class="list-box">\n' +
                '  <strong>' + userList[i].groupName + '</strong>\n' +
                '  <ul>\n' +
                memberData +
                '  </ul>\n' +
                '</div>';
        }
        yanaderList.innerHTML = groupData;
        yanaderList.style.paddingTop = window.innerHeight + 'px';
        bubbleGroup.innerHTML = '';
        for (let i = 1; i <= 6; i++) {
            bubbleGroup.innerHTML += '<button type="button" class="bubble-item-0' + i + '" style="background-image:url(' + bubbleItemImg[i - 1] + ');" onclick="effectActive(this);"></button>';
        }
        mainInterval = setInterval(function () {
            if (moving < yanaderList.offsetHeight) {
                yanaderList.style.top = '-' + moving + 'px';
                bubbleGroup.style.top = (100 - Math.ceil(moving * 100 / yanaderList.offsetHeight)) + '%';
                moving++;
            } else {
                yanaderList.style.paddingTop = window.innerHeight + 30;
                clearInterval(mainInterval);
                cookieMotion();
            }
        }, 10);
    }

    const randomDropStar = (className) => {
        const starItem = document.querySelector(className);
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        let timing = 0;

        dropInterval = setInterval(function () {
            timing++;
            if (timing >= 100) {
                timing = 0;
                starItem.style.transition = '0s';
                starItem.style.top = Math.ceil(winHeight * Math.random()) + 'px';
                starItem.style.left = Math.ceil(winWidth * Math.random()) + 'px';
            } else if (timing == 1) {
                starItem.style.margin = '-3rem 0 0 -6rem';
                starItem.style.opacity = '0';
            } else if (timing == 30) {
                starItem.style.transition = '1s';
                starItem.style.margin = '0 0 0 0';
                starItem.style.opacity = '100%';
            } else if (timing == 40) {
                starItem.style.margin = '3rem 0 0 6rem';
                starItem.style.opacity = '0';
            }
        }, 40);
    }

    const cookieMotion = () => {
        const sloganCol = document.querySelector('.slogan-box');
        document.getElementById('bubbleGroup').style.display = 'none';
        sloganCol.style.height = window.innerHeight;
        let alpha = 0;
        sloganCol.style.transition = '0s';
        document.querySelector('.btn-back').classList.add('type-black');

        endInterval = setInterval(function () {
            if (alpha < 100) {
                sloganCol.style.opacity = alpha + '%';
                alpha++;
            } else {
                clearInterval(endInterval);
                sloganCol.classList.add('motion-on');
                sloganCol.style.transition = '1s';
                document.getElementById('bubbleGroup').style.top = '100%';
                sloganTimeout = setTimeout(function () {
                    sloganCol.style.opacity = '0';
                    sloganCol.classList.remove('motion-on');
                    document.querySelector('.btn-back').classList.remove('type-black');
                    mainMotion();
                }, 5500);
            }
        }, 10);
    }

    useEffect(() => {
        console.log('one');
        mainMotion();
        memberCheck();
        randomDropStar('.random-drop-star');

        randomStarTimeout = setTimeout(function () {
            randomDropStar('.random-drop-star2');
        }, 1000);

        return () => {
            clearInterval(endInterval);
            clearInterval(mainInterval);
            clearInterval(dropInterval);
        }
    }, [])

    return (
        <>
            <div className="yanadoo-col">
                <h1>야 너두 할수있어</h1>
                <button type="button" className="btn-back">뒤로가기</button>
                <div className="yanadoo-box">
                    <div className="yanadoo-list" id="yanaderList"></div>
                    <span className="random-drop-star"></span>
                    <span className="random-drop-star2"></span>
                    <div id="bubbleGroup"></div>
                </div>
                <div className="slogan-box">
                    <strong><span className="slogan-01">야</span><span className="slogan-02">너두</span><span
                        className="slogan-03">할수있어</span></strong>
                    <span className="logo-ynd"></span>
                </div>
            </div>
        </>
    )
}