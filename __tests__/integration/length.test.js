const RequestValidator = require('../../RequestValidator')

describe('Length Method', () => {
  const model = { length: 5 }
  let requestValidator

  beforeAll(() => {
    requestValidator = new RequestValidator(model)
  })

  it(
    'should return false when the request value\'s length is different than on model',
    () => {
      const fakeRequest = { value: 'Hi' }
      const result = requestValidator.length(model.length, fakeRequest.value)

      expect(result).toBeFalsy()
    }
  )

  it(
    'should return true when the request value\'s length is equal than on model',
    () => {
      const fakeRequest = { value: 'Hello' }
      const result = requestValidator.length(model.length, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

})