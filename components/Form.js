import { useState } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useItemContext } from '../contexts/itemProvider'

const Form = () => {
  const [inputText, setInputText] = useState('')
  const { createItem } = useItemContext()

  function handleSubmit() {
    if (!inputText) {
      Alert.alert('Please enter some text')

      return
    }

    createItem(inputText)

    setInputText('')
  }

  function handleChange(text) {
    setInputText(text)
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.fromHeading}>Add a product</Text>
      <TextInput
        placeholder="Add new item..."
        value={inputText}
        onSubmitEditing={handleSubmit}
        onChangeText={handleChange}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Add item</Text>
          <Icon name="plus" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: 'grey',
  },
  fromHeading: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 6,
  },
  btn: {
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
    color: 'white',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
})

export default Form
