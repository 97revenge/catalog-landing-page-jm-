import nodemailer from "nodemailer";

import { Email } from "@/components/Email/email";

import { render } from "@react-email/render";
import { prisma } from "@/lib/prisma/prisma";

export const POST = async () => {
  try {
    const stack = await prisma.subscribers.findMany();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jmluzearte@gmail.com",
        pass: "opqt aljs euqv jebi",
      },
    });

    const emailHtml = render(<Email />);

    const options = {
      from: "jmluzearte@gmail.com",
      to: stack.join(", "), // Join multiple recipients with comma-separated string
      subject: "SEU CUPOM PRÉ DIA DAS MES 👩‍👦",
      html: emailHtml,
    };

    const info = await transporter.sendMail(options);

    return Response.json({ message: String(info.accepted) }, { status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json({ message: err, status: "error" }, { status: 500 });
  }
};
