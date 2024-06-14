"use server"

import { createStreamableValue, getAIState, } from "ai/rsc"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { CoreMessage, streamText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

import { Helpers } from "@/lib/helpers";

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export const chat = async (messages: Message[]) => {
  "use server"

  // const history = getMutableAIState();




  const { textStream } = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    system: `Voçe é um assistente de vendas referente a empresa JM Luz e Arte. se baseie em uma  humanizada experiencia com o cliente em vendas. 
     `,
    messages,
  })

  const stream = createStreamableValue(textStream);






  const history = getAIState()




  return {
    messages,
    newMessage: stream.value,
  };


}