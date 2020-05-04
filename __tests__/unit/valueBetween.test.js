const RequestValidator = require('../../RequestValidator')

describe('Value in Between Method', () => {
  const model = { valueBetween: [10, 20] }
  let requestValidator = null

  beforeAll(() => {
    requestValidator = new RequestValidator(model)
  })

  it(
    'should return true when request value is in between model definition',
    () => {
      const fakeRequest = { value: 15 }
      const result = requestValidator.valueBetween(model.valueBetween, fakeRequest.value)

      expect(result).toBeTruthy()
    }
  )

  it(
    'should return false when request value is greater or lesser than on model definition',
    () => {
      const fakeRequest = { greaterValue: 25, lesserValue: 8 }
      
      const greaterResult = requestValidator.valueBetween(
        model.valueBetween, fakeRequest.greaterValue
      )
      const lesserResult = requestValidator.valueBetween(
        model.valueBetween, fakeRequest.lesserValue
      )

      expect(greaterResult).toBeFalsy()
      expect(lesserResult).toBeFalsy()
    }
  )

  it(
    'should return false when the valueBetween property on model isn\'t an array',
    () => {
      const customModel = { valueBetween: 10 }
      const result = requestValidator.valueBetween(customModel.valueBetween, 0)

      expect(result).toBeFalsy()
    }
  )

})