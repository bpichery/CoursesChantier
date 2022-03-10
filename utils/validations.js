const required = (propertyType) => { 
    return v => v && v.length > 0 || `Un ${propertyType} est requis`
  }
  const minLength = (propertyType, minLength) => {
    return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength} characters`
  }
  const maxLength = (propertyType, maxLength) => {
    return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`
  }
  
  
  export default {
    required,
    minLength,
    maxLength
  } 