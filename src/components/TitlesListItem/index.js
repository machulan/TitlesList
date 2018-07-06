import React from 'react';
import { Row, FirstBackgroundLayer, SecondBackgroundLayer, TitleLayer, PublicationPlaceLayer, Title, PublicationPlace } from './styles.module.js';

class TitlesListItem extends React.Component {
    formatTitle = (title) => {
        return title.substr(0, 23);
    }

    formatPublicationPlace = (publicationPlace) => {
        return publicationPlace.substr(0, 45);
    }

    render() {
        return (
            <Row>
                <FirstBackgroundLayer></FirstBackgroundLayer> 
                <SecondBackgroundLayer></SecondBackgroundLayer>  
                <TitleLayer>
                    <Title>{this.formatTitle(this.props.title)}</Title>
                </TitleLayer>          
                <PublicationPlaceLayer>
                    <PublicationPlace>{this.formatPublicationPlace(this.props.publicationPlace)}</PublicationPlace>
                </PublicationPlaceLayer>
            </Row>
        );
    }
}

export default TitlesListItem;