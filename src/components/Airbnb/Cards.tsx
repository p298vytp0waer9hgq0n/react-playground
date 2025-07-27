import Card from './Card';
import { data } from '../../utils/data';

export default function Cards () {
    const cardElements = data.map((item) => {
        return <Card
            key={item.id}
            {...item}
        />;
    });
    return (
        <section className="air-cards">
            {cardElements}
        </section>
    )
}