import { useState, useReducer } from 'react'
import { fetchAPI } from '../utils/fetchAPI'

// Components
import { Main } from '../Components/Main'
import { BookingForm } from '../Components/BookingForm'
import { Footer } from '../Components/Footer'

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

export const Reservations = () => {
  const tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const day = tomorrowsDate.getDate()
  const month = tomorrowsDate.getMonth() + 1
  const year = tomorrowsDate.getFullYear()
  const initialDate = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
  const [availableTimes, dispatch] = useReducer(updateTimes, initialDate, initializeTimes)
  const [reservationData, setReservationData] = useState({
    date: initialDate,
    time: availableTimes[0],
    guests: '2',
    occasion: 'Birthday'
  })

  const onFieldChange = (e, field) => {
    e.preventDefault()
    setReservationData(prevState => ({
      ...prevState,
      [field]: e.target.value
    }))
  }

  const onDateChange = e => {
    dispatch({ type: 'update_times', payload: { value: e.target.value } })
    onFieldChange(e, 'date')
  }

  // useEffect(() => {
  //   console.log(reservationData.date)
  //   const result = fetchAPI(new Date(reservationData.date))
  // }, [])

  return (
    <>
      <Main>
        <BookingForm
          reservationData={reservationData}
          onFieldChange={onFieldChange}
          availableTimes={availableTimes}
          onDateChange={onDateChange}
        />
      </Main>
      <Footer />
    </>
  )
}