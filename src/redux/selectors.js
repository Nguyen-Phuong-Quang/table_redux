export const studentsListSelector = (state) => { 
    const studentsListRemaining = state.studentsList.filter(student => {
        for(let i in state.filter) {
            if(!student[i].toLowerCase().includes(state.filter[i].toLowerCase()))
                return false
        }

        return true
    })
    return studentsListRemaining
}