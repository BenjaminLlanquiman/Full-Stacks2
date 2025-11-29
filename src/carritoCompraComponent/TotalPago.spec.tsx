import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TotalPago } from './TotalPago'

describe('TotalPago Component Tests', () => {

    test('Renderiza correctamente el texto "Total a pagar:"', () => {
        render(<TotalPago costoTotal={3000} openModal={() => {}} />)
        expect(screen.getByText(/total a pagar/i)).toBeInTheDocument()
    })

    test('Muestra el costo total correctamente', () => {
        render(<TotalPago costoTotal={3000} openModal={() => {}} />)
        expect(screen.getByText('$3000')).toBeInTheDocument()
    })

    test('Renderiza el botón "Pagar"', () => {
        render(<TotalPago costoTotal={3000} openModal={() => {}} />)
        expect(screen.getByRole('button', { name: /pagar/i })).toBeInTheDocument()
    })

    test('Ejecuta openModal al hacer clic en "Pagar"', () => {
        const mockOpenModal = vi.fn()

        render(<TotalPago costoTotal={3000} openModal={mockOpenModal} />)

        const pagarButton = screen.getByRole('button', { name: /pagar/i })
        fireEvent.click(pagarButton)

        expect(mockOpenModal).toHaveBeenCalledTimes(1)
    })
})
