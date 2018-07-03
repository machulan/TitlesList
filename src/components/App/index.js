import React from 'react';
import styles from './styles.module.css';
import Header from '../Header/index';
import TitlesList from '../TitlesList/index';
import StickyFooter from '../StickyFooter/index';
import { Provider } from 'mobx-react';

import titlesListStore from '../../store/index';

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