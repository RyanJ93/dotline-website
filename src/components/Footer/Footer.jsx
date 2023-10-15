'use strict';

import styles from './Footer.scss';
import React from 'react';
import LocalePicker from "../LocalePicker/LocalePicker";
import ThemePicker from "../ThemePicker/ThemePicker";

class Footer extends React.Component {
    render(){
        return (
            <footer className={styles.footer + ' bg-primary'}>
                <div className={styles.container}>
                    <div className={styles.controls}>
                        <LocalePicker orientation={'top'} />
                        <ThemePicker />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
