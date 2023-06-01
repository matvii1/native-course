import { FlatList, StyleSheet } from 'react-native'
import { useItemContext } from '../contexts/itemProvider'
import ListItem from './ListItem'

const List = () => {
  const { items } = useItemContext()

  return (
    <FlatList
      style={styles.list}
      data={items}
      renderItem={({ item }) => <ListItem item={item} />}
    />
  )
}

const styles = StyleSheet.create({
  list: {},
})

export default List
