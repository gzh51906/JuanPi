let initState = {
    userInfo:null,
    htAuthorization:'',
    quanxian:'',
    username:''
}

function reducer(state=initState,action){
    switch(action.type){
        // {type:'login',userInfo,token}
        case 'login':
        localStorage.setItem('htAuthorization',action.authorization)
        localStorage.setItem('htquanxian',action.quanxian)
        localStorage.setItem('htusername',action.username);
     
            return {
                ...state,
                quanxian:action.quanxian,
                htAuthorization:action.authorization,
                username:action.username
            }
        case 'logout':
        localStorage.removeItem('htAuthorization');
        localStorage.removeItem('htquanxian');
        localStorage.removeItem('htusername');
            return {
                ...state,
                quanxian:null,
                htAuthorization:'',
                username:''
            }
     
        default:
            return state;

    }
}

export default reducer;