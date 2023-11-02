import { ToDo } from "../ToDo/ToDo"

interface listProps {
    toDoes: Array<string>, 
}
const List: React.FC<listProps> = ({toDoes}:listProps) => {
    console.log("done!")
    const listOfToDoes = toDoes.map((toDo:string) => <ToDo key={toDo}>{toDo}</ToDo>)
    return <ul>{listOfToDoes}</ul>
}

export { List }

