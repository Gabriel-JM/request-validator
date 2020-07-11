import RequestValidator from '../../RequestValidator'

describe('Create Validation Object', () => {
  test(
    `should create a validation object, with at least one property and all properties value
    should be an array`,
    () => {
      const model = {
        name: {
          type: 'string',
          maxLength: 2
        },
        age: {}
      }

      const requestValidator = new RequestValidator(model)
      const objectResult = requestValidator.createValidationObject()

      expect(objectResult).toHaveProperty('name', ['type', 'maxLength'])
      expect(objectResult).toHaveProperty('age', [])
    }
  )
})