import { z } from "zod";

export const productSchema = z.object({
  tag: z.array(z.string()).or(z.string()).optional(),
  image: z.string().url(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  offer: z.boolean().optional(),
});
