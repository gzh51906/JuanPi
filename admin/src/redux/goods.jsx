let initState = {
   data:[]
}

function reducer(state=initState,action){
    switch(action.type){
        // {type:'login',userInfo,token}
        case 'getgoods':
            return {
                ...state,
               
            }
        case 'removeitem':
            return {
                ...state,
              
            }
     
        default:
            return state;

    }
}

export default reducer;