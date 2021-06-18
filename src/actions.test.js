import * as actions from './actions'
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING } from './constants'

import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureStore([thunkMiddleware])

it('should create an action to search robots', () => {
  const text = 'woo'
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }

  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots API', () => {
  const store = mockStore()
  store.dispatch(actions.requestRobots())
  const action = store.getActions()
  console.log('action', action)
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  }
  expect(action[0]).toEqual(expectedAction)
})
