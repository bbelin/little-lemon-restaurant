import { fetchAPI } from '../../utils/fetchAPI'

export const initializeTimes = (initialDate) => {
  const times = fetchAPI(new Date(initialDate))
  return ['Select time', ...times]
}

export const updateTimes = (state, action) => {
  switch(action.type) {
    case 'update_times':
      return fetchAPI(new Date(action.payload.value))
    default:
      return state
  }
}
