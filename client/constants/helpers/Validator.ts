export type validator = ((v: string) => true | string)[]

type TValidationRules = {
  password: validator,
  text: validator,
  fullName: validator,
  email: validator
}

export const validationRules: TValidationRules = {
  text: [],
  fullName: [
    v => !!v || 'Full is required'
  ],
  password: [
    v => !!v || 'Password is required',
    v => (v && v.length >= 8) || 'Password must have 8+ characters',
    v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
    v => (v?.match(/([!@$%])/g) || '')?.length > 1 || 'Must have one special character [!@#$%]'
  ],
  email: [
    v => !!v || 'Email is required',
    v => /.+@.+/.test(v) || 'Enter valid email'
  ]
}

export type validateType = keyof TValidationRules
