import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import 'tachyons'
import './index.css'
import { searchRobots, requestRobots } from './reducers.js'
import App from './containers/App.js'
import registerServiceWorker from './registerServiceWorker'

const logger = createLogger()
const rootReducer = combineReducers({ requestRobots, searchRobots })
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// Custom Local Service Worker ( not available for dev env unless diff name )
registerServiceWorker()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
