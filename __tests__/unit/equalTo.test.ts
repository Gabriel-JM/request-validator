import RequestValidator from '../../RequestValidator'

describe('Equal To Method', () => {
  const model = { equalTo: 5 }
  const requestValidator = new RequestValidator(model)

  it(
    'It should return false when the request value is different than on model',
    () => {
      const fakeRequest = { value: 4 }
      const result = requestValidator.equalTo(model.equalTo, fakeRequest.value)

      expect(result).toBe(false)
    }
  )

  it(
    'It should return true when the request value is equal on model',
    () => {
      const fakeRequest = { value: 5 }
      const result = requestValidator.equalTo(model.equalTo, fakeRequest.value)

      expect(result).toBe(true)
    }
  )
})