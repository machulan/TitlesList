import React from 'react';
import { Content } from './styles.module.js';
import TitlesListItem from '../TitlesListItem';
import {observer, inject} from 'mobx-react';

@inject('titlesListStore')
@observer
class TitlesList extends React.Component {
    render() {
        const { titlesListStore } = this.props;

        return (
            <section>
                <Content>
                    {
                        titlesListStore.titles.map(titlesListItemStore => (
                            <TitlesListItem key={titlesListItemStore.key} title={titlesListItemStore.title} publicationPlace={titlesListItemStore.publicationPlace} />
                        ))
                    }
                </Content>
            </section>
        );  
    }
}
    
export default TitlesList;
