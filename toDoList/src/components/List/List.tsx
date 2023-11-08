import { ToDo } from "../ToDo/ToDo"

interface listProps {
    toDoes: Array<string>, 
}
const List: React.FC<listProps> = ({toDoes}:listProps) => {
    const listOfToDoes = toDoes.map((toDo:string) => <ToDo key={toDo[1]} id={toDo[1]}>{toDo[0]}</ToDo>)
    return <ul>{listOfToDoes}</ul>
}

export { List }

