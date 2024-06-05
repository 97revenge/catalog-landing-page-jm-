'use client'

import Markdown from 'react-markdown'

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'

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
} from '@/components/ui/credenza'
import { ComversacionalComponent } from '../component/comversacional-component'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'

import { UseChatOptions } from 'ai'

import { useChat } from 'ai/react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import {
  LineMdChat,
  LineMdCompassLoop,
  LineMdLightbulb,
  QuestionComponent,
} from '../component/question-component'
import { Helpers } from '@/lib/helpers'

export const ChatLayout = ({ ...props }) => {
  const { messages, input, handleInputChange, handleSubmit, setInput } =
    useChat({
      api: 'api/ai',
    })

  const handler = (e: FormEvent<HTMLFormElement>) => {
    setView(true)
    handleSubmit(e)
    return e.preventDefault()
  }

  const chatRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const [view, setView] = useState<boolean>(false)

  return (
    <>
      <Credenza>
        <CredenzaTrigger>
          <div {...props}></div>
        </CredenzaTrigger>

        <CredenzaContent>
          <CredenzaBody>
            <ComversacionalComponent>
              <div className="transition-all flex-1 overflow-auto p-4">
                {view === true ? (
                  <>
                    <ScrollArea className="transition-all space-y-4 h-[350px] p-2 rounded-xl bg-gray-200 bg-opacity-60">
                      {messages.map(m => (
                        <>
                          <div
                            key={m.id}
                            className="transition-all   whitespace-pre-wrap"
                          >
                            {m.role === 'user' ? (
                              <>
                                <div className="transition-all ">
                                  <Avatar className="transition-all h-8 w-8">
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
                                <div className="transition-all relative left-[90%] bottom-1">
                                  <Avatar className="transition-all h-8 w-8">
                                    <AvatarImage
                                      alt="You"
                                      src="https://api.iconify.design/bi:stars.svg"
                                    />
                                    <AvatarFallback>🤖</AvatarFallback>
                                  </Avatar>
                                </div>
                              </>
                            )}

                            {m.role === 'user' ? (
                              <>
                                <div className="transition-all relative bottom-2 right-1 flex flex-col gap-1 w-full flex items-start  justify-start ml-8">
                                  <div className="transition-all rounded-lg bg-blue-300   px-4 py-2 text-sm dark:bg-gray-800 w-auto max-w-sm ">
                                    {m.content ==
                                    Helpers.initialQuestion([
                                      Helpers.businessData.content,
                                      Helpers.businessData.address,
                                      Helpers.businessData.tellphone,
                                      Helpers.businessData.openningHours,
                                      Helpers.businessData.categorys,
                                      Helpers.businessData.Description,
                                    ]) ? (
                                      'Com o que Trabalhamos ? '
                                    ) : (
                                      <Markdown>{m.content}</Markdown>
                                    )}
                                  </div>
                                  <div className="transition-all font-medium text-gray-500 dark:text-gray-400">
                                    Você
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="transition-all  flex flex-col gap-1 w-auto">
                                  <div className="transition-all rounded-lg bg-blue-500 px-4 py-2 text-sm text-white">
                                    <Markdown>{m.content}</Markdown>
                                  </div>
                                  <div className="transition-all font-medium text-gray-500 dark:text-gray-400">
                                    IA
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      ))}
                      <div ref={chatRef} />
                    </ScrollArea>
                  </>
                ) : (
                  <>
                    <QuestionComponent>
                      <div className="transition-all flex flex-col">
                        <div className="transition-all group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="transition-all absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
                          <form onSubmit={handler as any}>
                            <Input className="hidden" />
                            <Button
                              className="transition-all  bg-transparent hover:bg-transparent w-full relative p-6 flex flex-col items-start gap-4 h-full"
                              onClick={() => setInput('Quem somos? ')}
                              type="submit"
                            >
                              <LineMdLightbulb className="transition-all w-10 h-10 text-primary current fill text-blue-500" />
                              <h3 className="transition-all text-2xl font-bold text-white">
                                Quem somos?{' '}
                              </h3>
                            </Button>
                          </form>
                        </div>
                        <div className="transition-all group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="transition-all absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
                          <form onSubmit={handler as any}>
                            <Input className="hidden" />
                            <Button
                              className="transition-all  bg-transparent hover:bg-transparent w-full relative p-6 flex flex-col items-start gap-4 h-full"
                              onClick={() =>
                                setInput(
                                  'Com o que a JM Luz e arte trabalha ? ',
                                )
                              }
                              type="submit"
                            >
                              <LineMdLightbulb className="transition-all w-10 h-10 text-primary current fill text-blue-500" />
                              <h3 className="transition-all text-2xl font-bold text-white">
                                Com o que trabalhamos?{' '}
                              </h3>
                            </Button>
                          </form>
                        </div>
                        <div className="transition-all group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="transition-all absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
                          <form onSubmit={handler as any}>
                            <Input className="hidden" />
                            <Button
                              className="transition-all  bg-transparent hover:bg-transparent w-full relative p-6 flex flex-col items-start gap-4 h-full"
                              onClick={() => setInput('Endereço JM Luz e arte')}
                              type="submit"
                            >
                              <LineMdLightbulb className="transition-all w-10 h-10 text-primary current fill text-blue-500" />
                              <h3 className="transition-all text-2xl font-bold text-white">
                                Onde estamos?{' '}
                              </h3>
                            </Button>
                          </form>
                        </div>
                      </div>
                    </QuestionComponent>
                  </>
                )}
              </div>
              <form
                method="post"
                onSubmit={handleSubmit}
                className="transition-all flex items-center gap-2 border-t px-4 py-3"
              >
                <Input
                  value={input}
                  onChange={handleInputChange}
                  className="transition-all flex-1"
                  placeholder="Algo que queira saber sobre a empresa..."
                  type="text"
                />
                <Button
                  className="transition-all bg-blue-500"
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
  )
}
