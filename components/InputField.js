//InputField que es mayormente de texto justamente
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Props para reutilizar el Input más fácil
const InputField = ({ label, value, onChangeText, placeholder, error, isPassword }) => {
  // Este isPasswordVisible es para manejar si son input de contraseña
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // State para manejar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPassword && !isPasswordVisible} 
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      {/* Este es para los mensajes de error */}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  icon: {
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default InputField;