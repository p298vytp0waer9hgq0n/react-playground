import Airbnb from "../../components/Airbnb/Airbnb";
import Contacts from "../../components/Contacts/Contacts";
import ReactFacts from "../../components/ReactFacts/ReactFacts";
import VisitCard from "../../components/VisitCard/VisitCard";

export default function Landing() {
    return (
        <>
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
