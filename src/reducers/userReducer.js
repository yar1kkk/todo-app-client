export default function userReducer(state = [], action) {
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...state, action.payload];
        case "UPDATE":
            return state.map((user) => user._id === action.payload._id ? action.payload : user)
        case "DELETE":
            return state.filter((user) => user._id !== action.payload)
        default:
            return state;
    }
};
