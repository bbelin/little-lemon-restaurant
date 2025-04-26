import { fetchAPI } from '../../utils/fetchAPI'

export const initializeTimes = (initialDate) => {
  return fetchAPI(new Date(initialDate))
}

export const updateTimes = (state, action) => {
  switch(action.type) {
    case 'update_times':
      return fetchAPI(new Date(action.payload.value))
    default:
      return state
  }
}
