import express from "express";
import cors from "cors";
//import OpenAI from "openai";

const app = express();
app.use(express.json());

app.use(cors());

const exampleResponse = {
    "id": "chatcmpl-xyz123",
    "object": "chat.completion",
    "created": 1677649420,
    "model": "gpt-3.5-turbo",
    "usage": { "prompt_tokens": 30, "completion_tokens": 31, "total_tokens": 61 },
    "choices": [
      {
        "message": {
          "role": "assistant",
          "content": "Possible sickness 1: Muscle Strain:\nSymptoms: Leg pain, Muscle Aches, Limited range of motion\nTreatment: Rest, Ice, Compression, Elevation (RICE), Over-the-counter pain relievers\nSpeciality: Orthopedist\nPossible sickness 2: Peripheral Arterial Disease (PAD):\nSymptoms: Leg pain, Muscle Aches, Weak or absent pulses\nTreatment: Lifestyle changes, Medications, Exercise\nSpeciality: Vascular specialist"
        },
        "finish_reason": "stop",
        "index": 0
      }
    ]
  };
  
  

//const openai = new OpenAI({
//    apiKey: "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"
//})

app.post('/chat', async (req, res) => {
    const userPrompt = req.body.userPrompt;
    console.log(userPrompt);
  
    //const response = await openai.chat.completions.create({
    //  model: 'gpt-3.5-turbo',
    //  messages: [{ "role": "user", "content": userPrompt }],
    //  max_tokens: 120,
    //});
    console.log(exampleResponse.choices[0].message.content);
    res.json({ doctorResponse: exampleResponse.choices[0].message.content.replace(/\n/g, "\\n") });
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