import { z } from "zod";

export const hightLightSchema = z.object({
  discount: z.number(),
  image: z.array(z.string().url()).or(z.string().url()),
  title: z.string(),
  note: z.string(),
  description: z.string(),
  value: z.array(z.string()),
  url: z.string().url(),
});

export interface HightLightSchema
  extends Array<z.infer<typeof hightLightSchema>> {}
