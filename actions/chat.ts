"use server"

import { createStreamableUI, createStreamableValue } from "ai/rsc"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { CoreMessage, streamText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

import { Helpers } from "@/lib/helpers";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export const chat = async (messages: Message[]) => {
  "use server"




  const { textStream } = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    system: `Voçe é um assistente de vendas referente a empresa JM Luz e Arte. use este conteudo para se basear em uma humanizada otima experiencia com o cliente em vendas: 
     ${Helpers.businessData.tellphone}
     ${Helpers.businessData.openningHours}
     ${Helpers.businessData.Description}
     ${Helpers.businessData.content} `,
    messages
  })




  const stream = createStreamableValue(textStream);



  return {
    messages,
    newMessage: stream.value,
  };


}