'use strict';

import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './App.scss';
import React from 'react';

class App extends React.Component {
    render(){
        return (
            <main className={styles.app}>
                <Header />
                <MainPage />
                <Footer />
            </main>
        );
    }
}

export default App;
