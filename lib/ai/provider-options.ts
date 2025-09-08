// Provider options for configured models
// These can be used when calling generateText, streamText, etc.

export const geminiFlashOptions = {
  experimental_providerMetadata: {
    google: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking/reasoning for faster responses
      },
    },
  },
};

export const gptMiniReasoningOptions = {
  providerOptions: {
    openai: {
      reasoningEffort: 'minimal', // Minimal reasoning for faster responses
      reasoningSummary: 'detailed', // Still get detailed reasoning summaries
    },
  },
};

// Usage example:
// import { generateText } from 'ai';
// import { myProvider } from './providers';
// import { geminiFlashOptions } from './provider-options';
// 
// const result = await generateText({
//   model: myProvider.languageModel('chat-model'),
//   prompt: 'Your prompt here',
//   ...geminiFlashOptions
// });