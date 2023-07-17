import { useState, useEffect } from "react"
import Result from "./result.js"
import axios from "axios"

export default function TextInput () {
    const [data, setData] = useState("")
    const [error, setError] = useState("")
    const [onbtnclick, setOnbtnclick] = useState(false)

    const axiosPostData = async() => {
      const postData = {
          data: data
      }

      await axios.post('http://localhost:5000/', postData)
      .then(res => setError(<p>{res.data}</p>))
  }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!data) {
          setError(<p>Enter a text, please</p>)
        } else {
          setError('')
          axiosPostData()
          if (!onbtnclick){
            setOnbtnclick(true)
          } else {
            setOnbtnclick(false)
          }
      }
    }

    return (
        <div className="Text-input">
        <form>
          <label>Введіть текст:</label><br/>
          <textarea name="data" type="text" value={data} onChange={(e) => setData(e.target.value)}/>
          <input className="btn" type="submit" value="Вирахувати" onClick={handleSubmit} />
        </form>
        {error}
        <Result onbtnclick={onbtnclick}/>
      </div>
    )
}