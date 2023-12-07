interface toDo {
    content:string;
    key: number;
}

const setToDoes = function(content:string) {
    localStorage.setItem('toDoes', content);
}

const stored = function() {return localStorage.getItem('toDoes');}

const getArrToDoes = function() {
    const currentStored = stored();
    if (currentStored) {
        const toDoes:toDo[] = JSON.parse(currentStored);
        return toDoes;
    } else {
        setToDoes('[]');
        const toDoes:toDo[] =[];
        return toDoes;
    }
}

const listManipulation = {



    key: function() {

        const toDoesList = getArrToDoes();
        for (let i = 1; ; i++) {
            if (toDoesList.length >= 1) {
                const used = [];
                for (let k = 0; k < toDoesList.length; k++) {
                    used.push(toDoesList[k].key)
                }
                if (!used.includes(i)) {
                    return i 
                }   
            }else return 1
        }
    },

    addToDoes: function(newToDo:string) {
        const currentToDoArr = getArrToDoes();
        console.log(getArrToDoes())
        currentToDoArr?.push({content: newToDo, key: this.key()})
        console.log(getArrToDoes())
        const newToDoList = JSON.stringify(currentToDoArr);
        setToDoes(newToDoList);
    },

} 

export {listManipulation}