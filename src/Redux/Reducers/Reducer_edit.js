const Reducer = (state,action) =>{
    switch(action.type){
        case 'EDIT_USERS':
            return [
                action.payload
            ]
    }
}
export default Reducer