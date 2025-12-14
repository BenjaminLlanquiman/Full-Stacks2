export interface Producto {
    id?: number; // opcional si tu backend lo asigna
    codigo: string;
    nombreProducto: string;
    descripcion: string;
    precio: number;
    stockCritico: number;
    stock: number;
    categoria: string;
    imgUrl?: string;
}