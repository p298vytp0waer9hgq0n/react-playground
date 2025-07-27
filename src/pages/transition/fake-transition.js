import { useState, useTransition } from 'react';

export function Transition() {
    const [isTransitioning, startTransition] = useTransition();
    const [word, setWord] = useState('');
    const [list, setList] = useState([]);

    function handleChange(evt) {
        setWord(evt.target.value);
        startTransition(() => {
            const l = [];
            for (let i = 0; i < 2000; i++) {
                // наполнение списка элементов
            }
            setList(l);
        });
    }

    return (
        <>
            <input value={word} onChange={handleChange} />
            <ul>{isTransitioning ? 'Loading...' : list}</ul>
        </>
    );
}
