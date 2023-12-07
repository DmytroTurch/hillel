import { AddButton } from "../Buttons/AddButton/AddButton"
import { useRef } from 'react'
import { listManipulation } from "../../stored-toDoes"

const addToDo = function (content:string) {listManipulation.addToDoes(content)};

interface NewToDoProps {
    update: () => void
}

const NewToDo:React.FC<NewToDoProps> = ({update}:NewToDoProps) => {
    const input = useRef(null)
    function handleClick() {
        
        addToDo(input.current.value);
        
    }
    return <><input type="text"  ref={input}/> <AddButton onClick={() => {
        handleClick();
        update();
        input.current.value = '';
    }}/> </>
}

export { NewToDo }