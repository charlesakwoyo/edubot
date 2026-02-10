import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;


const HF_API_KEY = "";

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("puplic"));

app.post("/ask", async (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "No question provided" });

    try {

        const model = "bigscience/bloom";
        const url = `https://api-inference.huggingface.co/models/${model}`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${HF_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inputs: question,
                parameters: { max_new_tokens: 150 }
            })
        });

        const data = await response.json();

        if (!data || data.error) {
            return res.json({ answer: "EduBot couldn't generate an answer. Please try again." });
        }


        const answer = Array.isArray(data) ? data[0].generated_text : data.generated_text;
        res.json({ answer: answer || "EduBot couldn't generate an answer. Please try again." });

    } catch (err) {
        console.error(err);
        res.json({ answer: "Unable to connect to AI service." });
    }
});

app.listen(PORT, () => {
    console.log(`EduBot server running at http://localhost:${PORT}`);
});
