'use strict';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Theme from '../../facades/Theme';
import styles from './ThemePicker.scss';
import React from 'react';

class ThemePicker extends React.Component {
    _handleThemeChange(event){
        Theme.setTheme(event.target.closest('div[data-theme]').getAttribute('data-theme'));
        this.forceUpdate();
    }

    constructor(props){
        super(props);

        this._handleThemeChange = this._handleThemeChange.bind(this);
    }

    render(){
        return (
            <div className={styles.themePicker + ' text-primary'} data-current-theme={Theme.detectTheme()}>
                <div onClick={this._handleThemeChange} data-theme={'light'}>
                    <FontAwesomeIcon icon='fa-solid fa-sun' />
                </div>
                <div onClick={this._handleThemeChange} data-theme={'dark'}>
                    <FontAwesomeIcon icon='fa-solid fa-moon' />
                </div>
            </div>
        );
    }
}

export default ThemePicker;
