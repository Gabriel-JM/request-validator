class RequestValidator {

  constructor(model) {
    this.modelKeys = Object.keys(model)
  }

  validate(requestContent) {
    this.requestKeys = Object.keys(requestContent)

    const requestKeysValidationResult = this.validateRequiredKeys()
    
    if(!requestKeysValidationResult) {
      return {
        message: 'Request don\'t obey to the model requirement.',
        valid: false
      }
    }

    if(this.getLength(this.modelKeys) < this.getLength(this.requestKeys)) {
      return {
        message: 'Request has more properties then model.',
        valid: false
      }
    }

    const validationObj = this.createValidationObject()

    let validationResult = {
      message: 'Ok',
      valid: true
    }

    Object.keys(validationObj).forEach(key => {
      const requestValue = requestContent[key]
      const modelKey = this.model[key]
      validationObj[key].forEach(toValidate => {
        if(toValidate in this) {
          const result = this[toValidate](modelKey[toValidate], requestValue)
          if(!result) {
            validationResult = {
              message: `Request didn't pass on ${toValidate} validation.`,
              valid: result
            }
          }
        }
      })
    })

    return validationResult
  }

  createValidationObject() {
    return this.modelKeys.reduce((acc, key) => {
      return {...acc, [key]: Object.keys(this.model[key])}
    }, {})
  }

  validateRequiredKeys() {
    const requiredKeys = this.modelKeys.filter(key => {
      const optional = this.model[key].optional || false
      return optional == false
    })

    const requiredKeysValidation = requiredKeys.every(key => {
      return this.requestKeys.includes(key)
    })

    return requiredKeysValidation
  }

  getLength(value) {
    const methods = {
      number(value) {
        return value.toString().length
      },
      string(value) {
        return value.length
      },
      object(value) {
        return Object.keys(value).length
      }
    }

    const methodName = typeof value
    return methodName in methods ? methods[methodName](value) : 0
  }

  type(expected, value) {
    return Array.isArray(value) ?
      expected === 'array' :
      expected === typeof value
  }

  maxLength(limit, value) {
    return this.getLength(value) <= limit
  }

  minLength(minimum, value) {
    return this.getLength(value) >= minimum
  }

  length(expected, value) {
    return this.getLength(value) === expected
  }

  maxValue(limit, value) {
    return value <= limit
  }

  minValue(minimum, value) {
    return value >= minimum
  }

  valueBetween(valuesToCompare, value) {
    const [minimum, maximum] = valuesToCompare
    return value >= minimum && value <= maximum
  }

  equalTo(expected, value) {
    return expected === value
  }

  timeFormat(pattern, value) {
    const patterns = {
      'hh:mm': /([0-1][0-9]|2[0-4]):[0-5][0-9]/g,
      'hh:mm:ss': /([0-1][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]/g,
    }

    const regex = patterns[pattern]
    return RegExp(regex).test(value)
  }

}

module.exports = RequestValidator