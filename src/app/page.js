import {RevalidateButton} from "@/app/revalidateButton";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  const data = await fetch('http://localhost:3000/api', { cache: 'no-store' }).then(res => res.json())

  return (
    <main>
      <div className={'mb-8'}>
        <p>data list:</p>
        {data.map(item =>
          <div  key={item.id}>
          <p>{item.name}</p><p></p>
        </div>)}
      </div>
      <RevalidateButton></RevalidateButton>
    </main>
  );
}

