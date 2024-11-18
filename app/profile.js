// app/profile/ProfileScreen.tsx

import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
export default function ProfileScreen() {
    const { userData } = useLocalSearchParams();
    console.log(userData);
    const Data=JSON.parse(userData);
  return (
    <>
      <Stack.Screen options={{ title: 'Perfil' }} />
      <View style={styles.container}>
        <View style={{ padding: 20 }}>
          <Text>Nombre: {Data.nombre}</Text>
          <Text>Cédula: {Data.cedula}</Text>
          <Text>Correo: {Data.correo}</Text>
          <Text>ID: {Data.id}</Text>
        </View>
        
        <Link href="/" style={styles.button}>
          Volver al formulario de Registro
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: 20,
  },
});