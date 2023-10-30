import { useState } from 'react'
import './App.css'
import { List } from './components/List/List'
import { NewToDo } from './components/input/NewToDo'
function App() {
  const toDoes = localStorage.getItem('toDoes');
  const initList = toDoes ? JSON.parse(toDoes) : [];
  
  const [list, setList] = useState(initList)

  function handleUpdate() {
    if (toDoes) {
      setList(JSON.parse(toDoes))
    }
  }
  return (
    <>
      <NewToDo update={handleUpdate}/>
      <List toDoes={list}></List>
    </>
  )
}

export default App
