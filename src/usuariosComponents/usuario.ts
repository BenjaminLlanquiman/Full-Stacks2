export interface Usuario {
  id?: number; // opcional si tu backend lo asigna
  run: string;
  nombre: string;
  apellidos: string;
  correo: string;
  password: string;
  regiones: string;
  fechaNacimiento: string;
  telefono: string;
}
