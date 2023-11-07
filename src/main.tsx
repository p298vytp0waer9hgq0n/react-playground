import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MemeGenerator from "./components/meme-generator/meme-generator";
import TravelJournal from "./components/TravelJournal/TravelJournal";
import { travelData } from "./utils/travel-data";
import Landing from "./pages/landing/landing";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="meme" element={<MemeGenerator />} />
            <Route
                path="journal"
                element={<TravelJournal data={travelData} />}
            />
        </Route>
    ),
    { basename: "/react-playground" }
);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
