"use server";

export const send = async (value: any) => {
  const response = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(value),
    headers: {
      "Content-Type": "Headers",
    },
  });

  if (response.status == 200 || response.statusText == "OK") {
    console.log("email send ! ");
  } else {
    console.log("not send ... ");
  }
};
