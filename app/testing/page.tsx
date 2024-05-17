import Chat from "@/components/Factory/chat";
import { useFetch } from "@/hooks/useFetch";

export default async function Page() {
  const { data } = await useFetch();

  return (
    <>
      <div>
        <Chat user={data} />
      </div>
    </>
  );
}
