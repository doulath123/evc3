import { ADD_USER_SUCCSESS,ADD_USER_FALIURES,ADD_USER_LODINGS } from "./action";


const initState ={
    authentication:null,
    isLoggedIn:false,
    isError:false,
    isFaluires:false,
}

export const LoginReducer =(store=initState,{type,payload})=>{
    switch(type){
        case ADD_USER_LODINGS:return{
            ...store,
            isLoggedIn:true

        }
        case ADD_USER_SUCCSESS:return{
            ...store,
            isLoggedIn:false,authentication:payload

        }
        case ADD_USER_FALIURES:return{
            ...store,
            isError:true

        }
        default:return store
    }
}