'use client'
import Markdown from 'react-markdown'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

// import Markdown from 'react-markdown'

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'

import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaTrigger,
} from '@/components/ui/credenza'
import { ComversacionalComponent } from '../component/comversacional-component'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'

import { CoreMessage } from 'ai'

import {
  ChangeEvent,
  FormEvent,
  HtmlHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react'
import {
  LineMdLightbulb,
  QuestionComponent,
} from '../component/question-component'
import { Helpers } from '@/lib/helpers'
import { chat, Message } from '@/actions/chat'
import { readStreamableValue } from 'ai/rsc'

export const ChatLayout = ({ ...props }) => {
  const [conversation, setConversation] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')
  const [isPending, startTransition] = useTransition()

  // const { messages, input, handleInputChange, handleSubmit, setInput } =
  //   useChat({
  //     api: 'api/ai',
  //   })

  const handler = async () => {
    const { messages, newMessage } = await chat([
      ...conversation,
      { role: 'user', content: input },
    ])

    startTransition(async () => {
      setInput('')
      let textContext = ''

      for await (const delta of readStreamableValue(newMessage)) {
        textContext = `${textContext}${delta}`
        setConversation([
          ...messages,
          {
            role: 'assistant',
            content: delta as string,
          },
        ])
      }
    })
  }

  const chatRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [conversation])

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
                <ScrollArea
                  className={
                    'transition-all space-y-4 min-h-0 h-[350px] p-2 rounded-xl bg-gray-200 bg-opacity-60'
                  }
                >
                  {conversation[0]?.content ? (
                    <>
                      {conversation.map((m, index) => (
                        <>
                          <div
                            key={index}
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
                                      <Markdown>{m.content as string}</Markdown>
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
                                    <Markdown>{m.content as string}</Markdown>
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
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-center w-full h-full  bg-red-200 ">
                        jm luz e arte
                      </div>
                    </>
                  )}

                  <div ref={chatRef} />
                </ScrollArea>
              </div>
              <form
                action={handler}
                className="transition-all flex items-center gap-2 border-t px-4 py-3"
              >
                <Input
                  value={input}
                  disabled={isPending}
                  onChange={event => {
                    setInput(event.target.value)
                  }}
                  className="transition-all flex-1"
                  placeholder="Algo que queira saber sobre a empresa..."
                  type="text"
                />
                <Button
                  className="transition-all bg-blue-500"
                  type="submit"
                  disabled={isPending}
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
