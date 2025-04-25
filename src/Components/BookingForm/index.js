// Styles
import './BookingForm.css'

export const BookingForm = ({ reservationData, onFieldChange, availableTimes, onDateChange }) => {

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div className='grid-container booking-form'>
      <div className='desk-col-3'></div>
      <div className='desk-col-6 form'>
        <h2 id='booking-form-heading'>Reserve a table</h2>
        <form onSubmit={submitHandler}>
          <div className='form-item'>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={reservationData.date} onChange={e => onDateChange(e)} />
          </div>
          <div className='form-item'>
            <label htmlFor='res-time'>Choose time</label>
            <select id='res-time' value={reservationData.time} onChange={e => onFieldChange(e, 'time')}>
              {availableTimes.map((time, idx) => <option value={time} key={idx}>{time}</option>)}
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
