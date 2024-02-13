import { ChangeEvent, useState, useTransition } from 'react';

export function Transition() {
    const [isPending, startTransition] = useTransition();
    const [word, setWord] = useState('');
    const [list, setList] = useState<string[]>([]);

    function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
        setWord(evt.target.value);
        startTransition(() => {
            const l = [];
            for (let i = 0; i < 15000; i++) {
                l.push(evt.target.value.split('').reverse().join(''));
            }
            setList(l);
        });
        /* const l = [];
        for (let i = 0; i < 15000; i++) {
            l.push(evt.target.value.split('').reverse().join(''));
        }
        setList(l); */
    }

    return (
        <>
            <h2>Transition</h2>
            <input type="text" value={word} onChange={handleChange} />
            <ul>{isPending ? 'Loading...' : list.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </>
    );
}
