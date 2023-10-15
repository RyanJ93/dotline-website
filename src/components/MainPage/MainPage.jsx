'use strict';

import SlideList from '../SlideList/SlideList';
import PerkList from '../PerkList/PerkList';
import Slider from '../Slider/Slider';
import styles from './MainPage.scss';
import React from 'react';

class MainPage extends React.Component {
    render(){
        return (
            <div className={styles.mainPage}>
                <div className={styles.container}>
                    <Slider />
                    <PerkList />
                </div>
                <SlideList />
            </div>
        );
    }
}

export default MainPage;
