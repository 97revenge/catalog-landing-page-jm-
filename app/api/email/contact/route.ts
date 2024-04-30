export const GET = () => {
  const data = [
    ["Código", "Nome", "Email", "Status", "Último envio"],
    ["1", "", "carolalleoni@gmail.com", "Autorizou", ""],
    ["3", "", "adriana_celio@outlook.com", "Autorizou", ""],
    ["5", "", "liuba.berman@hotmail.com", "Pendente", ""],
    ["7", "", "thiagoferreira.hiago@gmail.com", "Pendente", ""],
    ["9", "", "favrillestudio@yahoo.com.br", "Pendente", ""],
    ["11", "", "amandakallfelz@uol.com.br", "Pendente", ""],
    ["13", "", "silvaduartealvesda@gmail.com", "Autorizou", ""],
    ["15", "", "pauladutraadvocacia@hotmail.com", "Autorizou", ""],
    ["17", "", "dageltubos@gmail.com", "Autorizou", ""],
    ["19", "", "josinaldocoutocouto@gmail.com", "Pendente", ""],
    ["21", "", "adriana_eves@hotmail.com", "Pendente", ""],
    ["23", "", "adriana@servcard.com.br", "Autorizou", ""],
    ["25", "", "etoedsonteles@gmail.com", "Pendente", ""],
    ["27", "", "ronaldomarsal@yahoo.com.br", "Autorizou", ""],
  ];

  const emails = data.slice(1).map((item) => item[2]);
  console.log(emails);

  return Response.json(data);
};
