import React from 'react';
import styles from './styles.module.css';
import SearchBar from '../SearchBar';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Header</span>
                </div>
                <SearchBar />
            </header>
        );
    }
}

export default Header;