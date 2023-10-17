'use strict';

import { withTranslation } from 'react-i18next';
import styles from './Slider.scss';
import React from 'react';

class Slider extends React.Component {
    #renderDesktopVersion(){
        const { t } = this.props;
        return (
            <div className={styles.desktopContainer}>
                <div className={'bg-secondary text-white ' + styles.desktopInnerContainer}>
                    <div className={styles.leftContainer}>
                        <div className={'logo-img-white ' + styles.logo} />
                        <h2 className={styles.slogan}>{t('slider.slogan')}</h2>
                        <h3 className={styles.catchphrase}>{t('slider.catchphrase')}</h3>
                        <a className={'button inverted ' + styles.button} href={'https://app.dotline.enricosola.dev'}>{t('slider.getStarted')}</a>
                    </div>
                    <div className={styles.rightContainer}>
                        <img className={styles.preview} src={'/assets/images/slider.png'} alt={'DotLine'} />
                    </div>
                </div>
            </div>
        );
    }

    #renderMobileVersion(){
        const { t } = this.props;
        return (
            <div className={styles.mobileContainer}>
                <div className={'bg-secondary text-white ' + styles.mobileInnerContainer}>
                    <div>
                        <div className={'logo-img-white ' + styles.logo} />
                        <h2 className={styles.slogan}>{t('slider.slogan')}</h2>
                    </div>
                    <div>
                        <img className={styles.preview} src={'/assets/images/slider.png'} alt={'DotLine'} />
                    </div>
                    <div>
                        <h3 className={styles.catchphrase}>{t('slider.catchphrase')}</h3>
                        <a className={'button inverted ' + styles.button} href={'https://app.dotline.enricosola.dev'}>{t('slider.getStarted')}</a>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return (
            <section className={styles.slider}>
                {this.#renderDesktopVersion()}
                {this.#renderMobileVersion()}
            </section>
        );
    }
}

export default withTranslation(null, { withRef: true })(Slider);
