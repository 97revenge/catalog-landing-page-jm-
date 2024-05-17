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
      messages,
    });

    return new StreamingTextResponse(result.toAIStream());
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
};
