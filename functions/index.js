import { functions } from "firebase-functions";
import ModelClient from "@azure-rest/ai-inference";
import { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { DAYVEN_SYSTEM_PROMPT } from "./SystemPrompt";

const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

exports.queryAI = functions.https.onRequest(async (req, res) => {
  const token = functions.config().dayven_ai.api_key;

  try {
    const client = ModelClient(endpoint, new AzureKeyCredential(token));

    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "system", content: DAYVEN_SYSTEM_PROMPT },
          { role: "user", content: req.body.prompt || "Hello!" }
        ],
        temperature: 1,
        top_p: 1,
        model: model
      }
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }

    res.json({ reply: response.body.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch response from model." });
  }
});
