export const validarRUT = (value: string) => {
    // Regex para validar el RUT
    const regex = /^[1-9]{7,}(k|[1-9])$/i;

    // Mensaje de error si contiene puntos o guiones
    if (/\./.test(value) || /-/.test(value)) {
        //return "El RUT no debe contener puntos ni guiones"; 
        return false;
    }

    // Mensaje de error para el formato adicional
    if (!regex.test(value)) {
        return false;
    }
    return true; // Si todo es correcto, devolver true
}

export const validarCorreo = (value: string) => {
    value = value.trim();
    value = value.toLowerCase();
    const dominiosValidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

    return dominiosValidos.some(dominio => value.includes(dominio));
}
