const RequestValidator = require('../../RequestValidator')

describe('Min Length Method', () => {
  const model = { minLength: 3 }
  let requestValidator

  beforeAll(() => {
    requestValidator = new RequestValidator(model)
  })

  it(
    'should return false when request value\'s length is lesser than on model',
    () => {
      const fakeRequest = { value: { a: 1, b: 2 } }
      const result = requestValidator.minLength(model.minLength, fakeRequest.value)

      expect(result).toBeFalsy()
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

      expect(equalValueResult).toBeTruthy()
      expect(greaterValueResult).toBeTruthy()
    }
  )
})