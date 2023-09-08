import "./ReactFacts.css";
import Main from "./Main";
import Navbar from "./Navbar";

export default function ReactFacts() {
    const someMap = new Map<string, string>();
    const someArray = new Array<string>();
    console.log(typeof someMap);
    console.log(typeof someArray);
    return (
        <section className="react-facts">
            <Navbar />
            <Main />
        </section>
    );
}
