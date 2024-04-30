import nodemailer from "nodemailer";

import { Email } from "@/components/Email/email";

import { render } from "@react-email/render";
import CouponHero from "@/components/Email/coupon-hero";

export const POST = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jmluzearte@gmail.com",
        pass: "opqt aljs euqv jebi",
      },
    });

    const emailHtml = render(<Email />);

    const stack = [
      "matheusgreen2023@gmail.com",
      "dagel@dagel.com.br",
      "silvio@etel.design",
      "blumenau@blumenau.ind.br",
      "loja@cetti.com.br",
      "estoque@klaxon.com.br",
      "toniribeiroeletric@hotmail.com",
      "azledbq@gmail.com",
      "jessica.costa@direcaodaluz.com.br",
      "directligth@directligth.com.br",
      "financeiro@falge.ind.br",
      "contato@luminariasdacidade.com.br",
      "iluminacao@elmig.com.br",
      "rvailuminacao@gmail.com",
      "estoque@klaxon.com.br",
      "financeiro@i9led.com.br",
      "thcesar@outlook.com",
      "directligth@directligth.com.br",
      "claudio@biancamanoluce.com.br",
      "roberto@casaroberto.com.br",
      "financeiro@opl.com.br",
      "tonabrasil@tonabrasil.com.br",
      "atendimento@verticaliluminacao.com.br",
      "fiorioiluminacao@gmail.com",
      "miranda@amplaluz.com.br",
      "rafael@clra.com.br",
      "azledbq@gmail.com",
      "administrativo@lunel.ind.br",
      "atendimento@illuminare-rj.com.br",
      "silvio@etel.design",
      "eduardo@metalurgicaitamonte.com.br",
      "administrativo@lunel.ind.br",
      "arteiluminar@gmail.com",
      "eduardo@metalurgicaitamonte.com.br",
      "ilumineibrasil@gmail.com",
      "nfe@illumine.ind.br",
      "financeiro@jcaaudioevideo.com",
      "ilumine@uol.com.br",
      "atendimento@verticaliluminacao.com.br",
      "craquele@craquele.com.br",
      "nfe@illumine.ind.br",
      "daniel@ideallume.com.br",
      "eduardo@metalurgicaitamonte.com.br",
      "adm.technoline@gmail.com",
      "rafael@sergon.com.br",
      "nfe.fornecedor@ligbem.com.br",
      "avoti@avoti.com.br",
      "lediluminacoes@outlook.com",
      "fiorioiluminacao@gmail.com",
      "rafael@sergon.com.br",
      "old.adm@outlook.com.br",
      "eled.iluminacao@gmail.com",
      "constance@constancesandall.com.br",
      "fiorioiluminacao@gmail.com",
      "compras.projetailuminacao@gmail.com",
      "motor@motoreletricome.com.br",
      "alamar@alamar.com.br",
      "joviano_xavier@hotmail.com",
      "financeiro@oficinadoacrilicoilumi.com.br",
      "eled.iluminacao@gmail.com",
      "financeiro@oficinadoacrilicoilumi.com.br",
      "financeiro@oficinadoacrilicoilumi.com.br",
      "financeiro@sollos.ind.br",
      "fabricacao@orluce.com.br",
      "cavedine@yahoo.com.br",
      "nfe@espacodaluz.com.br",
      "contato@ambiance.net.br",
      "luz-vita@hotmail.com",
      "compras@dicompel.com.br",
      "nfe@morgan.com.br",
      "desing_iluminacaopp@outlook.com",
      "rr_cabos@hotmail.com",
      "contato@bylux.com.br",
      "douglasobento@gmail.com",
      "adm@larong.com.br",
      "carlos@tracodeluz.com.br",
      "financeiro@marcavento.com.br",
      "ilumine@uol.com.br",
      "adm@creativelamps.com.br",
      "luz-vita@hotmail.com",
      "renata@concinco.com.br",
      "silvio.boseli@terra.com.br",
      "rkserralheria@live.com",
      "financeiro@alpesiluminacao.com.br",
      "thiagoribeiro@msn.com",
      "bender@db2brasil.com.br",
      "financeiro@alpesiluminacao.com.br",
      "financeiro@oficinadoacrilicoilumi.com.br",
      "comercial@petalasdouradas.com.br",
      "compras@vialight.com.br",
      "financeiro@opl.com.br",
      "financeiro@alpesiluminacao.com.br",
      "compras@volareventiladores.com.br",
      "wolf.incopar@gmail.com",
      "lustreshansa@terra.com.br",
      "carlos@tracodeluz.com.br",
      "atendimento@illuminare-rj.com.br",
      "lustreshansa@terra.com.br",
      "geminiiluminacao@terra.com.br",
      "wykminas@gmail.com",
      "compras@lighttool.com.br",
      "nfe@sekiiluminacao.com.br",
      "lojahommi@gmail.com",
      "allan@spotline.com.br",
    ];

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
