import { z } from "zod";

export const whatsAppSchema = z.object({
  number: z.string().min(10, { message: "veja se seu numero é válido" }),
});
