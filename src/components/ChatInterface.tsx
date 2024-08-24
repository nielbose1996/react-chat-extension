import React, { useState } from 'react';
import CommandButton from './CommandButton';
import * as vscode from 'vscode';
interface ChatInterfaceProps {
    webview: {
        postMessage: (message: any) => void;
        getState: <T>() => T | undefined;
        setState: <T>(newState: T) => void;
    };
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ webview }) => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        webview.postMessage({ text: input });
        setMessages([...messages, input]);
        setInput('');
    };

    return (
        <div>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p>{msg}</p>
                        <CommandButton command={msg} webview={webview} />
                    </div>
                ))}
            </div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Ask a question..." 
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatInterface;
