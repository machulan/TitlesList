import React from 'react';
import { Content } from './styles.module.js';
import Header from '../Header';
import TitlesList from '../TitlesList';
import StickyFooter from '../StickyFooter';
import { Provider } from 'mobx-react';

import titlesListStore from '../../store';

class App extends React.Component {
    render() {
        return (
            <Provider titlesListStore={titlesListStore}>
                <div>
                    <Content>
                        <Header />
                        <TitlesList />
                    </Content>
                    <StickyFooter />
                </div>
            </Provider>
        );
    }
}

export default App;