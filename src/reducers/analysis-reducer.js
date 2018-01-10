export default(state = [], action) => {
    switch(action){
        case "add":
        return [
            ...state,
           action.item
        ];
        default:
            return state;
    }
};
