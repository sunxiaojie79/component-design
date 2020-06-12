test('test common matcher', () => { 
  expect(1 + 3).toBe(4)
  expect(2 + 2).not.toBe(3)
})

test('test to be true or false', () => { 
  expect(1).toBeTruthy()
  expect(false).toBeFalsy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('test object', () => {
  expect({ name: 'viking' }).toEqual({ name: 'viking' })
})