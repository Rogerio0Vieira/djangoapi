import { useState } from 'react'
import './App.css'
import { BookTumblr } from './components/BookTumblr/BookTumblr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <BookTumblr favorite={true} imageName='teste' imagePath='teste' title='teste'/> */}
    </div>
  )
}

export default App
