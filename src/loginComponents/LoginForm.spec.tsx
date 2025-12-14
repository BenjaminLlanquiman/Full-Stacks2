import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router-dom";

// 👉 Mock global del navigate
const navigateMock = vi.fn();

// 👉 Mock react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

// 👉 Mock AuthContext
vi.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    checkAuth: vi.fn(),
    isAuthenticated: true, // 👈 IMPORTANTE
    role: "ROLE_USER",     // 👈 usuario normal
  }),
}));

// 👉 Mock axios
vi.mock("../axiosConfig/axiosPublic", () => ({
  default: {
    post: vi.fn(() => Promise.resolve({})),
  },
}));

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

    fireEvent.change(screen.getByPlaceholderText(/ingresa tu email/i), {
      target: { value: "test@gmail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/ingresa tu contraseña/i), {
      target: { value: "123456" },
    });

    expect(
      (screen.getByPlaceholderText(/ingresa tu email/i) as HTMLInputElement).value
    ).toBe("test@gmail.com");
  });

  test("Muestra mensajes de error si el formulario está vacío", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /ingresar/i }));

    expect(screen.getByText("El email es obligatorio")).toBeInTheDocument();
    expect(screen.getByText("La contraseña es obligatoria")).toBeInTheDocument();
  });

  test("Login exitoso redirige al home", async () => {
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

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/");
    });
  });

  test("Botón 'Regístrate' navega a registro", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/regístrate/i));

    expect(navigateMock).toHaveBeenCalledWith("/registro-usuario");
  });

});
