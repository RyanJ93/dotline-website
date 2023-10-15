'use strict';

import styles from './Slider.scss';
import React from 'react';

class Slider extends React.Component {
    #renderDesktopVersion(){
        return (
            <div className={styles.desktopContainer}>
                <div className={'bg-secondary text-white ' + styles.desktopInnerContainer}>
                    <div className={styles.leftContainer}>
                        <div className={'logo-img-white ' + styles.logo} />
                        <h2 className={styles.slogan}>Start privately chatting with your contacts, now</h2>
                        <h3 className={styles.catchphrase}>Cutting-edge cryptography at your service, to protect your privacy with ease</h3>
                        <a className={'button inverted ' + styles.button}>Get started</a>
                    </div>
                    <div className={styles.rightContainer}>
                        <img className={styles.preview} src={'/assets/images/dark.png'} />
                    </div>
                </div>
            </div>
        );
    }

    #renderMobileVersion(){
        return (
            <div className={styles.mobileContainer}>
                <div className={'bg-secondary text-white' + styles.mobileInnerContainer}>
                    <div>
                        <div className={'logo-img-white ' + styles.logo} />
                        <h2 className={styles.slogan}>Start privately chatting with your contacts, now</h2>
                    </div>
                    <div>
                        <img className={styles.preview} src={'/assets/images/dark.png'} />
                    </div>
                    <div>
                        <h3 className={styles.catchphrase}>Cutting-edge cryptography at your service, to protect your privacy with ease</h3>
                        <a className={'button inverted ' + styles.button}>Get started</a>
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

export default Slider;
