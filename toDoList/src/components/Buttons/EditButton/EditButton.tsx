import { useState } from 'react'

interface editButtinProps {
    onClick: () => void | undefined,
}
const EditButton:React.FC<editButtinProps> = ({onClick}:editButtinProps) => {
    const [editing, setEditing] = useState(false);
    function changeContent() {
        const newState = !editing;
        setEditing(newState)
    }
    return <button onClick={ ()=>{
        onClick();
        changeContent();
    }
    }>{editing ? 'OK' : 'Edit'}</button>
}

export { EditButton }