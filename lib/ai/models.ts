export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Gemini 2.5 Flash',
    description: 'Fast and efficient multimodal model with vision and text capabilities',
  },
  {
    id: 'chat-model-reasoning',
    name: 'GPT-5 Mini',
    description: 'Uses minimal reasoning approach for efficient problem solving',
  },
];
