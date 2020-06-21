import React, {createContext, useReducer} from "react";
import AppReducer from "../AppReducer";

// create initial state

const initialState = {
    transaction : [
    ]
}
// create global context

export const GlobalContext = createContext(initialState);

/// create a provider

export const GlobalProvider =  ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function deleteTransaction(id) {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        });
    }
    
     return (
         <GlobalContext.Provider value={{ transactions : state.transaction, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
     )
}