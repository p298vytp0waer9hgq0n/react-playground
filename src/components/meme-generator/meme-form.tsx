import { useEffect, useState } from 'react';

import { picData } from '../../utils/pictures';

import styles from './meme-generator.module.css';

type Product = {
    id: string;
    title: string;
    description: string;
    price: string;
    discountPercentage: string;
    rating: string;
    stock: string;
    brand: string;
    category: string;
    thumbnail: string;
    images: string;
};

type Products = {
    products: Product[];
};

export function MemeForm() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: '',
    });
    const [allMemeImages] = useState(picData);
    const [products, setProducts] = useState<Products | null>(null);
    const [thingsArray, setThings] = useState<Array<string>>([]);

    function handleClick(evt: React.MouseEvent) {
        evt.preventDefault();
        const i = Math.floor(Math.random() * allMemeImages.data.pics.length);
        setMeme((prev) => ({
            ...prev,
            randomImage: allMemeImages.data.pics[i].url,
        }));
    }

    function handleCursor() {
        let scream = 'A';
        while (true) {
            scream += 'a';
            if (0.5 < Math.random()) {
                break;
            }
        }
        scream += 'h!!!';
        console.log(scream);
    }

    function addThing() {
        setThings((oldThings) => [...oldThings, `Thing ${oldThings.length + 1}`]);
    }

    const compArray = thingsArray.map((item, index) => <p key={index}>{item}</p>);

    /* useEffect(() => {
        const url = new URL(
            'https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg'
        );
        const url = new URL('https://i.postimg.cc/FzgXJ2wv/portrait.png');
        const controller = new AbortController();
        fetch(url, {
            method: 'HEAD',
            headers: {
                'Access-Control-Expose-Headers': '*',
                'Access-Control-Allow-Origin': '*',
            },
            signal: controller.signal,
            mode: 'no-cors',
        }).then((res) => {
            console.log(res);
            console.log('headers here');
            console.log(...res.headers);
            // res.headers.forEach(console.log);
        });
        // res.headers.forEach((val, key) => console.log(key, val))
        return () => controller.abort();
    }, []); */
    useEffect(() => {
        const url = new URL('https://dummyjson.com/products');
        url.searchParams.set('limit', '5');
        const controller = new AbortController();
        fetch(url, {
            signal: controller.signal,
        })
            .then((res) => {
                // console.log(...res.headers);
                return res.json();
            })
            .then((data) => setProducts(data));
        return () => controller.abort();
    }, []);

    return (
        <main>
            {products && products.products.map((product) => <p key={product.id}>{product.title}</p>)}
            <form className={styles.meme__form}>
                <div className={styles.meme__inputs}>
                    <input onMouseOver={handleCursor} className={styles.meme__input} autoFocus type="text" />
                    <input className={styles.meme__input} type="text" />
                </div>
                <button type="button" onClick={handleClick} className={styles.meme__button}>
                    Get a new meme image
                </button>
                {meme.randomImage && <img className={styles.meme__image} alt="" src={meme.randomImage} />}
            </form>
            <button type="button" className={styles.meme__addThing} onClick={addThing}>
                Add thing
            </button>
            {compArray}
        </main>
    );
}
