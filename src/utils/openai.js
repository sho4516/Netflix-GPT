import OpenAI from "openai";
import { fetchApiKey } from "./config";

let openaiInstance = null;

export const getOpenAI = async () => {
  if (!openaiInstance) {
    const apiKey = await fetchApiKey();
    if (!apiKey) throw new Error("Failed to fetch OpenAI API key.");

    openaiInstance = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });
  }
  return openaiInstance;
};
