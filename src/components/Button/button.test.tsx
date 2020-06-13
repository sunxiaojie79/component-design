import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

describe('test Button component', () => { 
  it('should render the correct default button', () => { 
    const wraper = render(<Button>nice</Button>)
    const element = wraper.getByText('nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
})
