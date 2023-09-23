import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  prettyDOM,
} from "@testing-library/react";
import {SectionType,Action} from '../src/types.d'
import {useTranslate} from '../src/hooks/useTranslate'
import {TextArea} from '../src/components/index'
describe('Text Area Component', () => { 
   
    const App = ()=>{
        const {inputText,setInputText,outputText,setOutputText} = useTranslate()
        return <div>
            {/*Input Text  */}
           <TextArea data-testid={SectionType.From} type={SectionType.From} value={inputText} hanldeChange={setInputText} />
            {/*Output Text  */}
            <TextArea data-testid={SectionType.To} value={outputText} type={SectionType.To} hanldeChange={setOutputText}/>
        </div>
    }

    afterEach(()=>{
        cleanup()
    })
   it("Should render correctly with an empty value",()=>{
    render(<App/>)
    // TODO Both text area should render with an empty value
    const fromTextArea :HTMLTextAreaElement = screen.getByTestId(SectionType.From)
    const toTextArea:HTMLTextAreaElement = screen.getByTestId(SectionType.To) 

      expect(fromTextArea.value).toBe("")
      expect(toTextArea.value).toBe("")

  
   })
   
   it("Should update the state correctly",()=>{
    render(<App/>)
    const toTranslateText ="Esto es el texto a traducir"
    const translatedText ="This is the translated text"

    // Select the TextAreas
    const fromTextArea :HTMLTextAreaElement = screen.getByTestId(SectionType.From)
    const toTextArea :HTMLTextAreaElement = screen.getByTestId(SectionType.To)

    // Change the state
    fireEvent.change(fromTextArea,{target: {value: toTranslateText}})
    fireEvent.change(toTextArea,{target: {value: translatedText}})

    // Check that we have the expected state
    expect(fromTextArea.value).toBe(toTranslateText)     
    expect(toTextArea.value).toBe(translatedText)     

   })

 })