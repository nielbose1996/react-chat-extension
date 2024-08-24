"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitCommands = void 0;
const axios_1 = __importDefault(require("axios"));
const API_KEY = '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'; // Replace with your OpenAI API Key
const getGitCommands = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: `Convert this query to git commands: "${query}"`,
            max_tokens: 50,
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data.choices[0].text.trim().split('\n');
    }
    catch (error) {
        console.error('Error fetching data from OpenAI:', error);
        return [];
    }
});
exports.getGitCommands = getGitCommands;
//# sourceMappingURL=openAIHelper.js.map