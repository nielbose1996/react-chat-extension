declare function acquireVsCodeApi(): {
    postMessage: (message: any) => void;
    getState: <T>() => T | undefined;
    setState: <T>(newState: T) => void;
};

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Initialize the VSCode API
const vscodeApi = acquireVsCodeApi();

// Render the React application
ReactDOM.render(
  <React.StrictMode>
    <App webview={vscodeApi} />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the ID in your index.html
);
