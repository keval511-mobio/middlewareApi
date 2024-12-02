const initial={
    details:[ ]
 
}

export const Reducer=(state=initial,action)=>{
     
    
                switch(action.type){
                    case "ADD":
                        return   { ...state, details:action.payload}
                        default : 
                            return state
                }
 }