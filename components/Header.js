import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping list</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
})
