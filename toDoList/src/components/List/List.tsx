import { ToDo } from "../ToDo/ToDo"

interface listProps {
    toDoes: Array<string>, 
}
const List: React.FC<listProps> = ({toDoes}:listProps) => {
    const now = new Date (Date.now());
    const dateKey = now.toJSON()
    const listOfToDoes = toDoes.map((toDo:string) => <ToDo key={dateKey}>{toDo}</ToDo>)
    return <ul>{listOfToDoes}</ul>
}

export { List }

