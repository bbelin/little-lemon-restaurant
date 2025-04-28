import { useState, useReducer } from 'react'
import { submitAPI } from '../../utils/fetchAPI'
import { useNavigate } from 'react-router-dom'
import { initializeTimes, updateTimes } from './helpers'

// Components
import { Main } from '../../Components/Main'
import { BookingForm } from '../../Components/BookingForm'
import { Footer } from '../../Components/Footer'

const occasions = ['Select occasion', 'Anniversary', 'Birthday']

export const Reservations = () => {
  const navigate = useNavigate()
  const tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const day = tomorrowsDate.getDate()
  const month = tomorrowsDate.getMonth() + 1
  const year = tomorrowsDate.getFullYear()
  const initialDate = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
  const [availableTimes, dispatch] = useReducer(updateTimes, initialDate, initializeTimes)
  const [formErrors, setFormErrors] = useState({})
  const [reservationData, setReservationData] = useState({
    date: initialDate,
    time: availableTimes[0],
    guests: '2',
    occasion: occasions[0]
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

  const validateForm = () => {
    const errors = {}
    const dateValue = new Date(reservationData.date)
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (isNaN(dateValue) || dateValue < tomorrow) {
      errors.date = 'Enter a valid date (YYYY-MM-DD) from tomorrow onwards'
    }
    if (!reservationData.time || reservationData.time === 'Select time') {
      errors.time = 'Select time'
    }
    if (reservationData.guests < 1 || reservationData.guests > 8) {
      errors.guests = 'Enter a number between 1 and 8'
    }
    if (reservationData.occasion === 'Select occasion') {
      errors.occasion = 'Select occasion'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const submitForm = () => {
    if (validateForm()) {
      const isSuccessful = submitAPI(reservationData)
      if (isSuccessful) navigate('/confirmed-booking')
    }
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
          occasions={occasions}
          formErrors={formErrors}
        />
      </Main>
      <Footer />
    </>
  )
}