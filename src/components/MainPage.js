// import React, { useState, useEffect } from "react";
import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css'

function MainPage({ isPending, error, filteredRobots }) {
  return isPending ? (
    <h1 className='tc f2'>Loading...</h1>
  ) : !!error ? (
    <div className='tc'>
      <h1 className='tc f2'>Error</h1>
      <p>{error}</p>
    </div>
  ) : (
    <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default MainPage
