import { DELETE_EMP,UPDATE_EMP ,ADD_EMP } from '../Component/ListEmp/constant'

export const initialState = []

export default function Emp_list(state = initialState, action) {
    switch (action.type) {
        case ADD_EMP:
            state = [...state, { empData: action.data }]
            return state

        case DELETE_EMP:
           // console.log(" remove emp", action.data);
           // console.log("index", state.indexOf(action.data));
            const index = state.indexOf(action.data)
            if (index > -1) {
                state.splice(index, 1);
            } 
            return [...state]

     case UPDATE_EMP:
       //  console.log("update emp case",action.data);
         for (let i = 0; i < state.length; i++) {
             if (state[i].empData.id==action.data.id) {
                state[i].empData=action.data
                break; 
             }
             
         }
         return [...state]


        default:
            return state
    }

}