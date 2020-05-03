const RequestValidator = require('../../RequestValidator')

let requestValidator = null

describe('Time Format Method', () => {
  beforeAll(() => {
    requestValidator = new RequestValidator({})
  })

  it(
    'should return false when model pattern isn\'t valid', () => {
      const model = { timeFormat: 'h:m' }
      const result = requestValidator.timeFormat(model.timeFormat, '10')

      expect(result).toBeFalsy()
    }
  )

  it(
    'should return false when request value isn\'t a string', () => {
      const model = { timeFormat: 'hh:mm' }
      const fakeRequest = { value: 18 }
      const result = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value
      )

      expect(result).toBeFalsy()
    }
  )

  it(
    'should return true when request value obey this format "hh:mm"', () => {
      const model = { timeFormat: 'hh:mm' }
      const fakeRequest = { value: '12:00' }
      const result = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value
      )

      expect(result).toBeTruthy()
    }
  )

  it(
    'should return false when request value disobey time limits for this format "hh:mm"',
    () => {
      const model = { timeFormat: 'hh:mm' }
      const fakeRequest = { value: '23:89' }
      const result = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value
      )

      expect(result).toBeFalsy()
    }
  )

})