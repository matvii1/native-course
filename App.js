import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/List'
import ItemProvider from './contexts/itemProvider'
import 'react-native-get-random-values'

const App = () => {
  return (
    <ItemProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <Form />
        <List />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ItemProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
})

export default App
