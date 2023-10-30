import { AddButton } from "../Buttons/AddButton/AddButton"
import { useRef } from 'react'


const NewToDo = () => {
    const input = useRef(null)
    function handleClick() {
        let toDoes = localStorage.getItem('toDoes');
        if (!toDoes) {
            localStorage.setItem('toDoes', '[]');
            toDoes = localStorage.getItem('toDoes');
        }

        if (toDoes){
            console.log(input.current.value);
            const newToDoes = JSON.parse(toDoes);
            newToDoes.push(input.current.value);
            toDoes = JSON.stringify(newToDoes);
            localStorage.setItem('toDoes', toDoes);
        }
    }
    return <><input type="text"  ref={input}/> <AddButton onClick={handleClick}/> </>
}

export { NewToDo }