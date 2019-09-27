let initState = {
    userInfo:null,
    token:'',
    quanxian
}

function reducer(state=initState,action){
    switch(action.type){
        // {type:'login',userInfo,token}
        case 'login':
            return {
                ...state,
                quanxian:action.quanxian,
                token:action.token
            }
        case 'logout':
            return {
                ...state,
                quanxian:null,
                token:''
            }
     
        default:
            return state;

    }
}

export default reducer;