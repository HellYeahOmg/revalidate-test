'use server'

import { revalidateTag } from "next/cache";

export const revalidateData = () => {
  revalidateTag('data')
}

export async function test(text) {
  await fetch('http://localhost:3000/api', {
    method: 'POST',
    body: JSON.stringify(text)
  })
  revalidateTag('data')
}
