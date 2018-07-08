import React from 'react';
import styles from './styles.module.css';
import TitlesListItem from '../TitlesListItem';
import {observer, inject} from 'mobx-react';

@inject('titlesListStore')
@observer
class TitlesList extends React.Component {
    render() {
        const { titlesListStore } = this.props;

        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    {
                        titlesListStore.titles.map(item => (
                            <TitlesListItem content={item} />
                        ))
                    }
                </div>
            </section>
        );  
    }
}
    
export default TitlesList;
