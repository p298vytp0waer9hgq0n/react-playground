import Card from './Card';
import Contact from './Contact';

import beard from '../../images/portrait.png';
import genasi from '../../images/portrait01.png';
import code from '../../images/portrait02.png';
import goblin from '../../images/portrait03.png';

export default function Cards () {
    return (
        <section className="air-cards">
            <Card />
            <Contact 
                img={beard}
                name="Mr. Beard"
                phone="01498575789"
                email="beard@norse.com"
            />
            <Contact 
                img={genasi}
                name="R.A. Cousteau"
                phone="(777) 67598-2327"
                email="prometheus@shanshiracademy.edu"
            />
            <Contact 
                img={code}
                name="Sam Dreihänder"
                phone="(273) 8008569"
                email="bloodlust@code.org"
            />
            <Contact 
                img={goblin}
                name="Archiepiscopus Bonk"
                phone="68736861"
                email="aebonk@witnesses.mil"
            />
        </section>
    )
}