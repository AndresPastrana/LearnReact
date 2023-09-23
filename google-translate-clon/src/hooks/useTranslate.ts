import { useReducer } from 'react';
import { State,Action, FromLangauge, Language } from '../types';


 const initialState : State = {
    inputText : "",
    outputText: "",
    fromLanguage:"auto",
    toLanguage : "en"
}


// Recives the initial state and an action
export const reducer =(state : State ,action: Action): State=>{
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
        if (action.payload===state.toLanguage) return state
        return {...state,fromLanguage: action.payload}
    }

    if (type==='SET_TO_LANGUAGE') {
        if (action.payload===state.fromLanguage) return state
        return {...state,toLanguage: action.payload}
    }

    return state
}

export const useTranslate = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const {inputText,outputText,fromLanguage,toLanguage}= state
    

    // Functions that update the sate
    const setInputText =(payload: string)=> dispatch({type:"SET_INPUT_TEXT",payload}) 
    const setOutputText =(payload: string)=> dispatch({type:"SET_OUTPUT_TEXT",payload}) 
    const switchLanguages =()=> dispatch({type:"SWITCH_LANGUAGES"}) 
    const setFromLanguage = (payload: FromLangauge)=> dispatch({type:"SET_FROM_LANGUAGE" ,payload})
    const setToLanguage = (payload: Language)=> dispatch({type:"SET_TO_LANGUAGE" ,payload})
  
  
    return {inputText ,outputText,fromLanguage,toLanguage,setInputText,setOutputText,switchLanguages,setFromLanguage,setToLanguage}
}