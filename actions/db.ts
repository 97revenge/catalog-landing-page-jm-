import { prisma } from "@/lib/prisma/prisma";

export const db = async (): Promise<any[]> => {
  const data = await prisma.subscribers.findMany();

  return data satisfies Array<any>;
};
