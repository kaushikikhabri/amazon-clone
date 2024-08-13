import { red } from "@mui/material/colors";
import { act } from "react"

export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;
    }
};

export default reducer;