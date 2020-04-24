const initialState = {
    heroes: []
}

export default (state = initialState, action) => {
    let newData;
    switch (action.type) {
        case 'HEROES_LIST':
            return {...state, heroes: action.payload};
        case 'HEROES_ADD':
            newData = [...state.heroes, action.payload]
            return {...state, heroes: newData};
        case 'HEROES_DELETE':
            newData = state.heroes.filter((item) => {
                if(item._id !== action.payload) {
                    return true;
                } else { return false; }
            })
            return {...state, heroes: newData}
    
        default:
            return state;
    }
}