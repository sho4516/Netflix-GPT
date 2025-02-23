export const fetchApiKey = async () => {
  try {
    const response = await fetch(
      "https://us-central1-netflix-gpt-77c9c.cloudfunctions.net/getOpenApiKey"
    );
    const data = await response.json();
    return data.apiKey;
  } catch (error) {
    console.error("Error fetching API Key:", error);
    return null;
  }
};
