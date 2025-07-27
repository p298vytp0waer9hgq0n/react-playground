import './VisitCard.css';
import Info from './Info';
import About from './About';
import Footer from './Footer';

export default function VisitCard () {
    return (
        <section className="visit-card-container">
            <div className="visit-card">
                <Info />
                <About />
                <Footer />
            </div>
        </section>
    )
}