// import { prisma } from "@/lib/prisma/prisma";

// const stack = [
//   "carolalleoni@gmail.com",
//   "adriana_celio@outlook.com",
//   "liuba.berman@hotmail.com",
//   "thiagoferreira.hiago@gmail.com",
//   "favrillestudio@yahoo.com.br",
//   "amandakallfelz@uol.com.br",
//   "silvaduartealvesda@gmail.com",
//   "pauladutraadvocacia@hotmail.com",
//   "dageltubos@gmail.com",
//   "josinaldocoutocouto@gmail.com",
//   "adriana_eves@hotmail.com",
//   "adriana@servcard.com.br",
//   "etoedsonteles@gmail.com",
//   "ronaldomarsal@yahoo.com.br",
// ];

// import { NextRequest } from "next/server";
// export const GET = async (req: NextRequest) => {
//   try {
//     // const data: Promise<Array<any>> = await req.json();
//     stack.map(async (item: any, index: any) => {
//       const created = await prisma.subscribers.createMany({
//         data: {
//           email: item,
//         },
//         skipDuplicates: true,
//       });

//       if (created) {
//         console.log("created", index, created);
//       }

//       return created;
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   return Response.json({ status: 200 });
// };
