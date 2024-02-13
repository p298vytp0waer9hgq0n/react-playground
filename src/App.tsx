import { Outlet } from 'react-router-dom';

import { MainNav } from './components/MainNav/MainNav';

import './App.css';
import './fonts/fonts.css';

export function App() {
    return (
        <>
            <MainNav />
            <Outlet />
        </>
    );
}
