import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('first react test case', () => { 
  const wraper = render(<Button>nice</Button>)
  const element = wraper.queryByText('nice')
  expect(element).toBeTruthy()
})
