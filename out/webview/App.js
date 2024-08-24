"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ChatInterface_1 = __importDefault(require("../components/ChatInterface"));
const App = ({ webview }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Git Command Generator"),
        react_1.default.createElement(ChatInterface_1.default, { webview: webview })));
};
exports.default = App;
//# sourceMappingURL=App.js.map