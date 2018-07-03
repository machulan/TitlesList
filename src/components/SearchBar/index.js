import React from 'react';
import styles from './styles.module.css';
import { observer, inject } from 'mobx-react';

@inject('titlesListStore')
@observer
class SearchBar extends React.Component {
    onSearchInputChange = (event) => {
        this.props.titlesListStore.setSearchInputValue(event.target.value);
    }

    onSendButtonClick = () => {
        this.props.titlesListStore.setMockData();
        // this.props.titlesListStore.fetchData();
    }

    render() {
        return (
            <div className={styles.search}>
                <input type="text" placeholder="Search" className={styles.searchInput} onChange={this.onSearchInputChange}/>
                <button className={styles.sendButton} onClick={this.onSendButtonClick} disabled={this.props.titlesListStore.searchInputValue == ''}>Go</button>
            </div>
        );
    }
}

export default SearchBar;