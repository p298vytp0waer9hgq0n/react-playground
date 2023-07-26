import MemeHeader from './MemeHeader';
import MemeForm from './MemeForm';

import styles from './MemeGenerator.module.css';

export default function MemeGenerator () {
    return (
        <div className={styles.meme}>
            <MemeHeader />
            <MemeForm />
        </div>
    );
}
