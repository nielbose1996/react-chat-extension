"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./App"));
// Initialize the VSCode API
const vscodeApi = acquireVsCodeApi();
// Render the React application
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(App_1.default, { webview: vscodeApi })), document.getElementById('root') // Ensure this matches the ID in your index.html
);
//# sourceMappingURL=main.js.map