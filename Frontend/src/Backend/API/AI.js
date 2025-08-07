import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { SimplePrompt } from "./SystemPrompt";

const token = import.meta.env.VITE_DAYVEN_AI_API_KEY2;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";
const model2 = "openai/gpt-4.1-mini";

export async function main(Prompt,memory) {

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role:"system", content: `This is you: ${SimplePrompt}, our conversation: ${memory} `  },
        { role:"user", content: Prompt }
      ],
      temperature: 1,
      top_p: 1,
      model: model2
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  const data = response.body.choices[0].message.content;
  return data;
}



