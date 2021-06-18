import { shallow } from 'enzyme'
import React from 'react'
import SearchBox from './SearchBox'
import { Provider } from 'react-redux'

const store = {
  searchField: '',
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn()
}

describe('Component: SearchBox', () => {
  it('expect to render SearchBox component', () => {
    expect(
      shallow(
        <Provider store={store}>
          <SearchBox />
        </Provider>
      )
    ).toMatchSnapshot()
  })
})
