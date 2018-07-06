import React from 'react';
import { SearchBarContainer, SearchInput, SendButton } from './styles.module.js'
import { observer, inject } from 'mobx-react';

@inject('titlesListStore')
@observer
class SearchBar extends React.Component {
    onSearchInputChange = (event) => {
        this.props.titlesListStore.setSearchInputValue(event.target.value);
    }

    onSendButtonClick = () => {
        this.props.titlesListStore.fetchData();
    }

    render() {
        const { titlesListStore } = this.props;

        return (
            <SearchBarContainer>
                <SearchInput type="text" placeholder="Search" onChange={this.onSearchInputChange}/>
                <SendButton onClick={this.onSendButtonClick} disabled={titlesListStore.searchInputValue == ''}>Go</SendButton>
            </SearchBarContainer>
        );
    }
}

export default SearchBar;