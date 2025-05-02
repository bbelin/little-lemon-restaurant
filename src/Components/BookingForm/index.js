// Components
import { Button } from '../Button'

// Styles
import './BookingForm.css'

export const BookingForm = ({ reservationData, onFieldChange, availableTimes, onDateChange, submitForm, occasions, formErrors, cancelHandler }) => {

  const submitHandler = e => {
    e.preventDefault()
    submitForm()
  }

  return (
    <div className='grid-container booking-form'>
      <div className='col-4 tab-col-8 desk-col-3'></div>
      <div className='col-4 tab-col-8 desk-col-6 form'>
        <h2 id='booking-form-heading'>Reserve a table</h2>
        <form onSubmit={submitHandler}>
          <div className={`form-item date ${formErrors.date ? 'error' : ''}`}>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={reservationData.date} onChange={e => onDateChange(e)} aria-label='On Click' />
            {formErrors.date && <p className='error-message'>{formErrors.date}</p>}
          </div>
          <div className={`form-item time ${formErrors.time ? 'error' : ''}`}>
            <label htmlFor='res-time'>Choose time</label>
            <select id='res-time' data-testid='res-time' value={reservationData.time} onChange={e => onFieldChange(e, 'time')} aria-label='On Click'>
              {availableTimes.map((time, idx) => <option key={idx + 1}>{time}</option>)}
            </select>
            {formErrors.time && <p className='error-message'>{formErrors.time}</p>}
          </div>
          <div className={`form-item guests ${formErrors.guests ? 'error' : ''}`}>
            <label htmlFor='res-guests'>Number of guests</label>
            <input type='number' min='0' id='res-guests' value={reservationData.guests} onChange={e => onFieldChange(e, 'guests')} aria-label='On Click' />
            {formErrors.guests && <p className='error-message'>{formErrors.guests}</p>}
          </div>
          <div className={`form-item occasion ${formErrors.occasion ? 'error' : ''}`}>
            <label htmlFor='res-occasion'>Choose occasion</label>
            <select id='res-occasion' value={reservationData.occasion} onChange={e => onFieldChange(e, 'occasion')} aria-label='On Click'>
              {occasions.map((occasion, idx) => <option key={idx}>{occasion}</option>)}
            </select>
            {formErrors.occasion && <p className='error-message'>{formErrors.occasion}</p>}
          </div>
          <Button type='submit'>Make Your Reservation</Button>
          <br />
          <Button classes='secondary small' type='button' navigateTo='/'>Cancel</Button>
        </form>
      </div>
    </div>
  )
}
