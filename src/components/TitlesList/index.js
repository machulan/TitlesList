import React from 'react';
import styles from './styles.module.css';
import TitlesListItem from '../TitlesListItem/index';
import {observer, inject} from 'mobx-react';

@inject('titlesListStore')
@observer
class TitlesList extends React.Component {
    render() {
        const titlesListStore = this.props.titlesListStore;

        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    {
                        titlesListStore.titlesList.map(titleListItemStore => {
                            return <TitlesListItem key={titleListItemStore.key} title={titleListItemStore.title} publicationPlace={titleListItemStore.publicationPlace} />
                        })
                    }
                </div>
            </section>
        );  
    }
}
    
export default TitlesList;
