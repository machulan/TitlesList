import React from 'react';
import { FooterContainer, FooterText } from './styles.module.js';

class StickyFooter extends React.Component {
    render() {
        return (
            <FooterContainer>
                <FooterText>Sticky Footer</FooterText>
            </FooterContainer>
        );
    }
}

export default StickyFooter;