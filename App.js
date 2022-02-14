import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Components
import Home from './components/Home'

// Styled components
import {Container} from "./styles/appStyles";



export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}


