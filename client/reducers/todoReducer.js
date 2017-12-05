import { FETCH_TODOS } from '@/actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload.data
    default:
      return state
  }
}