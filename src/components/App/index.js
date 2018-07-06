import React from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import TitlesList from '../TitlesList';
import StickyFooter from '../StickyFooter';
import { Provider } from 'mobx-react';

import titlesListStore from '../../store';

class App extends React.Component {
    render() {
        return (
            <Provider titlesListStore={titlesListStore}>
                <div className={styles.app}>
                    <div className={styles.content}>
                        <Header />
                        <TitlesList />
                    </div>
                    <StickyFooter />
                </div>
            </Provider>
        );
    }
}

export default App;