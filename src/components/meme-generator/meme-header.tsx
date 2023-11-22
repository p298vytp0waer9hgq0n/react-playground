import styles from "./meme-generator.module.css";

import trollIcon from "../../images/troll.svg";

export default function MemeHeader() {
    return (
        <header className={styles.meme__header}>
            <img src={trollIcon} alt="Trollface logo" />
            <h1 className={`${styles.meme__title} underline`}>
                Meme Generator
            </h1>
            <div className="underline shadow-2xl">something</div>
            <span className={styles.meme__subtitle}>
                React Course - Project 3
            </span>
        </header>
    );
}
