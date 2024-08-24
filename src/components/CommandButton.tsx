import React from 'react';
import * as vscode from 'vscode';
interface CommandButtonProps {
    command: string;
    webview: {
        postMessage: (message: any) => void;
        getState: <T>() => T | undefined;
        setState: <T>(newState: T) => void;
    };
}

const CommandButton: React.FC<CommandButtonProps> = ({ command, webview }) => {
    const runCommand = () => {
        webview.postMessage({ command });
    };

    return (
        <button onClick={runCommand}>Run Command</button>
    );
};

export default CommandButton;
