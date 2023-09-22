import React from 'react'
import { Form } from 'react-bootstrap'

const Select = ({options,onSelect,selected}) => {
  return <Form.Select aria-label="Default select example" onChange={({target})=> onSelect(target.value)
  }>
        {options.map((arr :[])=>{
          const [value='',text ='']= arr;
          return <option selected={selected===value} value={value}>{text.toUpperCase()}</option>
        })}
     </Form.Select>
}

export default Select