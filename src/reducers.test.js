import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import * as reducers from './reducers'

describe('searchRobots', () => {
  const initStateSearch = { searchField: '' }
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })
    ).toEqual({ searchField: 'abc' })
  })
})

describe('requestRobots', () => {
  const initStateRobots = {
    robots: [],
    error: '',
    isPending: false
  }

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
        payload: { isPending: true }
      })
    ).toEqual({ ...initStateRobots, isPending: true })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 1, name: 'Test', email: 'test@email.com' }]
      })
    ).toEqual({
      ...initStateRobots,
      robots: [{ id: 1, name: 'Test', email: 'test@email.com' }]
    })
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOOO!'
      })
    ).toEqual({
      ...initStateRobots,
      error: 'NOOOOO!'
    })
  })
})
