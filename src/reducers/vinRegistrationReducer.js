


export default (state=[], action) => {
    switch(action.type) {
        case 'check_vin':
            console.log([...state, action.payload]);
            return [...state, action.payload];
        default:
            return state;
    }
}
