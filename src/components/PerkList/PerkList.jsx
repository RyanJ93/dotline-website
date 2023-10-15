'use strict';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from 'react-i18next';
import styles from './PerkList.scss';
import React from 'react';

class PerkList extends React.Component {
    render(){
        return (
            <section className={styles.perkList}>
                <div className={styles.container}>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-lock' />
                        <h4 className={styles.title}>Secure</h4>
                        <p className={styles.text}>DotLine has built-in end-to-end encryption support out of the box, this allows you to enjoy a fully private messaging service.</p>
                    </div>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-user-secret' />
                        <h4 className={styles.title}>Privacy focused</h4>
                        <p className={styles.text}>Pick your favourite username and a good password, no e-mail address, phone number or other piece of personal information needed.</p>
                    </div>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-window-maximize' />
                        <h4 className={styles.title}>No app required</h4>
                        <p className={styles.text}>You don't need to download any new application to start using DotLine, your web browser is more than enough.</p>
                    </div>
                    <div className={styles.item + ' text-primary'}>
                        <FontAwesomeIcon icon='fa-solid fa-comments' />
                        <h4 className={styles.title}>Flexible</h4>
                        <p className={styles.text}>Not only plain text messages, DotLine supports attachments, voice messages, geo location and stickers, both static and animated.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation(null, { withRef: true })(PerkList);
