import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router';

import { router } from './providers/router';

import './index.css';
import { Provider } from 'react-redux';
import store from './providers/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
    // document.getElementById('root'),
);
