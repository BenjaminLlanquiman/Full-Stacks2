
export interface LoginData {
  correo: string;
  password: string;
}

export interface LoginErrors {
  correo?: string;
  password?: string;
}

export function validateLogin(data: LoginData): LoginErrors {
  const errors: LoginErrors = {};

  // Validar email vacío
  if (!data.correo.trim()) {
    errors.correo = "El email es obligatorio";
  } else {
    // Validar formato email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.correo)) {
      errors.correo = "Ingresa un email válido";
    }
  }

  // Validar contraseña vacía
  if (!data.password.trim()) {
    errors.password = "La contraseña es obligatoria";
  }

  return errors;
}
