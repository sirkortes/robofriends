import { shallow } from 'enzyme'
import React from 'react'
import Scroll from './Scroll'

describe('Component: Scroll', () => {
  it('expect to render Scroll component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot()
  })
})
