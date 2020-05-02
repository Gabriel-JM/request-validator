const RequestValidator = require('../../RequestValidator')

const model = { equalTo: 5 }
let requestValidator = null

describe('Equal To Method', () => {

  beforeAll(() => {
    requestValidator = new RequestValidator(model)
  })

  it(
    'It should return false when the request value is different than on model',
    () => {
      const fakeRequest = { value: 4 }
      const result = requestValidator.equalTo(model.equalTo, fakeRequest.value)

      expect(result).toBeFalsy()
    }
  )

  it(
    'It should return true when the request value is equal on model',
    () => {
      const fakeRequest = { value: 5 }
      const result = requestValidator.equalTo(model.equalTo, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )
})