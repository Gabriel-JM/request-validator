const RequestValidator = require('../../RequestValidator')

describe('Time Format Method', () => {
  let requestValidator = null

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

  it(
    'should return true when request value obey this format "hh:mm a"', () => {
      const model = { timeFormat: 'hh:mm a' }
      const fakeRequest = { value1: '11:00 AM', value2: '01:30 PM' }
      
      const result1 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value1
      )
      const result2 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value2
      )

      expect(result1).toBeTruthy()
      expect(result2).toBeTruthy()
    }
  )

  it(
    'should return false when request value disobey this format "hh:mm a"', () => {
      const model = { timeFormat: 'hh:mm a' }
      const fakeRequest = { value1: '13:00 IM', value2: '90:11 AM' }

      const result1 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value1
      )
      const result2 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value2
      )

      expect(result1).toBeFalsy()
      expect(result2).toBeFalsy()
    }
  )

  it(
    'should return true when request value obey this format "hh:mm:ss"', () => {
      const model = { timeFormat: 'hh:mm:ss' }
      const fakeRequest = { value: '11:00:10' }
      const result = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value
      )

      expect(result).toBeTruthy()
    }
  )

  it(
    'should return false when request value disobey this format "hh:mm:ss"', () => {
      const model = { timeFormat: 'hh:mm:ss' }
      const fakeRequest = { value: '13:00:78' }
      const result = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value
      )
      
      expect(result).toBeFalsy()
    }
  )

  it(
    'should return true when request value obey this format "hh:mm:ss a"', () => {
      const model = { timeFormat: 'hh:mm:ss a' }
      const fakeRequest = { value1: '11:00:45 AM', value2: '01:30:57 PM' }
      
      const result1 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value1
      )
      const result2 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value2
      )

      expect(result1).toBeTruthy()
      expect(result2).toBeTruthy()
    }
  )

  it(
    'should return false when request value disobey this format "hh:mm:ss a"', () => {
      const model = { timeFormat: 'hh:mm:ss a' }
      const fakeRequest = { value1: '13:00 IM', value2: '90:11:89 AM' }

      const result1 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value1
      )
      const result2 = requestValidator.timeFormat(
        model.timeFormat, fakeRequest.value2
      )

      expect(result1).toBeFalsy()
      expect(result2).toBeFalsy()
    }
  )

})