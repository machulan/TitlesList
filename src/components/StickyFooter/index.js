import React from 'react';
import styles from './styles.module.css';

class StickyFooter extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <span className={styles.footerText}>Sticky Footer</span>
            </footer>
        );
    }
}

export default StickyFooter;