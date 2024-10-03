import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useGetDataQuery } from './services/GetApiCall';
import { fetchProducts } from './FetchProducts';
import { AppDispatch } from './redux/store';


const DemoApp = () => {
  
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(state => state);
  console.log(JSON.stringify(products));

  const { data } = useGetDataQuery();
  console.log(data);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => {
          dispatch(fetchProducts());
        }}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  customButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DemoApp;
