"use client";

import Markdown from "react-markdown";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { ComversacionalComponent } from "../component/comversacional-component";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { UseChatOptions } from "ai";

import { useChat } from "ai/react";
import { useState } from "react";
import { QuestionComponent } from "../component/question-component";

export const ChatLayout = ({ ...props }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/ai",
  });

  const [view, setView] = useState<boolean>(false);

  return (
    <>
      <Credenza>
        <CredenzaTrigger>
          <div {...props}></div>
        </CredenzaTrigger>

        <CredenzaContent>
          <CredenzaBody>
            <ComversacionalComponent>
              <div className="flex-1 overflow-auto p-4">
                {view === true ? (
                  <>
                    <ScrollArea className="space-y-4 h-[350px] p-2 rounded-xl bg-gray-200 bg-opacity-60">
                      {messages.map((m) => (
                        <>
                          <div key={m.id} className="  whitespace-pre-wrap">
                            {m.role === "user" ? (
                              <>
                                <div className="">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage
                                      alt="John Doe"
                                      src="https://api.iconify.design/line-md:iconify1.svg"
                                    />
                                    <AvatarFallback>😀</AvatarFallback>
                                  </Avatar>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="relative left-[90%] bottom-1">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage
                                      alt="You"
                                      src="https://api.iconify.design/bi:stars.svg"
                                    />
                                    <AvatarFallback>🤖</AvatarFallback>
                                  </Avatar>
                                </div>
                              </>
                            )}

                            {m.role === "user" ? (
                              <>
                                <div className="relative bottom-2 right-1 flex flex-col gap-1 w-full flex items-start  justify-start ml-8">
                                  <div className="rounded-lg bg-blue-300   px-4 py-2 text-sm dark:bg-gray-800 w-auto ">
                                    <Markdown>{m.content}</Markdown>
                                  </div>
                                  <div className="font-medium text-gray-500 dark:text-gray-400">
                                    Você
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className=" flex flex-col gap-1 w-auto">
                                  <div className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white">
                                    <Markdown>{m.content}</Markdown>
                                  </div>
                                  <div className="font-medium text-gray-500 dark:text-gray-400">
                                    IA
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      ))}
                    </ScrollArea>
                  </>
                ) : (
                  <>
                    <QuestionComponent />
                  </>
                )}
              </div>
              <form
                method="post"
                onSubmit={handleSubmit}
                className="flex items-center gap-2 border-t px-4 py-3"
              >
                <Input
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1"
                  placeholder="Algo que queira saber sobre a empresa..."
                  type="text"
                />
                <Button
                  className="bg-blue-500"
                  type="submit"
                  onClick={() => setView(true)}
                >
                  Enviar
                </Button>
              </form>
            </ComversacionalComponent>
          </CredenzaBody>
          {/* 
    
          <CredenzaFooter>
            <CredenzaClose asChild>
              <button>Close</button>
            </CredenzaClose>
          </CredenzaFooter> */}
        </CredenzaContent>
      </Credenza>
    </>
  );
};
