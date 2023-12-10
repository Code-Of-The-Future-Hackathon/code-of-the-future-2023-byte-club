import express from "express";
import cors from "cors";
import OpenAI from "openai";



const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;


/* Example response so we don't make unnecessary API calls
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
*/
  

const openai = new OpenAI({
    apiKey: "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"
})

app.post('/chat', async (req, res) => {
  const userPrompt = req.body.userPrompt;
  console.log(userPrompt);
  
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ "role": "user", "content": userPrompt }],
    max_tokens: 150,
  });
  res.json({ doctorResponse: response.choices[0].message.content.replace(/\n/g, "\\n") });
});

const timestamp = new Date().getTime();  // Get current timestamp

app.get('/mood', async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    "role": 'user',
                    "content": `Tell me a random act of kindness and a positive quote. 
                    Generate it randomly from the date and time - ${timestamp} . Keep it short 
                    and simple. In format ({Random act of kindness}\n{Positive Quote}).
                     Don't use quotation marks!`
                }
            ],
            max_tokens: 100,
        });
        
        res.json({ response: response });
    } catch (error) {
        console.error('Error generating random act of kindness:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
// Define home route
app.get("/", (req, res) => {
    res.json({
        author: "Byte Club :)",
        message: "Hey!",
    });
});

try
{
    app.listen(PORT, () =>
    {
        console.log(`Server is running on port: ${PORT}`);
    })
} catch(error) {
    console.error(error.message)
}