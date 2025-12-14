import { describe, expect, test, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { CarritoCompras } from "./CarritoCompras";
import { renderWithRouter } from "../testUtils";

// ✅ MOCKS DE COMPONENTES HIJOS (NAMED EXPORTS)
vi.mock("./ListaProductos", () => ({
  ListaProductos: ({ productos }: any) => (
    <div>
      {productos.map((p: any) => (
        <span key={p.id}>{p.nombreProducto}</span>
      ))}
    </div>
  ),
}));

vi.mock("./TotalPago", () => ({
  TotalPago: ({ costoTotal, openModal }: any) => (
    <div>
      <span>${costoTotal}</span>
      <button onClick={openModal}>Pagar</button>
    </div>
  ),
}));

vi.mock("./VistaCarritoVacio", () => ({
  VistaCarritoVacio: () => <p>Tu carrito está vacío</p>,
}));

vi.mock("./ModalPagoExitoso", () => ({
  ModalPagoExitoso: ({ onClose }: any) => (
    <div>
      <p>Compra exitosa</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  ),
}));

const mockCarrito = [
  {
    id: 1,
    codigo: "P-001",
    nombreProducto: "Pelicula Test",
    descripcion: "",
    precio: 1000,
    imagenSrc: "",
    imagenAlt: "",
    categoria: "Accion",
    stock: 10,
    stockCritico: 2,
  },
  {
    id: 2,
    codigo: "P-002",
    nombreProducto: "Pelicula Test 2",
    descripcion: "",
    precio: 2000,
    imagenSrc: "",
    imagenAlt: "",
    categoria: "Drama",
    stock: 5,
    stockCritico: 1,
  },
];

describe("CarritoCompras component Tests", () => {

  test("Muestra vista de carrito vacío cuando no hay productos", () => {
    renderWithRouter(
      <CarritoCompras carrito={[]} eliminarProd={() => {}} limpiarCarrito={() => {}} />
    );

    expect(screen.getByText(/tu carrito está vacío/i)).toBeInTheDocument();
  });

  test("Renderiza productos cuando el carrito tiene elementos", () => {
    renderWithRouter(
      <CarritoCompras carrito={mockCarrito} eliminarProd={() => {}} limpiarCarrito={() => {}} />
    );

    expect(screen.getByText("Pelicula Test")).toBeInTheDocument();
    expect(screen.getByText("Pelicula Test 2")).toBeInTheDocument();
  });

  test("Calcula correctamente el costo total", () => {
    renderWithRouter(
      <CarritoCompras carrito={mockCarrito} eliminarProd={() => {}} limpiarCarrito={() => {}} />
    );

    expect(screen.getByText("$3000")).toBeInTheDocument();
  });

  test("Abre la ventana de pago al hacer clic en pagar", () => {
    renderWithRouter(
      <CarritoCompras carrito={mockCarrito} eliminarProd={() => {}} limpiarCarrito={() => {}} />
    );

    fireEvent.click(screen.getByText(/pagar/i));
    expect(screen.getByText(/compra exitosa/i)).toBeInTheDocument();
  });

  test("Cierra la ventana de pago y ejecuta limpiarCarrito", () => {
    const limpiarCarritoMock = vi.fn();

    renderWithRouter(
      <CarritoCompras
        carrito={mockCarrito}
        eliminarProd={() => {}}
        limpiarCarrito={limpiarCarritoMock}
      />
    );

    fireEvent.click(screen.getByText(/pagar/i));
    fireEvent.click(screen.getByText(/cerrar/i));

    expect(limpiarCarritoMock).toHaveBeenCalled();
  });

});
