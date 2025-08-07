// index.js
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { SimplePrompt } from "./SystemPrompt.js";
import cors from "cors";

// Define your secret (ensure it's added via Firebase CLI or Console)
const api_key = defineSecret("DAYVEN_API_KEY");

// Define model + endpoint
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

// CORS config
const corsHandler = cors({ origin: true });

// Cloud Function
export const queryAI = onRequest({ secrets: [api_key] }, (req, res) => {
  corsHandler(req, res, async () => {
    try {
      const token = api_key.value();

      const client = ModelClient(endpoint, new AzureKeyCredential(token));

      const response = await client.path("/chat/completions").post({
        body: {
          messages: [
            { role: "system", content: SimplePrompt },
            { role: "user", content: req.body.prompt },
          ],
          model,
        },
      });

      if (isUnexpected(response)) {
        return res
          .status(500)
          .json({ error: response.body?.error || "Unexpected error from Azure" });
      }

      return res
        .status(200)
        .json({ response: response.body.choices[0].message.content });
    } catch (error) {
      console.error("Azure API error:", error);
      return res.status(500).json({ error: "Azure API error: Unexpected error from Azure" });
    }
  });
});
