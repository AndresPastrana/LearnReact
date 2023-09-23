import { Col, Row, Container } from "react-bootstrap";
import {LanguageSelector,TextArea,BTN,Icons} from './components/index'
import { useTranslate } from "./hooks/useTranslate";
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
  } = useTranslate();

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
           <TextArea value={outputText} type={SectionType.To} hanldeChange={setOutputText}/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
