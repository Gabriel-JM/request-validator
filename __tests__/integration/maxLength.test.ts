import RequestValidator from '../../RequestValidator'

describe('Max Length Method', () => {
  const model = { maxLength: 2 }
  const requestValidator = new RequestValidator(model)

  it(
    'should return false when the request value\'s length is greater than on model',
    () => {
      const fakeRequest = { value: 100 }
      const result = requestValidator.maxLength(model.maxLength, fakeRequest.value)

      expect(result).toBe(false)
    }
  )

  it(
    'should return true when the request value\'s length is lesser or equal than on model',
    () => {
      const fakeRequest = { equalValue: [1, 0], lesserValue: 'P' }
      const equalValueResult = requestValidator.maxLength(
        model.maxLength, fakeRequest.equalValue
      )
      const lesserValueRequest = requestValidator.maxLength(
        model.maxLength, fakeRequest.lesserValue
      )

      expect(equalValueResult).toBe(true)
      expect(lesserValueRequest).toBe(true)
    }
  )
})