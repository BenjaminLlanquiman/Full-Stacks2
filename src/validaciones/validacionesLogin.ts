
export interface LoginData {
  email: string;
  password: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
}

export function validateLogin(data: LoginData): LoginErrors {
  const errors: LoginErrors = {};

  // Validar email vacío
  if (!data.email.trim()) {
    errors.email = "El email es obligatorio";
  } else {
    // Validar formato email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = "Ingresa un email válido";
    }
  }

  // Validar contraseña vacía
  if (!data.password.trim()) {
    errors.password = "La contraseña es obligatoria";
  }

  return errors;
}
