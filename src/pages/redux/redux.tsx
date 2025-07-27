import { useAppDispatch, useAppSelector } from '../../providers/hooks/hooks';

export function ReduxPage() {
    const value = useAppSelector((store) => store.value);
    const dispatch = useAppDispatch();
    return (
        <>
            <h1>Redux page</h1>
            <p>{value}</p>
            <button type="button" onClick={() => dispatch({ type: 'test/increment' })}>
                increment
            </button>
        </>
    );
}
