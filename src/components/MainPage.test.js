import { shallow } from 'enzyme'
import React from 'react'
import MainPage from './MainPage'

let wrapper
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

describe('Component: MainPage', () => {
  // it('expect to render MainPage component', () => {
  //   const mockStore = {
  //     robots: [],
  //     searchField: ''
  //   }
  //   expect(shallow(<MainPage store={mockStore} />)).toMatchSnapshot()
  // })

  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('filters robots correctly', () => {
    // expect(wrapper)
  })
})
