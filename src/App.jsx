import { useEffect, useState } from "react";
import Joke from "./joke";
import "./App.css"


function App() {
  const [joke, setJoke] = useState("")
  const [secondJoke, setSecondJoke] = useState("")

  function handleClick() {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data);
        if (data.type === 'single') {
          console.log(data.joke);
          return (setJoke(data.joke), setSecondJoke(""))
        } else {
          return (setJoke(data.delivery),
            setSecondJoke(data.setup))
        }
      })
  }
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <div>
      <div className="container">
        <Joke jokeType={joke} secondJoke={secondJoke} />
      </div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
