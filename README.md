# EduBot

A simple AI question-answering chatbot. A small Express server sends the user's question to an open-source language model on the **Hugging Face Inference API** and returns the answer to a web chat page.

## Features

- Web chat page (in `puplic/`) where users type a question and see the answer.
- `POST /ask` endpoint that forwards the question to the model and returns its reply.
- The API key stays on the server; the browser never sees it.

## Tech stack

Node.js · Express · Hugging Face Inference API (BLOOM model) · HTML/CSS/JavaScript

## Getting started

```bash
git clone https://github.com/charlesakwoyo/edubot.git
cd edubot
npm install
```

Get a free access token from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) and set it as `HF_API_KEY` in `server.js`, or better, read it from an environment variable. Then:

```bash
node server.js
```

Open the address printed in the terminal.

## Author

**Charles Akwoyo** · [GitHub](https://github.com/charlesakwoyo) · [Portfolio](https://akwoyo.netlify.app)
