//Hook personalizado para la logica y gestion del formulario

import { useState } from 'react';
//vease que enviadmos los valores iniciales y mandamos las reglas de validacion
// del formulario
const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  //gestion de cambio, asi podemos permitir a la escalabilidad de Hook
  //pasamos el valor del input y un valor en el caso que sea solo numerico
  const handleChange = (name, numeric) => (text) => {
    //si es numerico mediante expresiones regulares se gestiona el valor
    if (numeric) {
      const numericText = text.replace(/[^0-9]/g, ''); // solo permite numeros
      setValues({
        ...values,
        [name]: numericText,
      });
    } else {
      //va atualizando los valores
      setValues({
        ...values,
        [name]: text,
      });
    }
    setErrors({
      ...errors,
      [name]: '', // limpia los errores cuando esta cambiando el valir
    });
  };

  const validate = () => {
    //iniciamos el objeto que contiene los errores
    const newErrors = {};
    //obtenemos el valor actual del objeto a validar
    for (const [field, rules] of Object.entries(validationRules)) {
      const value = values[field];
      //Iteramos sobre las reglas de validacion que le mandamos
      for (const rule of rules) {
        //ejecuta la regla de validacion
        const errorMessage = rule(value);
        //si hay un error en la validacion se almacena el mensaje que se paso
        if (errorMessage) {
          newErrors[field] = errorMessage;
          break; //rompe las validaciones al encontrar un error
        }
      }
    }
    setErrors(newErrors); //actualiza el estado de los errores
    //devuelve true si no hay errores y false si los hay
    return Object.keys(newErrors).length === 0;
  };
  //funcion para gestionar el submit
  const handleSubmit = (callback) => () => {
    if (validate()) {
      callback(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
