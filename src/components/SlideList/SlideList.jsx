'use strict';

import MediaSlideContent from '../MediaSlideContent/MediaSlideContent';
import TextSlideContent from '../TextSlideContent/TextSlideContent';
import GitHubLink from '../GitHubLink/GitHubLink';
import { withTranslation } from 'react-i18next';
import styles from './SlideList.scss';
import Slide from '../Slide/Slide';
import React from 'react';

class SlideList extends React.Component {
    render(){
        const { t } = this.props;
        return (
            <React.Fragment>
                <Slide inverted={true}>
                    <TextSlideContent inverted={true}>
                        <p className={styles.title}>{t('slideList.alwaysReady.title')}</p>
                        <p className={styles.text}>{t('slideList.alwaysReady.text')}</p>
                    </TextSlideContent>
                    <MediaSlideContent>
                        <img src={'/assets/images/always_ready.png'} alt={t('slideList.alwaysReady.title')} />
                    </MediaSlideContent>
                </Slide>
                <Slide>
                    <MediaSlideContent>
                        <img src={'/assets/images/everything_under_control.png'} alt={t('slideList.everythingUnderControl.title')} />
                    </MediaSlideContent>
                    <TextSlideContent>
                        <p className={styles.title + ' text-white'}>{t('slideList.everythingUnderControl.title')}</p>
                        <p className={styles.text + ' text-white'}>{t('slideList.everythingUnderControl.text')}</p>
                    </TextSlideContent>
                </Slide>
                <Slide inverted={true}>
                    <TextSlideContent inverted={true}>
                        <p className={styles.title}>{t('slideList.noSecretBehind.title')}</p>
                        <p className={styles.text}>{t('slideList.noSecretBehind.text')}</p>
                    </TextSlideContent>
                    <MediaSlideContent>
                        <div className={styles.gitHubLinks}>
                            <GitHubLink href={'https://github.com/RyanJ93/dotline-server'} text={t('slideList.gitHubLink.server')} />
                            <GitHubLink href={'https://github.com/RyanJ93/dotline-client'} text={t('slideList.gitHubLink.client')} />
                            <GitHubLink href={'https://github.com/RyanJ93/dotline-website'} text={t('slideList.gitHubLink.website')} />
                        </div>
                    </MediaSlideContent>
                </Slide>
                <Slide>
                    <div className={styles.centeredSlide}>
                        <p className={styles.title + ' text-white'}>{t('slideList.tryOut')}</p>
                        <a className={'button inverted'} href={'https://app.dotline.enricosola.dev'}>{t('slideList.getStarted')}</a>
                        <br /><br />
                        <p className={styles.note + ' text-white'}>{t('slideList.disclaimer')}</p>
                    </div>
                </Slide>
            </React.Fragment>
        );
    }
}

export default withTranslation(null, { withRef: true })(SlideList);
