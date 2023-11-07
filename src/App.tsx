import "./fonts/fonts.css";
import "./App.css";
import MainNav from "./components/MainNav/MainNav";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <MainNav navigate={() => {}} />
            <Outlet />
        </>
    );
}
