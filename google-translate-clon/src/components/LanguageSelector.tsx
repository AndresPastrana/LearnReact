import React, { FC } from "react";
import { FromLangauge, Language, SectionType } from "../types.d";
import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../const";

type Props = {type: SectionType.From , value: FromLangauge, onChange: (payload: FromLangauge)=>void }|
             {type: SectionType.To , value: Language, onChange: (payload: Language)=> void}


export const LanguageSelector: FC<Props> = ({ onChange, value,type,...rest }) => {
  const listOfLangauges = Object.entries(SUPPORTED_LANGUAGES);  

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      onChange(e.target.value as Language)
  }
  

  return (
    <Form.Select
    aria-label="Default select example"
    onChange={handleChange}
    value={value}
    {...rest}
    >
    {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>}
    {listOfLangauges.map(([key,literal])=>{
          return <option key={key} value={key}>{literal}</option>
    })}
    </Form.Select>
  
    
  );
};


