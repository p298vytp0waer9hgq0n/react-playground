import styles from './TravelJournal.module.css';

export default function Place (props) {
    return (
        <li className={styles.travel__place}>
            <img className={styles.travel__img} src={props.place.imageUrl} alt={props.place.title} />
            <div className={styles.travel__details}>
                <div className={styles.travel__location}>
                    <svg className={styles.travel__icon} width="7" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.579 5.25a1.67 1.67 0 1 1-.001-3.34 1.67 1.67 0 0 1 0 3.34ZM3.484 0C1.542 0 0 1.637 0 3.656c0 2.752 2.95 5.596 2.95 5.596.398.376.644.406 1.066 0 0 0 2.984-2.844 2.984-5.596C7 1.636 5.425 0 3.484 0Z" fill="#F55A5A"/></svg>
                    <p className={styles.travel__locationName}>{props.place.location}</p>
                    <a className={styles.travel__link} href={props.place.locationUrl} rel="noreferrer" target="_blank">More about it</a>
                </div>
                <h2 className={styles.travel__name}>{props.place.title}</h2>
                <p className={styles.travel__time}>{`${props.place.startDate} - ${props.place.endDate}`}</p>
                <p className={styles.travel__description}>{props.place.description}</p>
            </div>
        </li>
    )
}