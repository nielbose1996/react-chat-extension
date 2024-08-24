"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CommandButton = ({ command, webview }) => {
    const runCommand = () => {
        webview.postMessage({ command });
    };
    return (react_1.default.createElement("button", { onClick: runCommand }, "Run Command"));
};
exports.default = CommandButton;
//# sourceMappingURL=CommandButton.js.map