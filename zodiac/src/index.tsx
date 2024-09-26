//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { StrictMode } from 'react'
import React from 'react';

const root = document.getElementById('root');

if(root){
    const rootElement = createRoot(root);
    rootElement.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
