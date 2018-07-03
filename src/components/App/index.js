import React from 'react';
import styles from './styles.module.css';
import Header from '../Header/index';
import TitlesList from '../TitlesList/index';
import StickyFooter from '../StickyFooter/index';

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.content}>
                    <Header />
                    <TitlesList />
                </div>
                <StickyFooter />
            </div>
        );
    }
}

export default App;