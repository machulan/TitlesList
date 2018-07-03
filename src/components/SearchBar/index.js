import React from 'react';
import styles from './styles.module.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className={styles.search}>
                <input type="text" placeholder="Search" className={styles.searchInput}/>
                <button className={styles.sendButton}>Go</button>
            </div>
        );
    }
}

export default SearchBar;