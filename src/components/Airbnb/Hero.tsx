import hero from '../../images/hero01.png';

export default function Hero () {
    return (
        <section className="hero">
            <img className="hero__image" src={hero} alt="bunch of people" />
            <h1 className="hero__title">Online Experiences</h1>
            <p className="hero__subtitle">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}