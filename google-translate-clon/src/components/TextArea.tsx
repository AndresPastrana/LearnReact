import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

type Props={type: SectionType.To ,value:string, hanldeChange:(payload: string)=>void, loading:Boolean}|
           {type: SectionType.From ,value:string, hanldeChange:(payload: string)=>void}
           

export function TextArea({type,value,hanldeChange,loading,...rest}: Props){
   return  <Form.Group
   className="mb-3 mt-3 p-0"
   controlId="exampleForm.ControlTextarea1"
 >
   <Form.Control
     as="textarea"
     placeholder={(type===SectionType.To && loading) ? "Loading...." :""}
     value={value}
     onChange={({ target }) => hanldeChange(target.value)}
     disabled={type===SectionType.To}
     rows={5}
     {...rest}
   />
   <Form.Label className="ml-auto  mt-3 text-secondary">
     Text to translate here
   </Form.Label>
 </Form.Group>
}