import React, {createContext, useContext, useReducer} from "react";

//Prepares the datalayer
// Context is a way to pass data through the component tree without having to pass props down manually at every level.
export const StateContext = createContext();

//Wrap our app and provide the data layer to the components
//StateProvider provides the state and dispatch functions to its children.
//The useReducer hook is used to manage the state and dispatch actions. The value of StateContext.Provider is set to the return value of useReducer, which is [state, dispatch].
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer.
//The useStateValue hook allows components to access the state and dispatch functions from the context. It calls useContext(StateContext) to get the current value of the context, which is [state, dispatch].
export const useStateValue = () => useContext(StateContext);