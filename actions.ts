"use server"

import { Helpers } from "@/lib/helpers";

import { createAI, getMutableAIState } from "ai/rsc"
import React from "react"
import { chat } from "./actions/chat";
import { Message } from "ai";


export interface ServerMessage extends Message {

}

export interface UserMessage extends Message {
  display: React.ReactNode;
}



export const AI = createAI<ServerMessage[], UserMessage[]>({
  actions: {
    chat
  },
  initialAIState: [{
    id: "",
    role: "user",
    content: `${Helpers.businessData.tellphone}
     ${Helpers.businessData.openningHours}
     ${Helpers.businessData.Description}
     ${Helpers.businessData.content}`
  }],
  initialUIState: [],
  onSetAIState: async ({ done }) => {

    if (done) {
      console.log("rendered")
    }

  }
})