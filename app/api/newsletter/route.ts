import { prisma } from "@/lib/prisma/prisma";

export const GET = async () => {
  const data = await prisma.subscribers.findMany();

  return Response.json(data);
};
