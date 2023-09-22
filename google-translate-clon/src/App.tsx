import { useTranslate } from "./hooks/useTranslate"


const App = () => {
   const {inputText,outputText,fromLanguage,toLanguage,setInputText,setOutputText,switchLanguages} = useTranslate()
 
    return (
    <div>
        <form>
            <div>
                {fromLanguage}
            </div>
             <input type="text" value={inputText} onChange={({target})=>setInputText(target.value)}/>
        </form>

        <button disabled={fromLanguage==='auto'} onClick={switchLanguages}>SWITCH</button>

        <form>
            <div>
                {toLanguage}
            </div>
             <input type="text" value={outputText}/>
        </form>
    </div>
  )
}

export default App