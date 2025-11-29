import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router-dom";

// 👉 Mock global del navigate
const navigateMock = vi.fn();

// 👉 Mock parcial correcto de react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

// Limpiar mock entre tests
beforeEach(() => {
  navigateMock.mockClear();
});

describe("LoginForm Component Tests", () => {

  test("Renderiza el formulario correctamente", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ingresar/i })).toBeInTheDocument();
  });

  test("Permite escribir en los inputs", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText(/ingresa tu email/i) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(/ingresa tu contraseña/i) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput.value).toBe("test@gmail.com");
    expect(passwordInput.value).toBe("123456");
  });

  test("Muestra mensajes de error si el formulario está vacío", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /ingresar/i }));

    // Mensajes exactos definidos en validateLogin.ts
    expect(screen.getByText("El email es obligatorio")).toBeInTheDocument();
    expect(screen.getByText("La contraseña es obligatoria")).toBeInTheDocument();
  });

  test("Muestra mensaje de éxito al iniciar sesión correctamente", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/ingresa tu email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/ingresa tu contraseña/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /ingresar/i }));

    expect(screen.getByText(/¡inicio de sesión exitoso!/i)).toBeInTheDocument();
  });

  test("Botón 'Regístrate' ejecuta navegación", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /regístrate/i });
    fireEvent.click(link);

    expect(navigateMock).toHaveBeenCalled();
  });

});
