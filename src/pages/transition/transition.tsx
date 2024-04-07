import { ChangeEvent, ReactElement, useEffect, useState, useTransition } from 'react';

import { Input } from '../../components/Input/Input';
import { Something } from '../../components/class-something/class-something';
import { TmpInput } from '../../components/tmp-input/tmp-input';

// import { TransList } from './trans-list';
import styles from './transition.module.css';

export function Transition() {
    const [isPending, startTransition] = useTransition();
    // const [num, setNum] = useState(1);
    const [word, setWord] = useState('');
    const [list, setList] = useState<ReactElement[]>([]);

    useEffect(() => {
        const storedWord = window.localStorage.getItem('word');
        console.log('stored', storedWord);
        if (storedWord) {
            setWord(() => storedWord);
        }
    }, []);

    // setNum((num) => num);

    function downloadFile() {
        fetch('https://loremflickr.com/320/240')
            .then((res) => res.blob())
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                // window.location.assign(url);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'somefile';
                // document.body.appendChild(a);
                a.click();
                a.remove();
            });
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
        setWord(evt.target.value);
        const l: ReactElement[] = [];
        for (let i = 0; i < 2000; i++) {
            l.push(
                <div className={styles.row}>
                    {evt.target.value.split('').map((e, k) => (
                        <div key={`${i} - ${k}`} className={styles.letter}>
                            {e}
                        </div>
                    ))}
                </div>,
            );
        }
        startTransition(() => {
            setList(l);
        });
    }

    return (
        <section className={styles.section}>
            <button onClick={downloadFile} type="button">
                Download
            </button>
            <Something skill="archery" />
            <h2>Transition</h2>
            {/* <TmpInput /> */}
            <Input type="text" value={word} onChange={handleChange} className={styles.input} />
            {/* <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> */}
            <ul>{isPending ? 'Loading...' : list.map((item, index) => <li key={index}>{item}</li>)}</ul>
            {/* {isPending ? 'Loading...' : <TransList list={list} />} */}
        </section>
    );
}
