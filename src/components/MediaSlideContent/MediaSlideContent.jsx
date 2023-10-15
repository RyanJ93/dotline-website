'use strict';

import styles from './MediaSlideContent.scss';
import React from 'react';

class MediaSlideContent extends React.Component {
    render(){
        return <div className={styles.mediaSlideContent}>{this.props.children}</div>;
    }
}

export default MediaSlideContent;
