// import React, { useState, useEffect } from "react";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestRobots } from '../actions'
import { useEffect } from 'react'
import MainPage from './../components/MainPage'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const onRequestRobots = () => dispatch(requestRobots())
  const { robots, isPending, error } = useSelector(
    ({ requestRobots }) => requestRobots
  )
  useEffect(() => onRequestRobots(), [])

  const searchField = useSelector(
    ({ searchRobots }) => searchRobots.searchField
  )

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <MainPage
      isPending={isPending}
      error={error}
      filteredRobots={filteredRobots}
    />
  )
}

export default App
