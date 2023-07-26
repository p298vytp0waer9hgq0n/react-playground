import { useState } from "react";
import Indicator from "./Indicator";

import styles from './TravelJournal.module.css';

export default function Count() {
    const [answer, setAnswer] = useState(true);
    const [counter, setCount] = useState(0);

    function greeting (name: string) {
        const hours = new Date().getHours();
        let tod;

        if (hours >= 20 || hours < 4) {
            tod = 'night';    
        } else if (hours < 12) {
            tod = 'morning';
        } else if (hours < 17) {
            tod = 'afternoon';
        } else {
            tod = 'evening';
        }
        
        return `Good ${tod}, ${name}!`;
    }

    function toggleAnswer () {
        setAnswer((prevAnswer) => !prevAnswer);
    }
    
    function count (num: number) {
        return function () {
             setCount((oldCount) => oldCount + num);
        }
    }
    
    console.log('Counter rendered');

    return (
        <section className={styles.state}>
            {greeting('asdf')}
            <span>Is state important to know?</span>
            <div onClick={toggleAnswer} className={styles.state__yes}>
                <span>{answer ? 'Yes' : 'No'}</span>
            </div>
            <div className={styles.state__counter}>
                <button className={styles.state__button} onClick={count(-1)}>-</button>
                <button className={`${styles.state__button} ${styles.state__button_plus}`} onClick={count(1)}>+</button>
                <Indicator number={counter} />
            </div>
        </section>
    );
}