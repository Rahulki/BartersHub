export function isValidEmail(email) {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }
  
export function isValidPassword(password) {
    return (password.length >= 8 && password.match(/[a-zA-Z]/) && password.match(/\d/) && password.match(/[!@#$%^&*()_+\\|,.<>/?]/))
  }