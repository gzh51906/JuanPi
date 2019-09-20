
let initState = {
    userInfo: null,
    token: '',
};

function reducer(state=initState) {
    // switch (action.type) {
    //     case 'login':
    //         return {
    //             ...state,
    //             userInfo: action.userInfo,
    //             token:action.token
    //         }
        
    //     case 'logout':
    //         return {
    //             ...state,
    //             userInfo: null,
    //             token:''
    //         }

    //     default: return state;
    // }
    return {
        state
    }
};

export default reducer;