

export default (state=false, action) => {

    switch (action.type) {
        case 'switch_loading':
            return action.payload;
        default:
            return state
    }
}
