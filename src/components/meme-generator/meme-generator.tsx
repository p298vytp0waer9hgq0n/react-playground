import MemeHeader from "./meme-header";
import MemeForm from "./meme-form";

import styles from "./meme-generator.module.css";

export default function MemeGenerator() {
    function tmpFunction() {
        setTimeout(function timeout() {
            console.log("Timeout");
        }, 0);

        const p = new Promise<void>(function (resolve, _reject) {
            console.log("Promise creation");
            resolve();
        });

        p.then(function () {
            // setTimeout(() => console.log("Promise resolution"), 0);
            console.log("Promise resolution");
        });

        console.log("End of script");
    }

    /* function tmpScope() {
        var color = "white";
        function thing() {
            console.log(color);
            var color = "black";
        }
        thing();
    }

    tmpScope(); */

    tmpFunction();

    return (
        <div className={styles.meme}>
            <MemeHeader />
            <img src="/react-playground/favicon.svg" />
            <MemeForm />
        </div>
    );
}
