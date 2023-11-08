import {useState} from 'react'
import { ToDoOnEdit } from './ToDoOnEdit/ToDoOnEdit'
import { EditButton } from '../Buttons/EditButton/EditButton'
interface toDoProps {
    children: string,
    id: string,
}

const ToDo: React.FC<toDoProps> = ({children, id}:toDoProps) => {
    const [editing, setEditing] = useState(false)
    const [content, setContent] = useState(children)

    function handleEdit() {
        const newState = !editing;
        setEditing(newState);
    }

    function handleDelete(e){
        const toDoArr = JSON.parse(localStorage.getItem('toDoes'));
        const newArr = JSON.stringify(toDoArr.filter(toDO => !(String(toDO[1]) === e.target.id)))
        console.log(newArr);
        localStorage.setItem('toDoes', newArr)
    }


    return <li>{editing ? <ToDoOnEdit value={content} onChange={(e) => setContent(e.target.value)}/> : content } 
    <EditButton onClick={handleEdit}/> 
    <button
        id={id} 
        onClick={(e) => {handleDelete(e)}} 
    >
        Delete
    </button></li>
}
export { ToDo }