import Place from "./Place";

import styles from "./TravelJournal.module.css"

import globe from "../../images/globe.svg"
import Count from "./Count";

export default function TravelJournal (props) {
    
    const counter = 7;
    const journalElements = props.data.map((place, index) => <Place place={place} key={index} />);

    return (
        <main className={styles.travel}>
            <Count number={counter}/>
            <header className={styles.travel__header}>
                <img src={globe} alt="Globe logo" />
                <h1 className={styles.travel__title}>my travel journal.</h1>
            </header>
            <ul className={styles.travel__places}>
                {journalElements}
            </ul>
        </main>
    )
}