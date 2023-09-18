import { useState } from "react";

export function useForm(initValues) {
  const [formValues, setFormValues] = useState(initValues);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return [formValues, handleInputChange];
}
