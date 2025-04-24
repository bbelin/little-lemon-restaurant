import { useState } from 'react'

// Styles
import './BookingForm.css'

export const BookingForm = () => {
  const tomorrowsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const day = tomorrowsDate.getDate()
  const month = tomorrowsDate.getMonth() + 1
  const year = tomorrowsDate.getFullYear()
  const initialDate = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
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

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div className='grid-container booking-form'>
      <div className='desk-col-3'></div>
      <div className='desk-col-6 form'>
        <h2>Reserve a table</h2>
        <form submit={e => submitHandler(e)}>
          <div className='form-item'>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={reservationData.date} onChange={e => onFieldChange(e, 'date')} />
          </div>
          <div className='form-item'>
            <label htmlFor='res-time'>Choose time</label>
            <select id='res-time' value={reservationData.time} onChange={e => onFieldChange(e, 'time')}>
              {availableTimes.map(time => <option value={time}>{time}</option>)}
            </select>
          </div>
          <div className='form-item'>
            <label htmlFor='res-guests'>Number of guests</label>
            <input type='number' placeholder='1' min='1' max='10' id='res-guests' value={reservationData.guests} onChange={e => onFieldChange(e, 'guests')} />
          </div>
          <div className='form-item'>
            <label htmlFor='res-occasion'>Occasion</label>
            <select id='res-occasion' value={reservationData.occasion} onChange={e => onFieldChange(e, 'occasion')}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <button type='submit'>Make Your reservation</button>
        </form>
      </div>
    </div>
  )
}
