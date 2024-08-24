import * as vscode from 'vscode';
import { getWebviewContent } from './webview/getWebviewContent';
import { getGitCommands } from './utils/openAIHelper';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('gitNLP.openChat', () => {
        const panel = vscode.window.createWebviewPanel(
            'gitNLP',
            'Git NLP Chat',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
            }
        );

        // Get the webview content with the correct context and webview object
        panel.webview.html = getWebviewContent(context, panel.webview);

        panel.webview.onDidReceiveMessage(
            async (message) => {
                if (message.text) {
                    const gitCommands = await getGitCommands(message.text);
                    panel.webview.postMessage({ text: gitCommands });
                }

                if (message.command) {
                    const terminal = vscode.window.createTerminal('Git Commands');
                    terminal.show();
                    terminal.sendText(message.command);
                }
            },
            undefined,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
