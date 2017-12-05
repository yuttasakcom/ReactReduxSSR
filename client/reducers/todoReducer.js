import { FETCH_TODOS, ADD_TODO, DELETE_TODO, DELETE_ALL_TODO } from '@/actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload.data
    case ADD_TODO:
      return action.payload.data
    case DELETE_TODO:
      return action.payload.data
    case DELETE_ALL_TODO:
      return action.payload.data
    default:
      return state
  }
}