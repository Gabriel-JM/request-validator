import RequestValidator from '../../RequestValidator'

describe('Validate Required Keys Method', () => {
  it(
    'should return true when the request have all properties that aren\'t optional',
    () => {
      const model = {
        name: {
          type: 'string'
        },
        age: {
          optional: true
        }
      }
      const requestValidator = new RequestValidator(model)
      const fakeRequest = { name: 'hi' }

      const result = requestValidator.validateRequiredKeys(fakeRequest)

      expect(result).toBe(true)
    }
  )

  it(
    'should return false when the request didn\'t had all required properties',
    () => {
      const model = {
        name: {
          type: 'string'
        },
        age: {
          type: 'number'
        }
      }
      const requestValidator = new RequestValidator(model)
      const fakeRequest = { name: 'hi' }

      const result = requestValidator.validateRequiredKeys(fakeRequest)

      expect(result).toBe(false)
    }
  )
})