"use server";

import { kv } from "@vercel/kv";
import { cookies } from "next/headers";
import { z } from "zod";

const wishlistSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});

const cookieStore = cookies();

export const getCookies = async ({
  title,
  url,
}: z.infer<typeof wishlistSchema>) => {
  cookieStore.set("bag", ``);
  return console.log(title, url);
};

export const removeCookies = async ({
  title,
  url,
}: z.infer<typeof wishlistSchema>) => {
  return console.log(title, url);
};
