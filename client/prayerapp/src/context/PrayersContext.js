import { createContext, useReducer } from "react";

export const PrayersContext = createContext()

export const prayerReducer = (state, action) => {
    switch (action.type){
        case 'SET_PRAYERS':
            console.log(action.payload)
            return {
                prayers:action.payload
            }
        case 'CREATE_PRAYER':
            return {
                prayers: [action.payload, ...state.prayers]
            }
        case 'DELETE_PRAYER': 
            return {
                prayers: state.prayers.filter((prayer) => prayer._id !== prayer.payload._id)  
            }
        default: 
            return state
    }
}

export const PrayersContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(prayerReducer, {prayers:null})
    
    return (
        <PrayersContext.Provider value={{...state, dispatch}}>
            {children}
        </PrayersContext.Provider>
    )
}

