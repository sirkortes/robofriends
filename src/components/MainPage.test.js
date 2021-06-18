import { shallow } from 'enzyme'
import React from 'react'
import MainPage from './MainPage'

let wrapper
beforeEach(() => {
  const mockProps = {
    error: '',
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

describe('Component: MainPage', () => {
  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // it('filters robots correctly', () => {
  // const wrapdebug = wrapper.debug()
  // const wrapperfind = wrapper.find('CardList')
  // console.log('wrapdebug is [%s]: ', typeof wrapdebug, wrapdebug)
  // console.log('wrapperfind is [%s]: ', typeof wrapperfind, wrapperfind)
  // expect(wrapperfind.filterRobots([])).toEqual([])
  //
  // starting react 16+ shallow wrapper instance is null for stateless components
  // so we cant do above kind of test
  // })
})
