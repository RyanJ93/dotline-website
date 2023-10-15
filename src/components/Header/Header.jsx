'use strict';

import LocalePicker from '../LocalePicker/LocalePicker';
import ThemePicker from '../ThemePicker/ThemePicker';
import { withTranslation } from 'react-i18next';
import styles from './Header.scss';
import React from 'react';

class Header extends React.Component {
    _handleLogoClick(event){
        event.preventDefault();
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    }

    constructor(props){
        super(props);

        this._handleLogoClick = this._handleLogoClick.bind(this);
    }

    render(){
        const { t } = this.props;
        return (
            <header className={styles.header + ' bg-primary'}>
                <div className={styles.container}>
                    <a href={'#'} onClick={this._handleLogoClick} title={t('header.linkTitle')}>
                        <div className={'logo-img ' + styles.logo} />
                    </a>
                    <div className={styles.controls}>
                        <LocalePicker orientation={'bottom'} />
                        <ThemePicker />
                    </div>
                </div>
            </header>
        );
    }
}

export default withTranslation(null, { withRef: true })(Header);
