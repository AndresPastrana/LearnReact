import { Col, Row, Form, Container } from "react-bootstrap";
import LanguageSelector from "./components/LanguageSelector";
import BTN from "./components/Button";
import { SwitchIcon } from "./components/Icons";

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
            <Form.Group
              className="mb-3 mt-3 p-0"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                value={inputText}
                onChange={({ target }) => setInputText(target.value)}
                rows={5}
              />
              <Form.Label className="ml-auto  mt-3 text-secondary">
                Text to translate here
              </Form.Label>
            </Form.Group>
          </Row>
        </Col>
        <Col className="col-2 d-flex justify-content-center mb-auto">
          <BTN
            className={fromLanguage === "auto" && "disabled"}
            Icon={SwitchIcon}
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
            <Form.Group
              className="mb-3 mt-3 p-0"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" disabled={true} rows={5} />
              <Form.Label className="ml-auto  mt-3 text-secondary">
                Translated text here
              </Form.Label>
            </Form.Group>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
