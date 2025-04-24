// Styles
import './BookingForm.css'

export const BookingForm = ({ reservationData, onFieldChange, availableTimes, dispatch }) => {

  const submitHandler = e => {
    e.preventDefault()
  }

  const onDateChange = e => {
    dispatch({ type: 'update_times', payload: e.target.value })
    onFieldChange(e, 'date')
  }

  return (
    <div className='grid-container booking-form'>
      <div className='desk-col-3'></div>
      <div className='desk-col-6 form'>
        <h2>Reserve a table</h2>
        <form submit={e => submitHandler(e)}>
          <div className='form-item'>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={reservationData.date} onChange={e => onDateChange(e)} />
          </div>
          <div className='form-item'>
            <label htmlFor='res-time'>Choose time</label>
            <select id='res-time' value={reservationData.time} onChange={onDateChange}>
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
