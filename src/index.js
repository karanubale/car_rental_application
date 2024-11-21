import React from 'react';
import ReactDOM from 'react-dom/client';  // Use `react-dom/client` for createRoot
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Create the root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using createRoot
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
