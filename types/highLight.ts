import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
import { z } from "zod";

const contentSchema = z
  .object({
    icon: z.string().url().optional(),
    title: z.string(),
    descripton: z.string(),
  })
  .optional();

export const hightLightSchema = z.object({
  discount: z.number(),
  image: z.array(z.string().url()).or(z.string().url()),
  title: z.string(),
  note: z.string(),
  description: z.string(),
  value: z.array(z.string()),
  url: z.string().url(),
  insights: z
    .object({
      title: z.string(),
      description: z.string(),
      content: z.array(contentSchema),
    })
    .optional(),
});

export interface HightLightSchema
  extends Array<z.infer<typeof hightLightSchema>> {
  discount: any;
  image: string | undefined;
  title: any;
  note: any;
  description: any;
  value: any;
  url: Url;
}
