


const initialState = {
    userName: "",
    password: ""

}



const reducer = (state = initialState, action) => {

    const newState = { ...state };

    // if (action.type === "NAME_CHANGE") {
    //     return{
    //         userName: action.payLoad
    //          }

    // }

    // if (action.type === "PASS_CHANGE") {

    //     return{
    //         password: action.payLoad
    //     }
    // }

    console.log("reducer", action)

    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, {userName: action.nameValue});
        case "PASS_CHANGE"  :
            return Object.assign({},newState, {password: action.passValue});  
        default:
            return newState;
    }


}


export default reducer;