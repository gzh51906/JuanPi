let initState = {
   quanxian:'初级'
}

function reducer(state=initState,action){
    switch(action.type){
        // {type:'login',userInfo,token}
        case 'reg-qx':
            return {
                ...state,
                quanxian:action.quanxian,
               
            }      
     
        default:
            return state;

    }
}

export default reducer;