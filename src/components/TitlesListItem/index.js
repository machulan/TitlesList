import React from 'react';
import styles from './styles.module.css';

class TitlesListItem extends React.Component {
    formatTitle(title) {
        return title.substr(0, 23);
    }

    formatPublicationPlace(publicationPlace) {
        return publicationPlace.substr(0, 45);
    }

    render() {
        const { content } = this.props;

        return (
            <div className={styles.row}>
                <div className={styles.auxiliaryLayer1}></div> 
                <div className={styles.auxiliaryLayer2}></div>  
                <div className={styles.titleLayer}>
                    <span className={styles.title}>{this.formatTitle(content.title)}</span>
                </div>          
                <div className={styles.publicationPlaceLayer}>
                    <span className={styles.publicationPlace}>{this.formatPublicationPlace(content.publicationPlace)}</span>
                </div>
            </div>
        );
    }
}

export default TitlesListItem;