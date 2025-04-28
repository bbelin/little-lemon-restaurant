import { render, screen, fireEvent } from '@testing-library/react'
import { BookingForm } from '../BookingForm'

jest.mock('react-router-dom')

const mockProps = {
  reservationData: {
    date: '2025-04-28',
    time: '18:00',
    guests: '2',
    occasion: 'Birthday'
  },
  availableTimes: ['17:00', '18:00', '19:00'],
  occasions: ['Select occasion', 'Anniversary', 'Birthday'],
  onFieldChange: jest.fn(),
  onDateChange: jest.fn(),
  submitForm: jest.fn(),
  formErrors: {}
}

test('Renders the heading', () => {
  render(<BookingForm {...mockProps} />)
  expect(screen.getByText('Reserve a table')).toBeInTheDocument()
})

test('Renders Choose date label', () => {
  render(<BookingForm {...mockProps} />)
  expect(screen.getByText('Choose date')).toBeInTheDocument()
})

test('Renders all available time options', () => {
  render(<BookingForm {...mockProps} />)
  const options = screen.getByTestId('res-time')
  expect(options.length).toBe(mockProps.availableTimes.length)
  // expect(options[0]).toHaveTextContent('17:00')
})

test('Calls onDateChange when date input changes', () => {
  render(<BookingForm {...mockProps} />)
  const dateInput = screen.getByLabelText('Choose date')
  fireEvent.change(dateInput, { target: { value: '2025-04-30' } })
  expect(mockProps.onDateChange).toHaveBeenCalledTimes(1)
})

test('Calls onFieldChange when guests input changes', () => {
  render(<BookingForm {...mockProps} />)
  const guestsInput = screen.getByLabelText('Number of guests')
  fireEvent.change(guestsInput, { target: { value: '4' } })
  expect(mockProps.onFieldChange).toHaveBeenCalledWith(expect.any(Object), 'guests')
})

test('Calls submitForm when form is submitted', () => {
  render(<BookingForm {...mockProps} />)
  const submitButton = screen.getByText('Make Your Reservation')
  fireEvent.click(submitButton)
  expect(mockProps.submitForm).toHaveBeenCalledTimes(1)
})

test('Renders error message for date if provided', () => {
  const propsWithError = {
    ...mockProps,
    formErrors: { date: 'Invalid date' }
  }
  render(<BookingForm {...propsWithError} />)
  expect(screen.getByText('Invalid date')).toBeInTheDocument()
})
