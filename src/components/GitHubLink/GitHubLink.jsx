'use strict';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './GitHubLink.scss';
import React from 'react';

class GitHubLink extends React.Component {
    render(){
        return (
            <div className={styles.gitHubLink}>
                <FontAwesomeIcon icon='fa-brands fa-github' />
                <a className={'text-primary'} target={'_blank'} href={this.props.href} rel="noreferrer">{this.props.text}</a>
            </div>
        );
    }
}

export default GitHubLink;
