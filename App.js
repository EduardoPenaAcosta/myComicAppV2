import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

// Components
import Home from './components/Home'

// Styled components
import {Container} from "./styles/appStyles";



export default function App() {
  return (
    <Container style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#3C2C2C'
  }
})
