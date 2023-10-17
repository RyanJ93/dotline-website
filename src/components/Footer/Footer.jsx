'use strict';

import LocalePicker from '../LocalePicker/LocalePicker';
import ThemePicker from '../ThemePicker/ThemePicker';
import { withTranslation } from 'react-i18next';
import styles from './Footer.scss';
import React from 'react';

class Footer extends React.Component {
    render(){
        const { t } = this.props;
        return (
            <footer className={styles.footer + ' bg-primary'}>
                <div className={styles.container}>
                    <div className={styles.credits + ' text-primary'}>
                        <p>{t('footer.credits')}<a className={'text-primary'} href={'https://www.enricosola.dev'} target={'_blank'} rel='noreferrer'>Enrico Sola</a>.</p>
                        <p>Copyright © {new Date().getFullYear()} by Enrico Sola.</p>
                    </div>
                    <div className={styles.controls}>
                        <LocalePicker orientation={'top'} />
                        <ThemePicker />
                    </div>
                </div>
            </footer>
        );
    }
}

export default withTranslation(null, { withRef: true })(Footer);
