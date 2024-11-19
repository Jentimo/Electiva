//card para los componenetes
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignSelf:'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 16,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    width: '90%',
  },
});

export default Card;
