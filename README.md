# Request Validator
A simple request validator in JS.

## How to use?
It's very simple, you just need an `object` that represents the `model` to be compared, than instantiate the `RequestValidator` Object and pass the model as parameter, and finally pass the `request object` to the validate method of the RequestValidator.

#### Model example

```js
  const model = {
    id: {
      type: 'number'
    },
    name: {
      type: 'string',
      maxLength: 80
    },
    favoriteColor: {
      type: 'string',
      maxLength: 20,
      optional: true
    }
  }
```
#### Request Validator implementation example

```js
  const requestValidator = new RequestValidator(model)
  const validationResult = requestValidator.validate(IncomingRequest)
```

 **The constant `validationResult` has the following results:**
 - When request pass on validation:
  ```js
    {
      message: 'Ok',
      valid: true
    }
  ```
 - When request didn't pass on validation:
  ```js
    {
      message: 'Request didn\'t pass on {field name} field {validation name} validation.',
      valid: false
    }
  ```
  > Obs: This is only an example, the message can variate.

### Plus than the usual
I'm adding tests to the project, i created this validator to my `my-ts-node-api` project and i thinked "i can use this to train my tests", and i did it.

> To run tests: use `npm test` on terminal.
