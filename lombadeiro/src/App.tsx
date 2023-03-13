import { useState } from 'react'
import './App.css'
import { BookTumblr } from './components/BookTumblr/BookTumblr'
import { SearchField } from './components/SearchField/SearchField'
import { GenericButton } from './components/GenericButton/GenericButton'
import { SideMenu } from './components/SideMenu/SideMenu'
import { Filter } from './components/Filter/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <BookTumblr favorite={true} imageName='teste' imagePath='teste' title='teste'/> */}
      <SideMenu/>
      <Filter/>
      <SearchField/>
      <GenericButton name="teste" color="purple"/>
    </div>
  )
}

export default App
