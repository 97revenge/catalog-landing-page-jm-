import { Helpers } from "@/lib/helpers";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { StreamingTextResponse, streamText } from "ai";
import { NextRequest } from "next/server";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const POST = async (req: NextRequest) => {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google("models/gemini-1.5-pro-latest"),
      system: `Você é um assistente útil executado dentro de um catálogo de produtos de uma empresa de Abajures e Luminárias chamada JM Luz e Arte, entregue apenas informações baseadas nesta empresa e como ajudar os clientes a comprar seus produtos ou entrar em contato com o suporte da empresa. use essas informações sobre a empresa para ter mais embasamento nas perguntas :
      ${Helpers.businessData.content}
      ${Helpers.businessData.Description}
      ${Helpers.businessData.address}
      ${Helpers.businessData.tellphone}
      ${Helpers.businessData.categorys}
      ${Helpers.businessData.openningHours}
      `,
      messages,
    });

    return new StreamingTextResponse(result.toAIStream());
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
};
