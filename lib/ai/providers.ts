import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { gateway } from '@ai-sdk/gateway';
import { isTestEnvironment } from '../constants';

/*
 * Provider Configuration Notes:
 * 
 * chat-model (Gemini 2.5 Flash):
 *   To disable thinking/reasoning, use this in your AI calls:
 *   experimental_providerMetadata: {
 *     google: {
 *       thinkingConfig: {
 *         thinkingBudget: 0
 *       }
 *     }
 *   }
 * 
 * chat-model-reasoning (GPT-5 Mini):
 *   To minimize reasoning, use this in your AI calls:
 *   providerOptions: {
 *     openai: {
 *       reasoningEffort: 'minimal',
 *       reasoningSummary: 'detailed'
 *     }
 *   }
 */

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require('./models.mock');
      return customProvider({
        languageModels: {
          'chat-model': chatModel,
          'chat-model-reasoning': reasoningModel,
          'title-model': titleModel,
          'artifact-model': artifactModel,
        },
      });
    })()
  : customProvider({
      languageModels: {
        'chat-model': gateway.languageModel('google/gemini-2.5-flash'),
        'chat-model-reasoning': gateway.languageModel('openai/gpt-5-mini'),
        'title-model': gateway.languageModel('xai/grok-2-1212'),
        'artifact-model': gateway.languageModel('xai/grok-2-1212'),
      },
    });
