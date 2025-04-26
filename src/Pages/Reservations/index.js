import { useState, useReducer } from 'react'
import { submitAPI } from '../../utils/fetchAPI'
import { useNavigate } from 'react-router-dom'
import { initializeTimes, updateTimes } from './helpers'

// Components
import { Main } from '../../Components/Main'
import { BookingForm } from '../../Components/BookingForm'
import { Footer } from '../../Components/Footer'

export const Reservations = () => {
  const navigate = useNavigate()
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

  const submitForm = () => {
    console.log('here')
    const isSuccessful = submitAPI(reservationData)
    if (isSuccessful) navigate('/confirmed-booking')
  }

  return (
    <>
      <Main>
        <BookingForm
          reservationData={reservationData}
          onFieldChange={onFieldChange}
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          submitForm={submitForm}
        />
      </Main>
      <Footer />
    </>
  )
}