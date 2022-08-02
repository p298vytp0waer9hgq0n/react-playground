import Card from './Card';
import wedding from '../../images/wedding.png';

export default function Cards () {
    return (
        <section className="air-cards">
            <Card 
                img={wedding}
                rating="5.0"
                reviewCount={6}
                country="Norway"
                title="Learn wedding photography"
                price={134}
            />
        </section>
    )
}