import nodemailer from 'nodemailer'

import { Email } from '@/components/Email/email'

import { render } from '@react-email/render'
import { OffersComponent } from '@/components/Email/OffersComponent'

export const POST = async () => {
  try {
    const stack = [
      'matheusgreen2023@gmail.com',
      'tonabrasil@tonabrasil.com.br',
      'loja@cetti.com.br',
      'estoque@klaxon.com.br',
      'blumenau@blumenau.ind.br',
      'silvio@etel.design',
      'toniribeiroeletric@hotmail.com',
      'eduardo@metalurgicaitamonte.com.br',
      'ilumineibrasil@gmail.com',
      'azledbq@gmail.com',
      'atendimento@verticaliluminacao.com.br',
      'nfe@illumine.ind.br',
      'financeiro@jcaaudioevideo.com',
      'jessica.costa@direcaodaluz.com.br',
      'fiorioiluminacao@gmail.com',
      'ilumine@uol.com.br',
      'directligth@directligth.com.br',
      'craquele@craquele.com.br',
      'financeiro@falge.ind.br',
      'miranda@amplaluz.com.br',
      'contato@luminariasdacidade.com.br',
      'daniel@ideallume.com.br',
      'rafael@clra.com.br',
      'iluminacao@elmig.com.br',
      'adm.technoline@gmail.com',
      'rafael@sergon.com.br',
      'rvailuminacao@gmail.com',
      'nfe.fornecedor@ligbem.com.br',
      'administrativo@lunel.ind.br',
      'avoti@avoti.com.br',
      'lediluminacoes@outlook.com',
      'atendimento@illuminare-rj.com.br',
      'financeiro@i9led.com.br',
      'old.adm@outlook.com.br',
      'eled.iluminacao@gmail.com',
      'thcesar@outlook.com',
      'constance@constancesandall.com.br',
      'compras.projetailuminacao@gmail.com',
      'arteiluminar@gmail.com',
      'motor@motoreletricome.com.br',
      'alamar@alamar.com.br',
      'claudio@biancamanoluce.com.br',
      'joviano_xavier@hotmail.com',
      'cavedine@yahoo.com.br',
      'nfe@espacodaluz.com.br',
      'roberto@casaroberto.com.br',
      'financeiro@oficinadoacrilicoilumi.com.br',
      'contato@ambiance.net.br',
      'luz-vita@hotmail.com',
      'financeiro@opl.com.br',
      'compras@dicompel.com.br',
      'desing_iluminacaopp@outlook.com',
      'nfe@morgan.com.br',
      'carlos@tracodeluz.com.br',
      'rr_cabos@hotmail.com',
      'financeiro@marcavento.com.br',
      'contato@bylux.com.br',
      'douglasobento@gmail.com',
      'adm@creativelamps.com.br',
      'adm@larong.com.br',
      'renata@concinco.com.br',
      'rkserralheria@live.com',
      'financeiro@alpesiluminacao.com.br',
      'thiagoribeiro@msn.com',
      'financeiro@sollos.ind.br',
      'fabricacao@orluce.com.br',
      'bender@db2brasil.com.br',
      'comercial@petalasdouradas.com.br',
      'silvio.boseli@terra.com.br',
      'compras@vialight.com.br',
      'dagel@dagel.com.br',
      'compras@volareventiladores.com.br',
      'wolf.incopar@gmail.com',
      'lustreshansa@terra.com.br',
      'adriana_celio@outlook.com',
      'compras4@ferrolene.com.br',
      'liuba.berman@hotmail.com',
      'compras@cherubino.com.br',
      'thiagoferreira.hiago@gmail.com',
      'favrillestudio@yahoo.com.br',
      's.i.s.resistencias@hotmail.com',
      'resistimig@resistimig.com.br',
      'nfe@geiser.ind.br',
      'edisonbaradel@uol.com.br',
      'CONTATO@ALMATECELETRICA.COM.BR',
      'janaina.araujo@basso.ind.br',
      'carolalleoni@gmail.com',
      'douran2012@hotmail.com',
      'vendas.resiwatts@hotmail.com',
      'david.almeida@tyg.com.br',
      'compras@dennex.com.br',
      'adm.sp@tecnolatina.com.br',
      'sp.compras@bambozzi.com.br',
      'walwattsresistencias@bol.cm.br',
      'energy@energyresistencias.com',
      'ventnew@terra.com.br',
      'tipornf2@gmail.com',
      'jung@jung.com.br',
      'auxilarcomprascd@latco.com.br',
      'mirian@alpesiluminacao.com.br',
    ]

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jmluzearte@gmail.com',
        pass: 'opqt aljs euqv jebi',
      },
    })

    const emailHtml = render(<OffersComponent />)

    const options = {
      from: 'jmluzearte@gmail.com',
      to: stack.join(', '), // Join multiple recipients with comma-separated string
      subject: 'SUPER PROMOÇÃO NA AREA | @jmluzearte',
      html: emailHtml,
    }

    const info = await transporter.sendMail(options)

    return Response.json({ message: String(info.accepted) }, { status: 200 })
  } catch (err) {
    console.log(err)
    return Response.json({ message: err, status: 'error' }, { status: 500 })
  }
}
