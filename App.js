import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Botao } from './src/Botoes';

export default function App() {
  return (
    <View style={styles.container}>
      <View><Botao/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 150,
  },
});
