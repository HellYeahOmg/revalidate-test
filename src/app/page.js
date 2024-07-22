import {RevalidateButton} from "@/app/revalidateButton";
import {Form} from "@/app/form";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  const data = await fetch('http://localhost:3000/api', { next: { tags: ['data'] } })
    .then(res => res.json())

  return (
    <main className="bg-black">
      <div className={'mb-8'}>
        <p>data list:</p>
        {data.map(item =>
          <div  key={item.id}>
          <p>{item.name}</p><p></p>
        </div>)}
      </div>
      <Form></Form>
      <RevalidateButton></RevalidateButton>
    </main>
  );
}

