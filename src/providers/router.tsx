import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from '../App';
import { TravelJournal } from '../components/TravelJournal/TravelJournal';
import { MemeGenerator } from '../components/meme-generator/meme-generator';
import { Landing } from '../pages/landing/landing';
import { travelData } from '../utils/travel-data';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="meme" element={<MemeGenerator />} />
            <Route path="journal" element={<TravelJournal data={travelData} />} />
        </Route>,
    ),
    { basename: '/react-playground' },
);
