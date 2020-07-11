import RequestValidator from '../../RequestValidator'

describe('Min Length Method', () => {
  const model = { minLength: 3 }
  const requestValidator = new RequestValidator(model)

  it(
    'should return false when request value\'s length is lesser than on model',
    () => {
      const fakeRequest = { value: { a: 1, b: 2 } }
      const result = requestValidator.minLength(model.minLength, fakeRequest.value)

      expect(result).toBe(false)
    }
  )

  it(
    'should return true when request value\'s length is greater or equal than on model',
    () => {
      const fakeRequest = { equalValue: 100, greaterValue: 'Hello' }
      const equalValueResult = requestValidator.minLength(
        model.minLength, fakeRequest.equalValue
      )
      const greaterValueResult = requestValidator.minLength(
        model.minLength, fakeRequest.greaterValue
      )

      expect(equalValueResult).toBe(true)
      expect(greaterValueResult).toBe(true)
    }
  )
})