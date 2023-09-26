import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import {LanguageSelector,TextArea,BTN,Icons} from './components/index'
import { useDefer } from "./hooks/useDefer";
import { useTranslate } from "./hooks/useTranslate";
import { getTranslatedText } from "./services/translate";
// import { getTranslatedText } from "./services/translate";
import { SectionType } from "./types.d";

const App = () => {

  const {
    inputText,
    outputText,
    fromLanguage,
    toLanguage,
    setInputText,
    setOutputText,
    switchLanguages,
    setFromLanguage,
    setToLanguage,
    loading,
    setLoading
  } = useTranslate();
  const inputTextDefer = useDefer(inputText,1000)
  
   
  useEffect(() => {
        let abortController: AbortController ;  
     // If no esta vacio
     if (inputText) {
      abortController = new AbortController()
      const signal = abortController.signal   
      getTranslatedText({fromLanguage,toLanguage,inputText},signal)
     .then((text)=>{
        setOutputText(text)
      })
      .catch((err)=>{
        setOutputText("Error translating text")
        console.log(err);
        
      }).finally( ()=>{
        setLoading(false)
      })
        
     }

  
    return () => {
      if (abortController)abortController.abort() 
    }
  }, [inputTextDefer,fromLanguage,toLanguage])
  
  return (
    <Container
      fluid
      className="m-auto mt-5"
      style={{
        maxWidth: "1280px",
      }}
    >
      <Row className="fluid p-1">
        <Col className="col-5">
          <Row>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
          </Row>
          <Row>
            {/*Input Text  */}
            <TextArea type={SectionType.From} value={inputText} hanldeChange={setInputText}/>
          </Row>
        </Col>
        <Col className="col-2 d-flex justify-content-center mb-auto">
          <BTN
            className={fromLanguage === "auto" && "disabled"}
            Icon={Icons.SwitchIcon}
            onClick={switchLanguages}
          />
        </Col>
        <Col className="col-5">
          {/* Select To Language */}

          <Row>
          <LanguageSelector  type={SectionType.To} value={toLanguage} onChange={setToLanguage}/>
          </Row>
          <Row>
            {/*Output Text  */}
           <TextArea value={outputText} type={SectionType.To} hanldeChange={setOutputText} loading={loading}/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
