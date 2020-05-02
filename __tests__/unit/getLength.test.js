const RequestValidator = require('../../RequestValidator')

const model = {}
let requestValidator = null

describe('Get Length Method', () => {

  beforeAll(() => {
    requestValidator = new RequestValidator(model)
  })

  it(
    'It should get the length number of variables of type string', () => {
      const fakeRequest = { value: 'Hi' }
      const length = requestValidator.getLength(fakeRequest.value)

      expect(length).toBe(2)
    }
  )

  it(
    'It should get the length number of variables of type number', () => {
      const fakeRequest = { value: 3 }
      const length = requestValidator.getLength(fakeRequest.value)

      expect(length).toBe(1)
    }
  )

  it(
    'It should get the length number of variables of type array', () => {
      const fakeRequest = { value: [1, 2, 3] }
      const length = requestValidator.getLength(fakeRequest.value)

      expect(length).toBe(3)
    }
  )

  it(
    'It should get the length number of variables of type object', () => {
      const fakeRequest = { value: {} }
      const length = requestValidator.getLength(fakeRequest.value)

      expect(length).toBe(0)
    }
  )

  it(
    'It shouyld return 0 when receive a non supported type', () => {
      const fakeRequest = { value: undefined }
      const length = requestValidator.getLength(fakeRequest.value)

      expect(length).toBe(0)
    }
  )

})