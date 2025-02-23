const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

// Define the secret
const openaiApiKey = defineSecret("OPENAI_API_KEY");

exports.getOpenApiKey = onRequest({ secrets: [openaiApiKey] }, (req, res) => {
  try {
    // Access the API key from Firebase Secrets
    const apiKey = openaiApiKey.value();

    if (!apiKey) {
      console.error("API key is missing in Firebase Secrets");
      return res.status(500).json({ error: "API key not found in Firebase" });
    }

    // Return the API key in the response
    res.status(200).json({ apiKey });
  } catch (error) {
    console.error("Error fetching API key:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
