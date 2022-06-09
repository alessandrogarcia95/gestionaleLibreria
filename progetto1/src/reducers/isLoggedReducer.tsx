export const isLoggedReducer = (state: boolean = false, action: any) => {
    switch(action.type){
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;
    }
}