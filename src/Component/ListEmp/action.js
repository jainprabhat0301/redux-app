import { DELETE_EMP,ADD_EMP, UPDATE_EMP} from './constant'


export const removeEmpFromList = (data) => {
   // console.log("removeEmpFromList",data)
    return {
        type: DELETE_EMP,
        data: data

    }
} 

export const addEmpToList = (data) => {
    return {
        type: ADD_EMP,
        data: data
    }
}


export const updateEmpFromList = (data) => {
   // console.log("updateEmpFromList",data);
    
      return {
          type: UPDATE_EMP,
          data: data
  
      }
  }
