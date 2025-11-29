import { describe, expect, test } from 'vitest'
import { 
    getProductos
} from '../accionesProductos'
import { peliculas } from '../datosProductos'

describe('accionesProductos.ts Tests', () => {

    test('getProductos debe retornar todas las películas', () => {
        const productos = getProductos()
        expect(productos.length).toBe(peliculas.length)
        expect(productos).toEqual(peliculas)
    })
})
