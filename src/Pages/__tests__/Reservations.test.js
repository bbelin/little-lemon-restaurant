import { initializeTimes, updateTimes } from '../Reservations'

test('initializeTimes returns the correct initial times', () => {
  expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns updated times for "update_times" action', () => {
  const result = updateTimes([], { type: 'update_times' });
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns current state for unknown action', () => {
  const result = updateTimes(['existing time'], { type: 'unknown_action' });
  expect(result).toEqual(['existing time']);
});
