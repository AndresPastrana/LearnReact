import {beforeEach, describe,expect,it,vi } from 'vitest'
import {State,Action, FromLangauge, Language} from '../src/types.d'
import {reducer} from '../src/hooks/useTranslate'
import { AUTO_LANGUAGE } from '../src/const';

// Things to check
// Handle the SetFromLanguage correctly
// Handle the SetToLanguage correctly
// Handle the Set input text correctly
// Handle the Set output text correctly
// Change the Language output text correctly
describe('Reducer used by the useTranslate() hook should work correctly', () => {
    let initialState :State ={
      fromLanguage :"auto",
      toLanguage : "en",
      inputText :"",
      outputText:""
  }; 
    const sampleText: string = "lorem isump"
 
    
  it('Shoudl return  the new state with the inputText Updated',()=>{
   const newState = reducer(initialState, {type:"SET_INPUT_TEXT" ,payload:sampleText})
   const expected : State = {...initialState,inputText :sampleText} 
   expect(JSON.stringify(newState)).toEqual(JSON.stringify(expected))
 })
  it('Shoudl return  the new state with the outputText Updated',()=>{
    const newState = reducer(initialState, {type:"SET_OUTPUT_TEXT" ,payload:sampleText})
    const expected : State = {...initialState,outputText :sampleText} 
    expect(JSON.stringify(newState)).toEqual(JSON.stringify(expected))
  })
  it('Shoudl return  the new state with the FromLanguage Updated',()=>{
    const newState = reducer(initialState, {type:"SET_FROM_LANGUAGE" ,payload:'es'})
    const expected : State = {...initialState,fromLanguage :'es'} 
    expect(JSON.stringify(newState)).toEqual(JSON.stringify(expected))
  })
  it('Shoudl return  the new state with the ToLanguage  Updated',()=>{
    const newState = reducer(initialState, {type:"SET_TO_LANGUAGE" ,payload:'es'})
    const expected : State = {...initialState,toLanguage :'es'} 
    expect(JSON.stringify(newState)).toEqual(JSON.stringify(expected))
  })
  it('Shoudl Switch Langauges',()=>{
    const from : FromLangauge='fr'
    const to : Language ='ru'
    
    // Swithc FromLangauge :fr -> ToLanguage:es
    const newState = reducer({...initialState,fromLanguage:from,toLanguage:to}, {type:"SWITCH_LANGUAGES"})
    
    //Expected value 
    const expected :State = {...initialState, fromLanguage:to ,toLanguage:from}
    expect(JSON.stringify(newState)).toEqual(JSON.stringify(expected))

    
  })
  it(`Should return the same value if FromLangauge = \'${AUTO_LANGUAGE}\'`,()=>{
    const newState = reducer(initialState, {type:"SWITCH_LANGUAGES" })
    expect(JSON.stringify(newState)).toEqual(JSON.stringify(initialState))
  })
 })