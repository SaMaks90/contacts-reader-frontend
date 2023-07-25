import { StrictMode } from 'react';
import { ThemeProvider } from "@emotion/react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { theme } from "./constants";
import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);