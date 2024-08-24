import * as vscode from 'vscode';
import * as path from 'path';

export function getWebviewContent(context: vscode.ExtensionContext, webview: vscode.Webview): string {
    const scriptPathOnDisk = vscode.Uri.file(
        path.join(context.extensionPath, 'out', 'bundle.js')
    );

    const scriptUri = webview.asWebviewUri(scriptPathOnDisk);

    // Use webview.cspSource to allow only your extension's resources to be loaded
    const nonce = getNonce();

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Git NLP Chat</title>
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';">
    </head>
    <body>
        <div id="root"></div>
        <script nonce="${nonce}">
            // Initialize the VSCode API object
            const vscodeApi = acquireVsCodeApi();
        </script>
        <script nonce="${nonce}" src="${scriptUri}"></script>
    </body>
    </html>`;
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
