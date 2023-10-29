import { ToDo } from "../ToDo/ToDo"

interface listProps {
    toDoes: Array<string>, 
}
const List: React.FC<listProps> = ({toDoes}:listProps) => {
    const listOfToDoes = toDoes.map((toDo:string) => <ToDo>{toDo}</ToDo>)
    return <ul>{listOfToDoes}</ul>
}

export { List }

