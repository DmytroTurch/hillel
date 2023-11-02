import { AddButton } from "../Buttons/AddButton/AddButton"
import { useRef } from 'react'

interface NewToDoProps {
    update: () => void
}

const NewToDo:React.FC<NewToDoProps> = ({update}:NewToDoProps) => {
    const input = useRef(null)
    function handleClick() {
        let toDoes = localStorage.getItem('toDoes');
        if (!toDoes) {
            localStorage.setItem('toDoes', '[]');
            toDoes = localStorage.getItem('toDoes');
        }
        
        if (toDoes){
            const newToDoes = JSON.parse(toDoes);
            newToDoes.push(input.current?.value);
            toDoes = JSON.stringify(newToDoes);
            localStorage.setItem('toDoes', toDoes);
        }
        
    }
    return <><input type="text"  ref={input}/> <AddButton onClick={() => {
        handleClick();
        update();
    }}/> </>
}

export { NewToDo }