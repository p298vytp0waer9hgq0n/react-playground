import styles from './TravelJournal.module.css';

export default function Indicator (props) {
    console.log('Indicator rendered');
    return (
        <span className={styles.state__number}>{props.number}</span>
    )
}