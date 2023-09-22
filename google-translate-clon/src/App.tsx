import { Col, Row, Form } from "react-bootstrap";
import Button from "./components/Button";
import { SwitchIcon } from "./components/Icons";
import Select from "./components/Select";
import { SUPPORTED_LANGUAGES } from "./const";
import { useTranslate } from "./hooks/useTranslate";

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
    setToLanguage
  } = useTranslate();

  
  return (
    <div
      className="m-auto"
      style={{
        maxWidth: "1280px",
      }}
    >
      <Row className="fluid p-1 mt-5">
        <Col className="col-5">
          <Row>
            <Select options={Object.entries(SUPPORTED_LANGUAGES)} onSelect={setFromLanguage} selected={fromLanguage}/>
          </Row>
          <Row>
            {/*Input Text  */}
            <Form.Group  className="mb-3 mt-3 p-0"controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" value={inputText} onChange={({target})=> setInputText(target.value)} rows={5} />
              <Form.Label className="ml-auto  mt-3 text-secondary">Text to translate here</Form.Label>
            </Form.Group>
          </Row>
        </Col>
        <Col className="col-2 d-flex justify-content-center mb-auto">
          <Button Icon={SwitchIcon} onClick={switchLanguages} />
        </Col>
        <Col className="col-5">
          {/* Select To Language */}

          <Row>
            <Select options={Object.entries(SUPPORTED_LANGUAGES)} onSelect={setToLanguage} selected={toLanguage}/>
          </Row>
          <Row>
            {/*Output Text  */}
            <Form.Group  className="mb-3 mt-3 p-0"controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" disabled={true} rows={5} />
              <Form.Label className="ml-auto  mt-3 text-secondary">Translated text here</Form.Label>
            </Form.Group>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default App;
