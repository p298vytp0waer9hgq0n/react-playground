import { ReactElement } from 'react';

interface Props {
    list: ReactElement[];
}

export function TransList({ list }: Props) {
    return <ul>{list}</ul>;
}
