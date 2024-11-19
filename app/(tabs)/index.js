import { Screen } from "../../components/Screen";
import React from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView, //para ajustar cuando se muestra el teclado
  ScrollView,
  StyleSheet,
  Platform,
  View,
} from "react-native";
import Formulario from "../../components/Formulario";
import Card from "../../components/Card";
export default function Registro() {
  return (
    <Screen>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          //si es Ios se agrega padding si es android heigh
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={50} // espacio entre el teclado y parte del componente
        >
          <View style={styles.innerContainer}>
            {/* //controla como se comporta el scrollview cuando se pulsa contenido en
          otra area */}
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
            >
              <Card style={styles.card}>
                <Formulario />
              </Card>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
