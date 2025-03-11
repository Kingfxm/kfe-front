import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      await axios.post(`${API_URL}/api/auth/register`, {
        username: data.name,
        email: data.email,
        password: data.password,
      });
      toast.success("Usuario registrado con éxito.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error al registrar usuario");
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center min-h-screen bg-background dark:bg-dark-background px-6">
        <div className="w-full max-w-2xl bg-white dark:bg-dark-card p-10 rounded-lg shadow-lg border dark:border-dark-border">
          <h2 className="text-3xl font-bold mb-6 text-center text-text dark:text-dark-text">
            Registrarse
          </h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text dark:text-dark-text">
                Nombre completo
              </label>
              <input
                type="text"
                {...register("name", { required: "Este campo es obligatorio" })}
                className="w-full p-4 mt-2 border border-border dark:border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-input dark:text-dark-text"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text dark:text-dark-text">
                Correo electrónico
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Este campo es obligatorio",
                })}
                className="w-full p-4 mt-2 border border-border dark:border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-input dark:text-dark-text"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text dark:text-dark-text">
                Contraseña
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Este campo es obligatorio",
                })}
                className="w-full p-4 mt-2 border border-border dark:border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-input dark:text-dark-text"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-primary text-white rounded-lg hover:bg-opacity-80"
            >
              Registrarse
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-text dark:text-dark-text">
              ¿Ya tienes cuenta?{" "}
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
