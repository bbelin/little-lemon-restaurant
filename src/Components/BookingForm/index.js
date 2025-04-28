// Components
import { Button } from '../Button'

// Styles
import './BookingForm.css'

export const BookingForm = ({ reservationData, onFieldChange, availableTimes, onDateChange, submitForm, occasions, formErrors }) => {

  const submitHandler = e => {
    e.preventDefault()
    submitForm()
  }

  return (
    <div className='grid-container booking-form'>
      <div className='desk-col-3'></div>
      <div className='desk-col-6 form'>
        <h2 id='booking-form-heading'>Reserve a table</h2>
        <form onSubmit={submitHandler}>
          <div className='form-item date'>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={reservationData.date} onChange={e => onDateChange(e)} />
            {formErrors.date && <p className='error-message'>{formErrors.date}</p>}
          </div>
          <div className='form-item time'>
            <label htmlFor='res-time'>Please choose time</label>
            <select id='res-time' value={reservationData.time} onChange={e => onFieldChange(e, 'time')}>
              {availableTimes.map((time, idx) => <option key={idx + 1}>{time}</option>)}
            </select>
            {formErrors.time && <p className='error-message'>{formErrors.time}</p>}
          </div>
          <div className='form-item guests'>
            <label htmlFor='res-guests'>Number of guests</label>
            <input type='number' placeholder='1' min='1' id='res-guests' value={reservationData.guests} onChange={e => onFieldChange(e, 'guests')} />
            {formErrors.guests && <p className='error-message'>{formErrors.guests}</p>}
          </div>
          <div className='form-item occasion'>
            <label htmlFor='res-occasion'>Choose occasion</label>
            <select id='res-occasion' value={reservationData.occasion} onChange={e => onFieldChange(e, 'occasion')}>
              {occasions.map((occasion, idx) => <option key={idx}>{occasion}</option>)}
            </select>
            {formErrors.occasion && <p className='error-message'>{formErrors.occasion}</p>}
          </div>
          <Button type='submit'>Make Your reservation</Button>
        </form>
      </div>
    </div>
  )
}
