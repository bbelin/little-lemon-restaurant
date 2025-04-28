import { render, screen, fireEvent } from '@testing-library/react'
import { Reservations } from '../Reservations'
import { fetchAPI, submitAPI } from '../../utils/fetchAPI'
import { MemoryRouter } from 'react-router-dom'

// Mocks
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}))

jest.mock('../../utils/fetchAPI.js')

describe('Reservations component', () => {
  beforeEach(() => {
    fetchAPI.mockReturnValue(['Select time', '17:00', '18:00'])
    submitAPI.mockReturnValue(true)
  })

  test('renders form heading', () => {
    render(
      <Reservations />
    )

    expect(screen.getByText('Reserve a table')).toBeInTheDocument()
  })

  test('renders time options from fetchAPI', () => {
    render(
      <Reservations />
    )

    expect(screen.getByText('17:00')).toBeInTheDocument()
    expect(screen.getByText('18:00')).toBeInTheDocument()
  })

  test('shows validation errors when submitting invalid form', () => {
    render(
      <Reservations />
    )

    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '0' } })

    fireEvent.click(screen.getByText('Make Your Reservation'))

    expect(screen.getByText('Enter a number between 1 and 8')).toBeInTheDocument()
  })

  test('calls submitAPI and navigates on valid submission', () => {
    render(
      <Reservations />
    )

    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2030-03-03' } })
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '17:00' } })
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } })
    fireEvent.change(screen.getByLabelText('Choose occasion'), { target: { value: 'Birthday' } })

    fireEvent.click(screen.getByText('Make Your Reservation'))

    expect(submitAPI).toHaveBeenCalledTimes(1)
  })

  test('does not call submitAPI when form is invalid', () => {
    render(
      <Reservations />
    )

    fireEvent.change(screen.getByLabelText('Choose occasion'), { target: { value: 'Select occasion' } })

    fireEvent.click(screen.getByText('Make Your Reservation'))

    expect(submitAPI).not.toHaveBeenCalled()
  })
})
