// async tests
// - [Star Wars API](http://swapi.py4e.com/)

const fetch = require('node-fetch')

// with dependency injection
const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.py4e.com/api/people')
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.py4e.com/api/people')
  return ({ count, results } = await getRequest.json())
}

module.exports = { getPeople, getPeoplePromise }
