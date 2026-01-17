import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { SimplePrompt } from "./SystemPrompt";

const token = import.meta.env.VITE_DAYVEN_AI_API_KEY2;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-5";

export async function main(Prompt,conversation,events) {

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const messages = [
    { role: 'system', content: SimplePrompt },
    ...conversation.map(msg => ({
      role: msg.type === 'USER' ? 'user' : 'assistant',
      content: typeof msg.message === 'string'
        ? msg.message
        : JSON.stringify(msg.message)
    })),
    { role: 'system', content: `Current Time: ${new Date().toLocaleString()}` },
    { role: 'system', content: `User Upcoming events: ${JSON.stringify(events)}` },
    { role: 'user', content: Prompt },
  ];

  const response = await client.path("/chat/completions").post({
    body: {
      messages,
      temperature: 1,
      top_p: 1,
      model: model
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  const data = response.body.choices[0].message.content;
  return data;
}



