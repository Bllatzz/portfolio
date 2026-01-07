// Form validators placeholder
// Add your validation functions here

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0
}

export function minLength(value: string, min: number): boolean {
  return value.length >= min
}

