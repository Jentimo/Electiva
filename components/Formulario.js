//Formulario de Registro
import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import useForm from "../hooks/useForm"; //el hook de la logica
import InputField from "./InputField"; //Inputs
import CustomButton from "./CustomButton"; //boton personalizado
import axios from "axios"; //esto maneja el fecht de datos
import { useRouter } from "expo-router"; // Importar el router
const Formulario = () => {
  //iniciamos el router que nos redirige a la pagina
  const router = useRouter();
  //reglas de validacion
  //Estas reglas son los criterios de validacion que queremos que tenga este formulario
  //la razon por la cual lo hice asi fue buscando recomendaciones en cuanto a la reutilizacion
  //de codigo vi esta solucion que me permitiria usar el hook en otros formularios 
  // e incluso escalarlo de una manera mas sencilla
  const validationRules = {
    nombre: [(value) => (!value ? "El nombre es obligatorio." : undefined)],
    apellido: [(value) => (!value ? "El apellido es obligatorio." : undefined)],
    cedula: [
      (value) => (!value ? "La Cedula es obligatoria." : undefined),
      (value) =>
        value.length < 6 ? "La Cedula debe tener mínimo 6 dígitos." : undefined,
    ],
    correo: [
      (value) => (!value ? "El correo electrónico es obligatorio." : undefined),
      (value) =>
        !/\S+@\S+\.\S+/.test(value)
          ? "El correo electrónico no es válido."
          : undefined,
    ],
    contrasena: [
      (value) => (!value ? "La contraseña es obligatoria." : undefined),
      (value) =>
        value.length < 6
          ? "La contraseña debe tener al menos 6 caracteres."
          : undefined,
    ],
    contrasenaC: [
      (value) =>
        value !== values.contrasena
          ? "Las contraseñas no coinciden."
          : undefined,
    ],
  };
  //pasamos los valores del formulario junto con el validationRules
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      nombre: "",
      apellido: "",
      correo: "",
      cedula: "",
      contrasena: "",
      contrasenaC: "",
    },
    validationRules
  );
  //funcion que se ejecuta cuando se envia el formulario
  const onSubmit = async (formValues) => {
    try {
      //como es simulacion usamos JsonPlaceHolder para simular el exito del envio
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formValues
      );
      //capturamos los datos para ayudar a la simulacion
      const userData = JSON.stringify(response.data);
      //Alerta para confirmar
      Alert.alert(
        "Éxito",
        "Datos enviados correctamente: " + JSON.stringify(response.data),
        [
          {
            text: "OK",
            //una vez presionado ok mediante el push nos redirigimos a la pagina
            // de perfil y le mandamos como parametros locales los datos Json que recibimos
            onPress: () => {
              router.push({ pathname: "/profile", params: { userData } });
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        "Error",
        "Hubo un problema al enviar los datos: " + error.message
      );
    }
  };

  return (
    <View style={styles.formContainer}>
      {/* //Utilizamos el componente InputField que es personalizado */}

      <InputField
        label="Nombre:"
        value={values.nombre}
        onChangeText={handleChange("nombre")}
        placeholder="Ingresa tu nombre"
        error={errors.nombre}
      />
      <InputField
        label="Apellido:"
        value={values.apellido}
        onChangeText={handleChange("apellido")}
        placeholder="Ingresa tu Apellido"
        error={errors.apellido}
      />
      <InputField
        label="Correo Electrónico:"
        value={values.correo}
        onChangeText={handleChange("correo")}
        placeholder="Ingresa tu correo electrónico"
        keyboardType="email-address"
        error={errors.correo}
      />
      <InputField
        label="Cédula:"
        value={values.cedula}
        //pasamos el parametro true a handlechange para detonar que es numerico como
        //se puede obserar en el hook
        onChangeText={handleChange("cedula", true)}
        placeholder="Ingresa tu cédula solo números"
        keyboardType="numeric"
        error={errors.cedula}
      />
      <InputField
        label="Contraseña:"
        value={values.contrasena}
        onChangeText={handleChange("contrasena")}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        error={errors.contrasena}
        //pasamos el isPassword true para indicar que es un campo de contraseña
        isPassword={true}
      />
      <InputField
        label="Confirmar Contraseña:"
        value={values.contrasenaC}
        onChangeText={handleChange("contrasenaC")}
        placeholder="Confirma Contraseña"
        secureTextEntry
        error={errors.contrasenaC}
        isPassword={true}
      />
      <CustomButton
        title="Enviar"
        onPress={handleSubmit(onSubmit)}
        style={styles.customButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
    marginTop: 20,
  },
  customButton: {
    backgroundColor: "#28a745",
    marginTop: 10,
  },
});

export default Formulario;
