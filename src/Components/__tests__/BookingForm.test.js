import { render, screen } from '@testing-library/react'
import { BookingForm } from '../BookingForm'

test('Renders the heading', () => {
  const onFieldChangeFn = jest.fn()
  const dispatchFn = jest.fn()
  render(<BookingForm reservationData={{}} onFieldChange={onFieldChangeFn} availableTimes={[]} dispatch={dispatchFn} />)

  expect(screen.getByText('Reserve a table')).toBeInTheDocument()
})

test('Renders Choose date label', () => {
  const onFieldChangeFn = jest.fn()
  const dispatchFn = jest.fn()
  render(<BookingForm reservationData={{}} onFieldChange={onFieldChangeFn} availableTimes={[]} dispatch={dispatchFn} />)

  expect(screen.getByText('Choose date')).toBeInTheDocument()
})
