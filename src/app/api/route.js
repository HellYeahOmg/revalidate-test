import { revalidatePath } from "next/cache"

const data = [ { id: 1, name: 'John Doe'} ]

export async function GET() {
  return Response.json(data)
}

export async function POST(request) {
  const res = await request.json()
  const newId = data[data.length - 1].id + 1
  data.push({id: newId, name: res})

  await new Promise((resolve) => setTimeout(resolve, 5000))
  revalidatePath('/')
  return Response.json({status: 'ok'})
}
