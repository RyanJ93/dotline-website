'use strict';

import styles from './Slide.scss';
import React from 'react';

class Slide extends React.Component {
    render(){
        const bg = this.props.inverted === true ? 'bg-primary' : 'bg-secondary';
        return (
            <section className={bg + ' ' + styles.slide}>
                <div className={styles.container}>{this.props.children}</div>
            </section>
        );
    }
}

export default Slide;
