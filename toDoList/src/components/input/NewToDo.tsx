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

        const key = function() {
            if (toDoes) {
                const toDoesList = JSON.parse(toDoes);
                for (let i = 1; ; i++) {
                    if (toDoesList.length >= 1) {
                        let used = [];
                        for (let k = 0; k < toDoesList.length; k++) {
                            used.push(toDoesList[k][1])
                        }
                        if (!used.includes(i)) {
                            return i
                        }   
                    }else return 1
                }
            }
        }

        if (toDoes){
            const newToDoes = JSON.parse(toDoes);
            newToDoes.push([input.current?.value, key()]);
            toDoes = JSON.stringify(newToDoes);
            localStorage.setItem('toDoes', toDoes);
        }
        
    }
    return <><input type="text"  ref={input}/> <AddButton onClick={() => {
        handleClick();
        update();
        input.current.value = '';
    }}/> </>
}

export { NewToDo }