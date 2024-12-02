import axios from "axios"

// export const Adding = ()=>{
// return {type:"ADD"}
// }

export const Removing =()=>{
return{type:"REMOVE"}
}

export const Editing=()=>{
return{type:"EDIT"}
}

export const Middleware=()=>{
    return async (dispatch )=>{
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({type:"ADD",
            payload:  data.data
                 })
      } catch (error) {
        console.log("something went wrong in api");
      }
    }
}


 