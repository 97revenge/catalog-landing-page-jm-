export const useFetch = async () => {
  let i;
  const response = await fetch("http://localhost:3000/api/test", {
    method: "GET",
    next: { revalidate: 3600 },
  });

  const data = await response.json();

  i = data;

  return { data };
};
