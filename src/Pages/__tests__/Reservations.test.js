import { initializeTimes, updateTimes } from '../Reservations/helpers'
import { fetchAPI } from '../../utils/fetchAPI'

jest.mock('../../utils/fetchAPI.js')

test('initializeTimes returns the correct initial times', () => {
  const mockDate = '2025-04-15'
  const mockSlots = ['17:00', '18:00']
  fetchAPI.mockReturnValue(mockSlots)

  const result = initializeTimes(mockDate)
  expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate))
  expect(result).toBe(mockSlots)
});

test('updateTimes returns updated times for "update_times" action', () => {
  const mockDate = '2025-04-15'
  const mockSlots = ['17:00', '18:00']
  fetchAPI.mockReturnValue(mockSlots)

  const result = updateTimes([], { type: 'update_times', payload: { value: mockDate } })

  expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate))
  expect(result).toBe(mockSlots)
})

test('updateTimes returns current state for unknown action', () => {
  const result = updateTimes(['existing time'], { type: 'unknown_action' })
  expect(result).toEqual(['existing time'])
});
