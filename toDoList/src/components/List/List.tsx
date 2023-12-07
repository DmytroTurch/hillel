import { ToDo } from "../ToDo/ToDo"

interface toDo {
    content: string;
    key: number;
}

interface listProps {
    toDoes:toDo[], 
}
const List: React.FC<listProps> = ({toDoes}:listProps) => {
    const listOfToDoes = toDoes.map((toDo:toDo) => <ToDo key={toDo.key} id={toDo.key}>{toDo.content}</ToDo>)
    return <ul>{listOfToDoes}</ul>
}

export { List }

