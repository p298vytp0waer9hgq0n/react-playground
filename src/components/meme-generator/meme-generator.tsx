import MemeHeader from './meme-header';
import MemeForm from './meme-form';

import styles from './meme-generator.module.css';

export default function MemeGenerator() {
    /* function tmpScope() {
        var color = "white";
        function thing() {
            console.log(color);
            var color = "black";
        }
        thing();
    }

    tmpScope(); */

    return (
        <div className={styles.meme}>
            <MemeHeader />
            <img src="/react-playground/favicon.svg" />
            <MemeForm />
        </div>
    );
}
