import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.css';
import SearchProvider from '../src/context/searchProvider';
import {BrowserRouter} from "react-router-dom"
import { ContextProvider } from './context/counterContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <SearchProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
    </SearchProvider>
</BrowserRouter>

);
