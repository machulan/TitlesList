import React from 'react';
import styles from './styles.module.css';
import TitlesListItem from '../TitlesListItem/index';

class TitlesList extends React.Component {
    render() {
        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <TitlesListItem/>
                    <TitlesListItem/>
                    <TitlesListItem/>
                    <TitlesListItem/>
                    <TitlesListItem/>
                </div>
            </section>
        );  
    }
}
    
export default TitlesList;
