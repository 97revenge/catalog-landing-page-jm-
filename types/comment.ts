import { z } from "zod";

const commentSchema = z.object({
  image: z.string().url(),
  author: z.string(),
  Description: z.string(),
  rate: z.number().optional(),
});

export interface Comment extends z.infer<typeof commentSchema> {}
