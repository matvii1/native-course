import { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ItemContext = createContext()
export const useItemContext = () => useContext(ItemContext)

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Water' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Meat' },
  ])

  function createItem(newItemText) {
    const item = {
      text: newItemText,
      id: uuidv4(),
    }

    setItems((prev) => [item, ...prev])
  }

  function removeItem(id) {
    setItems((prev) => {
      return prev.filter((item) => {
        return item.id !== id
      })
    })
  }

  const contextValue = { items, removeItem, createItem }

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  )
}

export default ItemProvider
