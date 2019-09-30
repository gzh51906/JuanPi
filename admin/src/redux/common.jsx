let initState = {
    userInfo:null,
    htAuthorization:'',
    htid:''

}

function reducer(state=initState,action){
    switch(action.type){
        // {type:'login',userInfo,token}
        case 'login':
        localStorage.setItem('htAuthorization',action.authorization)
        localStorage.setItem('htid',action.id)
     
            return {
                ...state,
                htAuthorization:action.authorization,
                htid:action.id
            }
        case 'logout':
        localStorage.removeItem('htAuthorization');
        localStorage.removeItem('htid');
            return {
                ...state,
                htAuthorization:'',
                htid:''

            }
     
        default:
            return state;

    }
}

export default reducer;