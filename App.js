import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#0D0D0D" barStyle="light-content" translucent={false}/>
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
