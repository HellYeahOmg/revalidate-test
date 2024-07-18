'use client'

import {useState} from "react";

export const Form = () => {
  const [text, setText] = useState('')
    const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async () => {
    setIsLoading(true)

    await fetch('http://localhost:3000/api', {
      method: 'POST',
      body: JSON.stringify(text)
    })

    setIsLoading(false)
    setText('')
    // revalidateData()
  }

  return <div>
      <p>submit form</p>
      <div className={'flex gap-2'}>
          <input className={'border-2'} type="text" value={text} onChange={e => setText(e.target.value)}/>
          <button disabled={isLoading} className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={handleSubmit}>submit</button>
      </div>
  </div>
}
