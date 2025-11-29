import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

// 👉 Mock global para navegación
const navigateMock = vi.fn();

// 👉 Mock parcial de react-router-dom (mantiene MemoryRouter)
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

// Limpiar mocks antes de cada test
beforeEach(() => {
  navigateMock.mockClear();
});

describe("Navbar Component Tests", () => {

  test("Renderiza correctamente el nombre de la página", () => {
    render(
      <MemoryRouter>
        <Navbar cantProd={3} />
      </MemoryRouter>
    );

    expect(screen.getByText(/moviE–store/i)).toBeInTheDocument();
  });

  test("Renderiza los links principales", () => {
    render(
      <MemoryRouter>
        <Navbar cantProd={3} />
      </MemoryRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/productos/i)).toBeInTheDocument();
    expect(screen.getByText(/nosotros/i)).toBeInTheDocument();
    expect(screen.getByText(/blogs/i)).toBeInTheDocument();
    expect(screen.getByText(/contacto/i)).toBeInTheDocument();
  });

  test("Muestra correctamente la cantidad en el carrito", () => {
    render(
      <MemoryRouter>
        <Navbar cantProd={5} />
      </MemoryRouter>
    );

    expect(screen.getByText(/cart \(5\)/i)).toBeInTheDocument();
  });

  test("Ejecuta navegación al hacer clic en 'Productos'", () => {
    render(
      <MemoryRouter>
        <Navbar cantProd={3} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/productos/i));
    expect(navigateMock).toHaveBeenCalledWith("/productos");
  });

  test("Ejecuta navegación al hacer clic en 'Carrito'", () => {
    render(
      <MemoryRouter>
        <Navbar cantProd={2} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/cart \(2\)/i));
    expect(navigateMock).toHaveBeenCalledWith("/carrito");
  });

});
