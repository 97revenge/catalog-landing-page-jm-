import { Comment } from "@/types/comment";

export const GET = async () => {
  const commentList: Array<Comment> = [
    {
      author: "Matheus Pereira",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKX2a7dZ_enIk8RbsytBYMLDWqqQ5EdENY9zAapfaLEcGoL-H2_=w60-h60-p-rp-mo-br100",
      Description:
        "Produtos de muita qualidade , ótimos valores. Tem tudo que é nescessário pra iluminação !",
      rate: 5,
    },
    {
      author: "Aline Cristina da Silva Martinez",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV8Su0hr0TQYHSS8XqUrsTIBFLCyiELuvsUL8-yhh6-iKhucqyEJA=w60-h60-p-rp-mo-br100",
      Description:
        "Profissional excelente com produtos de qualidade e ótimo custo benefício! Recomendo",
      rate: 5,
    },
    {
      author: "Flavia Nascimento",
      Description: "Excelente profissional ! Otima qualidade",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXdae2UEmpQfaC6Ek7PsK0fK5Dbw50IxZ0v79Dksu9W6nZTzNAg=w54-h54-p-rp-mo-br100",
      rate: 5,
    },

    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVJl51P9CTGHnPmzglpT4jX_oTAaL7w4tHhile2f5wZf-Sg7bA=w54-h54-p-rp-mo-br100",
      author: "Amanda Caroline",
      Description: "Ótimo atendimento e qualidade",
      rate: 5,
    },
  ];

  return Response.json(commentList);
};
