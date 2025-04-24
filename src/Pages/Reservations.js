import { useState, useReducer } from 'react'

// Components
import { Main } from '../Components/Main'
import { BookingForm } from '../Components/BookingForm'
import { Footer } from '../Components/Footer'

export const Reservations = () => {
  const tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const day = tomorrowsDate.getDate()
  const month = tomorrowsDate.getMonth() + 1
  const year = tomorrowsDate.getFullYear()
  const initialDate = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
  const updateTimes = (state, action) => {
    if (action.type === 'update_times') {
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    }
  }
  const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes)
  const [reservationData, setReservationData] = useState({
    date: initialDate,
    time: '20:00',
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

  return (
    <>
      <Main>
        <BookingForm
          reservationData={reservationData}
          onFieldChange={onFieldChange}
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </Main>
      <Footer />
    </>
  )
}