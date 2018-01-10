export default(state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.item];
        default:
            return state;
    }
};