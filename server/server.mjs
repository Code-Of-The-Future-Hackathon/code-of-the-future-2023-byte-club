import express from "express";
import cors from "cors";
import OpenAI from "openai";


const app = express();
app.use(express.json());

app.use(cors());

const openai = new OpenAI({
    apiKey: "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"
})

app.post('/chat', async (req, res) => {
    const userPrompt = req.body.userPrompt;
    console.log(userPrompt);
  
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ "role": "user", "content": userPrompt }],
      max_tokens: 120,
    });
    console.log(response.choices[0].message.content);
    res.json({ doctorResponse: response.choices[0].message.content.replace(/\n/g, "\\n") });
  });
  

// Define a route
app.get("/", (req, res) => {
    res.json({
        author: "Byte Club :)",
        message: "Hey!",
    });
});

const PORT = 8080;

try
{
    app.listen(PORT, () =>
    {
        console.log(`Server is running on port: ${PORT}`);
    })
} catch(error) {
    console.error(error.message)
}