"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
  DrawerContent,
  Drawer,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { JSX, SVGProps, useEffect, useState, useTransition } from "react";
import { FadeUpStagger } from "../Animations/FadeUpStagger";
import { Badge } from "../ui/badge";

// const StaticSpinner = dynamic<{ inline?: boolean }>(
//   () => import('@/components/Animations/FadeUpStagger').then(mod => mod.FadeUpStagger)
// )

// const Spinner = dynamic<React.ComponentProps<typeof StaticSpinner>>(
//   () => import('@/components/Animations/FadeUpStagger').then(mod => mod.FadeUpStagger)
// )

export function NewsletterComponent() {
  const [database, setDatabase] = useState<Array<any>>([]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const response = await fetch("api/newsletter");
      const data = await response.json();
      setDatabase(data);
    });
  }, []);

  if (isPending) {
    return (
      <>
        <FadeUpStagger>
          <div className="transition-auto relative top-[300px]  bg-transparent  flex items-center justify-center">
            <h1 className="text-6xl text-black">carregando ...</h1>
          </div>
        </FadeUpStagger>
      </>
    );
  }
  return (
    <>
      <FadeUpStagger>
        <div
          className={
            isPending
              ? "transition-auto blur-sm flex h-screen w-full flex-col"
              : "transition-auto flex h-screen w-full flex-col"
          }
        >
          <header className="flex h-16 items-center justify-between border-b bg-gray-100 px-6 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center gap-4">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <MailIcon className="h-6 w-6" />
                <span>Newsletter</span>{" "}
                <span>Total de contatos : {database.length}</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="h-8 w-64 rounded-md bg-white pl-9 shadow-none dark:bg-gray-900"
                  placeholder="Procurar por assinantes"
                  type="search"
                />
              </div>
              <Button className="rounded-full" size="icon" variant="outline">
                <PlusIcon className="h-5 w-5" />
                <span className="sr-only">Add Subscriber</span>
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <div className="grid gap-6">
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium">Subscribers</h2>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Export
                    </Button>
                    <Button size="sm" variant="outline">
                      Import
                    </Button>
                  </div>
                </div>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Ativo</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {database.map((item, index) => {
                        return (
                          <>
                            <TableRow key={index}>
                              <TableCell>{item.email}</TableCell>
                              <TableCell>
                                {item.approved === true ? (
                                  <>
                                    <Badge className="transition-auto bg-green-500 hover:bg-lime-500">
                                      ativo
                                    </Badge>
                                  </>
                                ) : (
                                  "false"
                                )}
                              </TableCell>
                              <TableCell>
                                <Button size="sm" variant="outline">
                                  Send Email
                                </Button>
                              </TableCell>
                            </TableRow>
                          </>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="sm" variant="outline">
              Compose Email
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Compose Email</DrawerTitle>
              <DrawerDescription>
                Send an email to a subscriber.
              </DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4 p-4">
              <div>
                <Label htmlFor="to">To</Label>
                <Input id="to" placeholder="Enter email address" type="email" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter subject" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="h-40"
                  id="message"
                  placeholder="Enter message"
                />
              </div>
            </div>
            <DrawerFooter>
              <Button>Send</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </FadeUpStagger>
    </>
  );
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
