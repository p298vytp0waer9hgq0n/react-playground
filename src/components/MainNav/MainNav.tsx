import { NavLink } from 'react-router-dom';

import styles from './MainNav.module.css';

export function MainNav() {
    return (
        <nav className={styles.mainnav}>
            <NavLink to="/" className={styles.mainnav__button}>
                Main
            </NavLink>
            <NavLink to="journal" className={styles.mainnav__button}>
                Travel Journal
            </NavLink>
            <NavLink to="meme" className={styles.mainnav__button}>
                Meme Generator
            </NavLink>
            <NavLink to="transition" className={styles.mainnav__button}>
                Transition
            </NavLink>
        </nav>
    );
}
