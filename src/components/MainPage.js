// import React, { useState, useEffect } from "react";
import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css'

function MainPage({ isPending, error, robots, searchField }) {
  const filterRobots = () =>
    robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )

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
          <CardList robots={filterRobots()} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default MainPage
