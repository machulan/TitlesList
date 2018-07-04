import React from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import TitlesList from '../TitlesList';
import StickyFooter from '../StickyFooter';

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