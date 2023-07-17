import { useState, useEffect } from "react"

export default function Result ({onbtnclick}) {
    const [data, setData] = useState("")

    useEffect(()=>{
      fetch("/result").then(
      response => response.json()
      ).then(
      data =>{
          setData(data)
      }
      )
  }, [onbtnclick])
    

    return (
        <div >
        <p>Унікальна буква: {data.data}</p>
      </div>
    )
}