import RequestValidator from '../../RequestValidator'

describe('Min Value Method', () => {
  const model = { minValue: 5 }
  const requestValidator = new RequestValidator(model)

  it(
    'It should return false when request value is less than on model', () => {
      const fakeRequest = { value: 4 }
      const result = requestValidator.minValue(model.minValue, fakeRequest.value)

      expect(result).toBe(false)
    }
  )

  it(
    'It should return true when request value is greater than on model', () => {
      const fakeRequest = { value: 6 }
      const result = requestValidator.minValue(model.minValue, fakeRequest.value)

      expect(result).toBe(true)
    }
  )

  it(
    'It should return true when request value is equal to the model\'s value', () => {
      const fakeRequest = { value: 5 }
      const result = requestValidator.minValue(model.minValue, fakeRequest.value)

      expect(result).toBe(true)
    }
  )

})