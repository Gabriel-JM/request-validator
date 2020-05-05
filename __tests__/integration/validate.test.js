const RequestValidator = require('../../RequestValidator')

describe('Validate Method', () => {
  describe('should return a message of invalid request when', () => {
    const model = {
      name: { type: 'string' },
      age: { type: 'number' }
    }
    const requestValidator = new RequestValidator(model)

    it('request disobey model required fields', () => {
      const fakeRequest = { name: 'Jonh' }
      const message = requestValidator.validate(fakeRequest)

      expect(message).toStrictEqual({
        message: 'Request don\'t obey to the model requirement.',
        valid: false
      })
    })

    it('request has more properties than on model', () => {
      const fakeRequest = {
        name: 'Jonh',
        age: 10,
        heigth: 1.76
      }

      const message = requestValidator.validate(fakeRequest)

      expect(message).toStrictEqual({
        message: 'Request has more properties then model.',
        valid: false
      })
    })

    it('request didn\'t pass on all validations', () => {
      const fakeRequest = {
        name: 'Jonh',
        age: '100'
      }

      const message = requestValidator.validate(fakeRequest)

      expect(message).toStrictEqual({
        message: 'Request didn\'t pass on age field type validation.',
        valid: false
      })
    })

    it('request has the optional field and didn\'t pass on its validations', () => {
      const model = {
        name: {
          type: 'string',
          maxLength: 30
        },
        age: {
          type: 'number',
          valueBetween: [1, 100]
        },
        favoriteColor: {
          type: 'string',
          optional: true
        }
      }
      const requestValidator = new RequestValidator(model)
      const fakeRequest = {
        name: 'Gabriel',
        age: 20,
        favoriteColor: 100
      }
  
      const message = requestValidator.validate(fakeRequest)
  
      expect(message).toStrictEqual({
        message: 'Request didn\'t pass on favoriteColor field type validation.',
        valid: false
      })  
    })

  })

  it('should return a valid message when request pass on all validations', () => {
    const model = {
      name: {
        type: 'string',
        maxLength: 30
      },
      age: {
        type: 'number',
        valueBetween: [1, 100]
      },
      favoriteColor: {
        type: 'string',
        optional: true
      }
    }
    const requestValidator = new RequestValidator(model)
    const fakeRequest = {
      name: 'Gabriel',
      age: 20
    }

    const message = requestValidator.validate(fakeRequest)

    expect(message).toStrictEqual({
      message: 'Ok',
      valid: true
    })
  })

})