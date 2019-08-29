export default (state = { count: 0 }, action) => {
  let count = state.count
  switch (action.type) {
    case 'INCREMENT':
      return { count: count + action.count }
    case 'DECREMENT':
      return { count: count + action.count }
    default:
      return state
  }
}
