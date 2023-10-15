'use strict';

import styles from './TextSlideContent.scss';
import React from 'react';

class TextSlideContent extends React.Component {
    render(){
        const inverted = this.props.inverted ?? false;
        return <div className={styles.textSlideContent} data-inverted={inverted}>{this.props.children}</div>;
    }
}

export default TextSlideContent;
