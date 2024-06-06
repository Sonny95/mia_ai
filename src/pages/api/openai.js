import { OpenAI } from "openai";

export default async function handler(req, res) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    //1 assistant
    const myAssistant = await openai.beta.assistants.retrieve("asst_BSI3fuMB2jpvN8VuByUg7W9I");
    console.log(myAssistant.id, "id");
    //2 new thread and start conversation
    const thread = await openai.beta.threads.create(myAssistant.id);
    //3 add trhead
    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: "Who's Mia",
    });
    //reply back
    const run = await openai.beta.threads.runs.create(thread.id, {
      messages: [message],
    });
    console.log(run);

    // reply back to client
    res.status(200).json(run);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
