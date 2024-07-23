'use client'

import { useState } from "react";
import { revalidateData } from "@/app/actions";
import { test } from "@/app/actions";

export const Form = () => {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async () => {
    setIsLoading(true)
    await test(text)
    setIsLoading(false)
    setText('')
  }

  return <div>
    <p>submit form</p>
    <div className={'flex gap-2'}>
      <input className={'border-2 text-black'} type="text" value={text} onChange={e => setText(e.target.value)} />
      <button disabled={isLoading} className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={handleSubmit}>submit</button>
    </div>
  </div>
}
