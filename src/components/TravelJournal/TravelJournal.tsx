import globe from '../../images/globe.svg';
import Count from './Count';
import Place from './Place';

import styles from './TravelJournal.module.css';

type Place = {
    id: number;
    imageUrl: string;
    location: string;
    locationUrl: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
};

export function TravelJournal(props: { data: Place[] }) {
    const journalElements = props.data.map((place, index) => <Place place={place} key={index} />);

    return (
        <main className={styles.travel}>
            <Count />
            <header className={styles.travel__header}>
                <img src={globe} alt="Globe logo" />
                <h1 className={styles.travel__title}>my travel journal.</h1>
            </header>
            <ul className={styles.travel__places}>{journalElements}</ul>
        </main>
    );
}
