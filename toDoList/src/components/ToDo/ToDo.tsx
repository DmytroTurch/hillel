import {useState} from 'react'
import { ToDoOnEdit } from './ToDoOnEdit/ToDoOnEdit'
import { EditButton } from '../Buttons/EditButton/EditButton'
interface toDoProps {
    children: string,
}

const ToDo: React.FC<toDoProps> = ({children}:toDoProps) => {
    const [editing, setEditing] = useState(false)
    const [content, setContent] = useState(children)

    function handleEdit() {
        const newState = !editing;
        setEditing(newState);
    }


    return <li>{editing ? <ToDoOnEdit value={content} onChange={(e) => setContent(e.target.value)}/> : content } <EditButton onClick={handleEdit}/></li>
}
export { ToDo }