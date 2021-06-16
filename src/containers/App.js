// import React, { useState, useEffect } from "react";
import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";
import { useDispatch, useSelector } from "react-redux";
import { requestRobots } from "../actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const onRequestRobots = () => dispatch(requestRobots());
  const { robots, isPending, error } = useSelector(
    ({ requestRobots }) => requestRobots
  );
  useEffect(() => onRequestRobots(), []);

  const searchField = useSelector(
    ({ searchRobots }) => searchRobots.searchField
  );

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
    <h1 className="tc f2">Loading...</h1>
  ) : !!error ? (
    <div className="tc">
      <h1 className="tc f2">Error</h1>
      <p>{error}</p>
    </div>
  ) : (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
