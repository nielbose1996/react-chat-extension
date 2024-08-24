import React from 'react';
import ChatInterface from '../components/ChatInterface';

interface AppProps {
    webview: {
        postMessage: (message: any) => void;
        getState: <T>() => T | undefined;
        setState: <T>(newState: T) => void;
    };
}

const App: React.FC<AppProps> = ({ webview }) => {
    return (
        <div>
            <h1>Git Command Generator</h1>
            <ChatInterface webview={webview} />
        </div>
    );
};

export default App;
