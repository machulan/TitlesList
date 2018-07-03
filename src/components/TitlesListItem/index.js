import React from 'react';
import styles from './styles.module.css';

class TitlesListItem extends React.Component {
    render() {
        return (
            <div className={styles.row}>
                <div className={styles.auxiliaryLayer1}></div> 
                <div className={styles.auxiliaryLayer2}></div>  
                <div className={styles.titleLayer}>
                    <span className={styles.title}>Designation</span>
                </div>          
                <div className={styles.publicationPlaceLayer}>
                    <span className={styles.publicationPlace}>Find a co-founder for your startup business</span>
                </div>
            </div>
        );
    }
}

export default TitlesListItem;