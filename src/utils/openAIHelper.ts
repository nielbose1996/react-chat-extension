import axios from 'axios';

const API_KEY = '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'; // Replace with your OpenAI API Key

export const getGitCommands = async (query: string): Promise<string[]> => {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: `Convert this query to git commands: "${query}"`,
            max_tokens: 50,
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            }
        });

        return response.data.choices[0].text.trim().split('\n');
    } catch (error) {
        console.error('Error fetching data from OpenAI:', error);
        return [];
    }
};
