import React from 'react';
import media_intro from '../../assets/images/media_intro.mp4';
import MediaYafit from '../../assets/images/media_riding.mp4';
import Imgbam from '../../assets/images/img_bambam.png';
import '../../assets/styles/intro.scss';

export default function Intro () {
    return (
        <>
            <div className="intro">
                <div className="inner">
                    <h1>intro</h1>
                    <div className="logo-box">
                        <p><strong><em>K</em>IM<em>H</em>YUN<em>S</em>U</strong></p>
                        <p><span className="media-scale">Copyright &copy; KIMHYUNSU, All rights reserved.</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}