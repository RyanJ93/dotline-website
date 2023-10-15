'use strict';

import MediaSlideContent from '../MediaSlideContent/MediaSlideContent';
import TextSlideContent from '../TextSlideContent/TextSlideContent';
import styles from './SlideList.scss';
import Slide from '../Slide/Slide';
import React from 'react';

class SlideList extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Slide inverted={true}>
                    <TextSlideContent inverted={true}>
                        <p className={styles.title}>Always ready</p>
                        <p className={styles.text}>No matter where you are and what device you are using you are ready to use DotLine, all your conversations and messages are there with you, everything is securely stored in the cloud and automatically synchronized across your devices.</p>
                    </TextSlideContent>
                    <MediaSlideContent>
                        <img src={'/assets/images/dark.png'} />
                    </MediaSlideContent>
                </Slide>
                <Slide>
                    <MediaSlideContent>
                        <img src={'/assets/images/dark.png'} />
                    </MediaSlideContent>
                    <TextSlideContent>
                        <p className={styles.title + ' text-white'}>Everything under control</p>
                        <p className={styles.text + ' text-white'}>Enjoy a service focused on privacy and data protection: every message you send is stored safely using the most advanced cryptographic technologies and protected by the end-to-end encryption, furthermore you can track and manage every access made to your account to prevent any suspicious activity.</p>
                    </TextSlideContent>
                </Slide>
                <Slide inverted={true}>
                    <TextSlideContent inverted={true}>
                        <p className={styles.title}>No secret behind</p>
                        <p className={styles.text}>DotLine has no secrets, source code is completely open-source and available for everyone for free, you can use the service free of charge or you could even setup your very own messaging platform using DotLine source code and assets, learn more on the project's official GitHub repository.</p>
                    </TextSlideContent>
                    <MediaSlideContent>
                        <img src={'/assets/images/dark.png'} />
                    </MediaSlideContent>
                </Slide>
                <Slide>
                    <div className={styles.centeredSlide}>
                        <p className={styles.title + ' text-white'}>Try out DotLine now!</p>
                        <a className={'button inverted'}>Get started</a>
                        <br /><br />
                        <p className={styles.note + ' text-white'}>DotLine is an academic project made by Enrico Sola for academic purposes</p>
                    </div>
                </Slide>
            </React.Fragment>
        );
    }
}

export default SlideList;
