import styles from './TravelJournal.module.css';

type IndProps = {
    number: number;
}

export default function Indicator (props: IndProps) {
    console.log('Indicator rendered');
    return (
        <span className={styles.state__number}>{props.number}</span>
    )
}