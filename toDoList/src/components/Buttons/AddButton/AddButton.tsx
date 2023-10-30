interface AddButtonPropa {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}


const AddButton:React.FC<AddButtonPropa> = ({onClick}:AddButtonPropa) => {

    return <button onClick={onClick}>Add</button>
}

export {AddButton}