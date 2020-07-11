import RequestValidator from '../../RequestValidator'

describe('Max Value Method', () => {
  const model = { maxValue: 5 }
  let requestValidator = null
  
  beforeAll(() => {
    requestValidator = new RequestValidator(model)
  })

  it(
    'It should return false when request value is greater than on model', () => {
      const fakeRequest = { value: 6 }
      const result = requestValidator.maxValue(model.maxValue, fakeRequest.value)

      expect(result).toBeFalsy()
    }
  )

  it(
    'It should return true when request value is less than on model', () => {
      const fakeRequest = { value: 4 }
      const result = requestValidator.maxValue(model.maxValue, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

  it(
    'It should return true when request value is equal to the model\'s value', () => {
      const fakeRequest = { value: 5 }
      const result = requestValidator.maxValue(model.maxValue, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

})