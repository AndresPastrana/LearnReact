// TODO: Should render the correct options depending of the type of the section
import { describe, it, expect, vi, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  prettyDOM,
} from "@testing-library/react";
import React from "react";
import { SectionType } from "../src/types.d";
import { useTranslate } from "../src/hooks/useTranslate";
import LanguageSelector from "../src/components/LanguageSelector";
import { SUPPORTED_LANGUAGES } from "../src/const";

describe("Language Selector Component", () => {
  const App = () => {
    const { fromLanguage, toLanguage, setFromLanguage, setToLanguage,switchLanguages } =
      useTranslate();

    return (
      <div>
        <div >
          <LanguageSelector
            value={fromLanguage}
            type={SectionType.From}
            onChange={setFromLanguage}
            data-testid='from'
          />
        </div>
          <button onClick={()=> switchLanguages()}>SWITCH</button>
        <div>
          <LanguageSelector
            value={toLanguage}
            type={SectionType.To}
            onChange={setToLanguage}
            data-testid='to'
          />
        </div>
      </div>
    );
  };

  const exctractOptions = (
    HTMLCollection: HTMLCollectionOf<HTMLOptionElement>
  ) => {
    let options: string[] = [];
    for (let i = 0; i < HTMLCollection.length; i++) {
      const element = HTMLCollection[i];
       options.push(element.textContent as string)
       
    }
    return options
    
  };
  afterEach(() => {
    cleanup();
  });

  it("Each LanguageSelector should render with the rigth options", () => {
    render(<App />);
    const fromOptionsHTML: HTMLCollectionOf<HTMLOptionElement> = screen.getByTestId("from").getElementsByTagName('option')
    const toOptionsHTML: HTMLCollectionOf<HTMLOptionElement>= screen.getByTestId("to").getElementsByTagName('option')
     
    expect(exctractOptions(fromOptionsHTML)).toStrictEqual(["Detectar Idioma",...Object.values(SUPPORTED_LANGUAGES)])
    expect(exctractOptions(toOptionsHTML)).toStrictEqual(Object.values(SUPPORTED_LANGUAGES))
    
    
  });

  it('Select a language',()=>{
    render(<App/>)
    
    const fromSelectHTML: HTMLSelectElement = screen.getByTestId("from")
    const initialSelectValue = fromSelectHTML.value
    
    //Emit change event on the select 
    const fromLan = Object.keys(SUPPORTED_LANGUAGES).find((lan)=>lan==='es')
    fireEvent.change(fromSelectHTML, {target: {value:fromLan }})
    const afterChangeValue = fromSelectHTML.value
    expect(initialSelectValue).not.toBe(afterChangeValue)
    expect(afterChangeValue).toBe(fromLan)
     

  })

  it('Switch languages',()=>{
    render(<App/>)
    
    const fromSelectHTML: HTMLSelectElement = screen.getByTestId("from")
    const toSelectHTML: HTMLSelectElement = screen.getByTestId("to")
    const switch_btnHTML = screen.getByRole('button')
  
    

    // Change the default vlaues 
    const fromLan = Object.keys(SUPPORTED_LANGUAGES).find((lan)=>lan==='es')
    const toLan =Object.keys(SUPPORTED_LANGUAGES).find((lan)=>lan==='fr')
       
  
  
    // fireEvent.change(fromSelectHTML, {target: {value:fromLan }})
    fireEvent.change(fromSelectHTML, {target: {value:fromLan }})
    fireEvent.change(toSelectHTML, {target: {value:toLan }})
    fireEvent.click(switch_btnHTML)

    // Assert
    expect(fromSelectHTML.value).toBe(toLan)
    expect(toSelectHTML.value).toBe(fromLan)


 
  })

});
