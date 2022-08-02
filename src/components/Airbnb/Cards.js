import Card from './Card';
import { data } from './data';

export default function Cards () {
    const cardElements = data.map((item) => {
        return <Card
            key={item.id}
            img={item.coverImg}
            title={item.title}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            price={item.price}
            openSpots={item.openSpots}
        />;
    });
    return (
        <section className="air-cards">
            {cardElements}
        </section>
    )
}