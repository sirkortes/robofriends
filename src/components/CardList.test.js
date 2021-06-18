import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'

describe('Component: CardList', () => {
  it('expect to render CardList component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@email.com'
      }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
  })
})
