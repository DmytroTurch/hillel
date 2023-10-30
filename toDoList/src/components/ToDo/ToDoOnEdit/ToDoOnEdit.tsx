import { ChangeEventHandler } from "react"

interface ToDoOnEditProps {
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}

const ToDoOnEdit:React.FC<ToDoOnEditProps> = ({value, onChange}:ToDoOnEditProps) => {
    return <input type="text" value={value} onChange={onChange}/>
}

export { ToDoOnEdit }