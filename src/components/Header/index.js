import React from 'react';
import { HeaderContainer, TitleContainer, TitleText } from './styles.module.js';
import SearchBar from '../SearchBar';

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <TitleContainer>
                    <TitleText>Header</TitleText>
                </TitleContainer>
                <SearchBar />
            </HeaderContainer>
        );
    }
}

export default Header;