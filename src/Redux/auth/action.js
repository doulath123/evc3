import axios from "axios"

export const ADD_USER_LODINGS ="ADD_USER_LODINGS"
export const ADD_USER_SUCCSESS ="ADD_USER_SUCCSESS"
export const ADD_USER_FALIURES ="ADD_USER_FALIURES"

export const loginaction =(user) =>(dispatch)=>{
    try {
        dispatch(loding())
        axios.post("https://reqres.in/api/login",user).then((data) =>{
            
            dispatch({type:ADD_USER_SUCCSESS,payload:data.data.token})
            console.log(data)
        }).catch((err) =>{
            dispatch(falure())

        })
    } catch (error) {
        
    }
}

export const succsess = () =>{
        return{
            type:ADD_USER_SUCCSESS,
        }
}
export const loding = () =>{
    return{
        type:ADD_USER_LODINGS,
    }
}
export const falure = () =>{
    return{
        type:ADD_USER_FALIURES,
    }
}
   


