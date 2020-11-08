export type fieldValidatoryType = (value: string) => string | undefined 

export const required: fieldValidatoryType = (value) => {
  if (value) {
    return undefined
  }
  return 'Field is required'
}



export const maxLengthCreator = (maxLength: number): fieldValidatoryType => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`
  }
  return undefined
}