const { loadEnvConfig } = require('@next/env')
loadEnvConfig(process.cwd())

async function check() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.log("No API key");
    return;
  }
  const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20240620",
          max_tokens: 10,
          messages: [{role: "user", content: "Hi"}]
        }),
      });
  const data = await response.json();
  console.log("Status:", response.status);
  console.log("Response:", JSON.stringify(data));
}
check()
