import Contact from "./Contact";
import ContactClass from "./ContactClass";
import withTitle from "./hocs/withTitle";

import './Contacts.css'

import beard from '../../images/portrait.png';
import genasi from '../../images/portrait01.png';
import code from '../../images/portrait02.png';
import goblin from '../../images/portrait03.png';

type ContactProps = {
  img: string;
  name: string;
  phone: string;
  email: string;
}

export default function Contacts () {
    function ContactWithTitle (props: ContactProps) { 
      return withTitle(ContactClass)(props);
    }
    return (
      <section className="contacts">
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
        <ContactClass
          img={goblin}
          name="Archiepiscopus Bonk"
          phone="68736861"
          email="aebonk@witnesses.mil"
        />
        <ContactWithTitle
          img={goblin}
          name="Archiepiscopus Bonk"
          phone="68736861"
          email="aebonk@witnesses.mil"
        />
      </section>
    )
}