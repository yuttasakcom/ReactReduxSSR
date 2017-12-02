import { FETCH_CURRENT_USER } from '@/actions'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.playload.data || false
    default:
      return state
  }
}