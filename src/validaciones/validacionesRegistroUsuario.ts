export const validarRUT = (value: string) => {
  if (!value) {
    return "El RUN es obligatorio";
  }

  const rut = value.trim().toLowerCase();

  // ❌ No permitir puntos ni guión
  if (rut.includes(".") || rut.includes("-")) {
    return "El RUN no debe contener puntos ni guión";
  }

  // ❌ Largo inválido
  if (rut.length < 8) {
    return "El RUN debe tener al menos 8 caracteres";
  }

  if (rut.length > 9) {
    return "El RUN no puede tener más de 9 caracteres";
  }

  // ❌ Formato general
  if (!/^\d{7,8}[0-9k]$/.test(rut)) {
    return "Formato de RUN inválido";
  }

  // ========================
  // Validación dígito verificador
  // ========================
  const cuerpo = rut.slice(0, -1);
  const dv = rut.slice(-1);

  let suma = 0;
  let multiplo = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * multiplo;
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }

  const dvEsperado = 11 - (suma % 11);
  const dvCalculado =
    dvEsperado === 11 ? "0" :
    dvEsperado === 10 ? "k" :
    dvEsperado.toString();

  if (dv !== dvCalculado) {
    return "RUN inválido";
  }

  return true; // ✅ válido
};

export const validarCorreo = (value: string) => {
  const correo = value.trim().toLowerCase();
  const dominiosValidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  return (
    dominiosValidos.some((dominio) => correo.endsWith(dominio)) ||
    "Correo inválido"
  );
};
