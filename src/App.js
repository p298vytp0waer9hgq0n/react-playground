import './fonts/fonts.css';
import './App.css';
import ReactFacts from './components/ReactFacts/ReactFacts';
import VisitCard from './components/VisitCard/VisitCard';
import Airbnb from './components/Airbnb/Airbnb';

export default function App() {
  return (
    <>
      <section className="main">
        <ReactFacts />
        <VisitCard />
      </section>
      <section className="airbnb">
        <Airbnb />
      </section>
    </>
  );
}