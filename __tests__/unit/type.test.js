const RequestValidator = require('../../RequestValidator')

let requestValidator =  null

describe('Type Method', () => {

  beforeAll(() => {
    requestValidator = new RequestValidator({})
  })

  it(
    'should return false when the type of request value is different than on model',
    () => {
      const model = { type: 'string' }
      const fakeRequest = { value: 1 }

      const result = requestValidator.type(model.type, fakeRequest.value)

      expect(result).toBeFalsy()
    }
  )

  it(
    'should return true, when model\'s type is array and request value too',
    () => {
      const model = { type: 'array' }
      const fakeRequest = { value: [] }

      const result = requestValidator.type(model.type, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

  it(
    'should return true, when model\'s type is object and request value too',
    () => {
      const model = { type: 'object' }
      const fakeRequest = { value: {} }

      const result = requestValidator.type(model.type, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

  it(
    'should return true, when model\'s type is number and request value too',
    () => {
      const model = { type: 'number' }
      const fakeRequest = { value: 100 }

      const result = requestValidator.type(model.type, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

  it(
    'should return true, when model\'s type is string and request value too',
    () => {
      const model = { type: 'string' }
      const fakeRequest = { value: 'hi' }

      const result = requestValidator.type(model.type, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

  it(
    'should return true, when model\'s type is boolean and request value too',
    () => {
      const model = { type: 'boolean' }
      const fakeRequest = { value: true }

      const result = requestValidator.type(model.type, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

})