interface toDoProps {
    children: string,
}

const ToDo: React.FC<toDoProps> = ({children}:toDoProps) => {
    return <li>{children}</li>
}
export { ToDo }