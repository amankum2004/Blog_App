
async function generateSummary(data) {
    const fetch = (await import("node-fetch")).default;
  
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
      console.error(`Hugging Face API Error: ${response.status} - ${response.statusText}`);
      const errorDetails = await response.text();
      console.error("Error Details:", errorDetails);
      throw new Error(`Hugging Face API Error: ${response.statusText}`);
    }
  
    const result = await response.json();
    if (result.error) {
      console.error("Hugging Face Response Error:", result.error);
      throw new Error(`API Error: ${result.error}`);
    }
  
    return result[0]?.summary_text || "No summary available.";
  }
  
  module.exports = { generateSummary };
  