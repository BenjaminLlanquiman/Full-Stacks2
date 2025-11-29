import { describe, expect, test, vi } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { CarritoCompras } from './CarritoCompras'
import type { PeliculaType } from '../productosComponent/datosProductos'
import { renderWithRouter } from '../testUtils'

const mockCarrito: PeliculaType[] = [
    {id: 1, titulo: "Pelicula Test", descripcion: "", precio: 1000, imagenSrc: "", imagenAlt:"",categoria:"Accion"},
    {id: 2, titulo: "Pelicula Test 2", descripcion: "", precio: 2000, imagenSrc: "", imagenAlt:"",categoria:"Drama"}
]

describe('CarritoCompras component Tests', () => {

    test('Renderiza el título correctamente', () => {
        renderWithRouter(<CarritoCompras carrito={[]} eliminarProd={() => {}} limpiarCarrito={() => {}} />)
        expect(screen.getByText(/tu carrito está vacío/i)).toBeInTheDocument()
    })

    test('Muestra vista de carrito vacío cuando no hay productos', () => {
        renderWithRouter(<CarritoCompras carrito={[]} eliminarProd={() => {}} limpiarCarrito={() => {}} />)
        expect(screen.getByText(/tu carrito está vacío/i)).toBeInTheDocument()
    })

    test('Renderiza productos cuando el carrito tiene elementos', () => {
        renderWithRouter(<CarritoCompras carrito={mockCarrito} eliminarProd={() => {}} limpiarCarrito={() => {}} />)

        expect(screen.getByText('Pelicula Test')).toBeInTheDocument()
        expect(screen.getByText('Pelicula Test 2')).toBeInTheDocument()
    })

    test('Calcula correctamente el costo total', () => {
        renderWithRouter(<CarritoCompras carrito={mockCarrito} eliminarProd={() => {}} limpiarCarrito={() => {}} />)
        expect(screen.getByText(/\$3000/i)).toBeInTheDocument()
    })

    test('Abre la ventana de pago al hacer clic en pagar', () => {
        renderWithRouter(<CarritoCompras carrito={mockCarrito} eliminarProd={() => {}} limpiarCarrito={() => {}} />)

        const pagarButton = screen.getByRole('button', { name: /pagar/i })
        fireEvent.click(pagarButton)

        expect(screen.getByText(/compra exitosa/i)).toBeInTheDocument()
    })

    test('Cierra la ventana de pago y ejecuta limpiarCarrito', () => {
        const limpiarCarritoMock = vi.fn()

        renderWithRouter(<CarritoCompras carrito={mockCarrito} eliminarProd={() => {}} limpiarCarrito={limpiarCarritoMock} />)

        const pagarButton = screen.getByRole('button', { name: /pagar/i })
        fireEvent.click(pagarButton)

        const cerrarButton = screen.getByRole('button', { name: /cerrar/i })
        fireEvent.click(cerrarButton)

        expect(limpiarCarritoMock).toHaveBeenCalled()
    })  
})
