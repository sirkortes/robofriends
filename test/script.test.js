const googleSearch = require('./script')

/* you wouldn't import db here, you'd mock it */
dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com']

it('this is a test', () => {
  expect('hello').toBe('hello')
})

it('is searching google', () => {
  expect(googleSearch('testest', dbMock)).toEqual([])
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
})
