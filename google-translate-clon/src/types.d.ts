import {SUPPORTED_LANGUAGES,AUTO_LANGUAGE} from './const'

type Language = keyof typeof SUPPORTED_LANGUAGES

type FromLangauge = Language | typeof AUTO_LANGUAGE

type Action = {type :"SET_INPUT_TEXT", payload: string} |
              {type :"SET_OUTPUT_TEXT", payload: string} |
              {type :"SWITCH_LANGUAGES"} |
              {type :"SET_FROM_LANGUAGE", payload: FromLangauge} |
              {type :"SET_TO_LANGUAGE", payload: Language} 
 
interface State {
    inputText :string,
    outputText:string,
    fromLanguage: FromLangauge,
    toLanguage : Language
}
