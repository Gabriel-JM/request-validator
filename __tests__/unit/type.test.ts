import RequestValidator from '../../RequestValidator'

describe('Type Method', () => {
  const requestValidator = new RequestValidator({})

  it(
    'should return false when the type of request value is different than on model',
    () => {
      const model = { type: 'string' }
      const fakeRequest = { value: 1 }

      const result = requestValidator.type(model.type, fakeRequest.value)

      expect(result).toBe(false)
    }
  )

  it(
    `should return true when model\'s type is one of:
    array, object, string, number, boolean and request value too`,
    () => {
      const modelOfArray = { type: 'array' }
      const arrayValue = []

      const typeArrayResult = requestValidator.type(
        modelOfArray.type, arrayValue
      )

      expect(typeArrayResult).toBe(true)

      const modelOfObject = { type: 'object' }
      const objectValue = {}

      const typeObjectResult = requestValidator.type(
        modelOfObject.type, objectValue
      )

      expect(typeObjectResult).toBe(true)

      const modelOfString = { type: 'string' }
      const stringValue = 'hi'

      const typeStringResult = requestValidator.type(
        modelOfString.type, stringValue
      )

      expect(typeStringResult).toBe(true)

      const modelOfNumber = { type: 'number' }
      const numberValue = 10

      const typeNumberResult = requestValidator.type(
        modelOfNumber.type, numberValue
      )

      expect(typeNumberResult).toBe(true)

      const modelOfBoolean = { type: 'boolean' }
      const booleanValue = true

      const typeBooleanResult = requestValidator.type(
        modelOfBoolean.type, booleanValue
      )

      expect(typeBooleanResult).toBe(true)
    }
  )

})