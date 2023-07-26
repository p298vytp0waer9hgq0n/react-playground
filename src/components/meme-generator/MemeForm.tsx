import { useState } from 'react';
import { picData } from '../../utils/pictures';

import styles from './meme-generator.module.css';

export default function MemeForm () {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    });
    const [allMemeImages] = useState(picData);
    const [thingsArray, setThings] = useState<Array<string>>([]);

    function handleClick (evt: React.MouseEvent) {
        evt.preventDefault();
        const i = Math.floor(Math.random() * allMemeImages.data.pics.length);
        setMeme((prev) => ({...prev, randomImage: allMemeImages.data.pics[i].url}));
    }
    
    function handleCursor () {
        let scream = 'A';
        while (true) {
            scream += 'a';
            if (0.5 < Math.random()) break;
        }
        scream += 'h!!!';
        console.log(scream);
    }
    
    function addThing () {
        setThings((oldThings) => [...oldThings, `Thing ${oldThings.length + 1}`]);
    }
    
    const compArray = thingsArray.map((item, index) => <p key={index}>{item}</p>);
    
    return (
        <main>
            <form className={styles.meme__form}>
                <div className={styles.meme__inputs}>
                    <input onMouseOver={handleCursor} className={styles.meme__input} type="text" />
                    <input className={styles.meme__input} type="text" />
                </div>
                <button type="button" onClick={handleClick} className={styles.meme__button}>Get a new meme image</button>
            {meme.randomImage && <img className={styles.meme__image} alt="" src={meme.randomImage} /> }
            </form>
            <button type="button" className={styles.meme__addThing} onClick={addThing}>Add thing</button>
            {compArray}
        </main>
    );
}