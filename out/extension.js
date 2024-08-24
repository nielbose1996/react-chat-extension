"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const getWebviewContent_1 = require("./webview/getWebviewContent");
const openAIHelper_1 = require("./utils/openAIHelper");
function activate(context) {
    let disposable = vscode.commands.registerCommand('gitNLP.openChat', () => {
        const panel = vscode.window.createWebviewPanel('gitNLP', 'Git NLP Chat', vscode.ViewColumn.One, {
            enableScripts: true,
            retainContextWhenHidden: true,
        });
        // Get the webview content with the correct context and webview object
        panel.webview.html = (0, getWebviewContent_1.getWebviewContent)(context, panel.webview);
        panel.webview.onDidReceiveMessage((message) => __awaiter(this, void 0, void 0, function* () {
            if (message.text) {
                const gitCommands = yield (0, openAIHelper_1.getGitCommands)(message.text);
                panel.webview.postMessage({ text: gitCommands });
            }
            if (message.command) {
                const terminal = vscode.window.createTerminal('Git Commands');
                terminal.show();
                terminal.sendText(message.command);
            }
        }), undefined, context.subscriptions);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map