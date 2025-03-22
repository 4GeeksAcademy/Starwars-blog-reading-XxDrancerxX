export const initialStore = () => {
  return {
    characterData: [],
    planetsData: [],
    vehiclesData: []

  }
}

export default function storeReducer(store, action = {}) {

  if (action.type == "set_character") {
    return {
      ...store,
      characterData: action.payload

    }
  }
  if (action.type == "set_planets") {
    return {
      ...store,
      planetsData: action.payload

    }
  }

  if (action.type == "set_vehicles") {
    return {
      ...store,
      vehiclesData: action.payload

    }
  }









  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');


  }
}
