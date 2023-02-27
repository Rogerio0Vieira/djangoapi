import { useState } from 'react'
import './App.css'
import { BookTumblr } from './components/BookTumblr/BookTumblr'
import { SearchField } from './components/SearchField/SearchField'
import { GenericButton } from './components/GenericButton/GenericButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <BookTumblr favorite={true} imageName='teste' imagePath='teste' title='teste'/> */}
      <SearchField/>
      <GenericButton name="teste" color="purple"/>
    </div>
  )
}

export default App
