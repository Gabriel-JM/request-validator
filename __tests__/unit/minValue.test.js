const RequestValidator = require('../../RequestValidator')

const model = { minValue: 5 }
let requestValidator = null

describe('Min Value Method', () => {
  
  beforeAll(() => {
    requestValidator = new RequestValidator(model)
  })

  it(
    'It should return false when request value is less than on model', () => {
      const fakeRequest = { value: 4 }
      const result = requestValidator.minValue(model.minValue, fakeRequest.value)

      expect(result).toBeFalsy()
    }
  )

  it(
    'It should return true when request value is greater than on model', () => {
      const fakeRequest = { value: 6 }
      const result = requestValidator.minValue(model.minValue, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

  it(
    'It should return true when request value is equal to the model\'s value', () => {
      const fakeRequest = { value: 5 }
      const result = requestValidator.minValue(model.minValue, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

})