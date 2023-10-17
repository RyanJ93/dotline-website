'use strict';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from 'react-i18next';
import styles from './PerkList.scss';
import React from 'react';

class PerkList extends React.Component {
    render(){
        const { t } = this.props;
        return (
            <section className={styles.perkList}>
                <div className={styles.container}>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-lock' />
                        <h4 className={styles.title}>{t('perkList.secure.title')}</h4>
                        <p className={styles.text}>{t('perkList.secure.text')}</p>
                    </div>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-user-secret' />
                        <h4 className={styles.title}>{t('perkList.privacy.title')}</h4>
                        <p className={styles.text}>{t('perkList.privacy.text')}</p>
                    </div>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-window-maximize' />
                        <h4 className={styles.title}>{t('perkList.noAppRequired.title')}</h4>
                        <p className={styles.text}>{t('perkList.noAppRequired.text')}</p>
                    </div>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-comments' />
                        <h4 className={styles.title}>{t('perkList.flexible.title')}</h4>
                        <p className={styles.text}>{t('perkList.flexible.text')}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation(null, { withRef: true })(PerkList);
