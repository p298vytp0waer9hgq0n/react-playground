import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router';

import { App } from '../App';
import { TravelJournal } from '../components/TravelJournal/TravelJournal';
import { MemeGenerator } from '../components/meme-generator/meme-generator';
import { Landing } from '../pages/landing/landing';
import { Transition } from '../pages/transition/transition';
import { travelData } from '../utils/travel-data';
import { ReduxPage } from '../pages/redux/redux';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="meme" element={<MemeGenerator />} />
            <Route path="journal" element={<TravelJournal data={travelData} />} />
            <Route path="transition" element={<Transition />} />
            <Route path="redux" element={<ReduxPage />} />
        </Route>,
    ),
);
