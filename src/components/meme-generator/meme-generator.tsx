import { MemeForm } from './meme-form';
import { MemeHeader } from './meme-header';
import { MemePolygon } from './meme-poligon';

import styles from './meme-generator.module.css';

export function MemeGenerator() {
    console.log(MemeForm.displayName);
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
            <MemePolygon />
        </div>
    );
}
