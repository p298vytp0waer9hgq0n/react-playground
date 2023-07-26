import { useState } from 'react';

import './fonts/fonts.css';
import './App.css';
import ReactFacts from './components/ReactFacts/ReactFacts';
import VisitCard from './components/VisitCard/VisitCard';
import Airbnb from './components/Airbnb/Airbnb';
import Contacts from './components/Contacts/Contacts';
import TravelJournal from './components/TravelJournal/TravelJournal';
import MainNav from './components/MainNav/MainNav';
import MemeGenerator from './components/MemeGenerator/MemeGenerator';
import { travelData } from './utils/travel-data';

export default function App() {
  const [page, setPage] = useState('main');
  
  if (page === 'journal') {
    return (
      <>
        <MainNav navigate={setPage} />
        <TravelJournal data={travelData} />
      </>
    )
  }
  
  if (page === 'meme') {
    return (
      <>
        <MainNav navigate={setPage} />
        <MemeGenerator />
      </>
    )
  }

  return (
    <>
      <MainNav navigate={setPage} />
      <section className="main">
        <ReactFacts />
        <VisitCard />
      </section>
      <section className="airbnb">
        <Airbnb />
      </section>
      <Contacts />
    </>
  );
}