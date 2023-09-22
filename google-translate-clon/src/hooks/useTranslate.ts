import { useReducer } from 'react';
import { State,Action } from '../types';


 const initialState : State = {
    inputText : "",
    outputText: "",
    fromLanguage:"auto",
    toLanguage : "en"
}


// Recives the initial state and an action
 const reducer =(state : State ,action: Action): State=>{
     const {type} = action
     
     // TODO: Remove this logic to an object
    if (type==='SET_INPUT_TEXT') {
        return {...state,inputText: action.payload}
    }

    if (type==="SET_OUTPUT_TEXT") {
        return {...state, outputText: action.payload}
    }

    if (type==='SWITCH_LANGUAGES') {
        if (state.fromLanguage==='auto') {
            return state
        }
        return {...state, 
                toLanguage: state.fromLanguage, 
                fromLanguage: state.toLanguage}
    }

    if (type==='SET_FROM_LANGUAGE') {
        return {...state,fromLanguage: action.payload}
    }

    if (type==='SET_TO_LANGUAGE') {
        return {...state,toLanguage: action.payload}
    }

    return state
}

export const useTranslate = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const {inputText,outputText,fromLanguage,toLanguage}= state

    const setInputText =(payload: string)=> dispatch({type:"SET_INPUT_TEXT",payload}) 
    const setOutputText =(payload: string)=> dispatch({type:"SET_OUTPUT_TEXT",payload}) 
    const switchLanguages =()=> dispatch({type:"SWITCH_LANGUAGES"}) 
 
    return {inputText ,outputText,fromLanguage,toLanguage,setInputText,setOutputText,switchLanguages}
}