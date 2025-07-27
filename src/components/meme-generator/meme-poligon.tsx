import { useState } from 'react';

import store from '../../providers/store/store';
import { decrement, increment } from '../../providers/store/testing-slice';

export function MemePolygon() {
    function handleIncrement() {
        store.dispatch(increment());
    }
    function handleDecrement() {
        store.dispatch(decrement());
    }

    // let value;
    const [value, setValue] = useState(0);
    store.subscribe(() => setValue(store.getState().value));
    return (
        <>
            <p>{value}</p>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </>
    );
}
