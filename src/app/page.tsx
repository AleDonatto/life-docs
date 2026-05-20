"use client";
import { Input } from "@/components/ui/input";
import { ArrowUpIcon, Eye, EyeClosed, Lock, LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/dashboard");
  };

  const [showPassword, setshowPassword] = useState<boolean>(false)
  const [isLoading, setisLoading] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  return (
    // bg-gradient-to-br from-green-800 via-green-900 to-slate-900
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        {/* Tarjeta principal */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10 transition-all duration-300 hover:shadow-indigo-500/10">
          
          {/* Logo/Icono */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-3 rounded-full shadow-lg">
              {/* <FaLock className="text-3xl text-white" /> */}
              <Lock />
            </div>
          </div>
          
          <p className="text-center text-black text-sm mt-2 mb-8">
            Accede a tu cuenta con tus credenciales
          </p>
          
          {/* Formulario */}
          <form onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
          }} className="space-y-6">
            {/* Campo de usuario */}
            <div className="space-y-1">
              <label htmlFor="username" className="block text-sm font-medium text-black ml-1">
                Usuario o correo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <FaUser className="text-indigo-300 text-sm" /> */}
                  <User />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  // value={formData.username}
                  onChange={() => {}}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-black/30 rounded-xl text-black placeholder-gray-800/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  placeholder="usuario@ejemplo.com"
                  required
                  autoComplete="username"
                  // disabled={isLoading}
                />
              </div>
              <p className="text-xs text-black-200/60 ml-1 mt-1">
                Ingresa tu nombre de usuario o email
              </p>
            </div>
            
            {/* Campo de contraseña */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-black-100 ml-1">
                  Contraseña
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <FaLock className="text-indigo-300 text-sm" /> */}
                  <Lock />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  // value={formData.password}
                  onChange={() => {}}
                  className="w-full pl-10 pr-10 py-3 bg-white/20 border border-black/30 rounded-xl text-black placeholder-gray-800/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-black-300 hover:text-gray-700 hover:cursor-pointer transition"
                >
                  {showPassword ? <EyeClosed className="text-sm" /> : <Eye className="text-sm" />}
                </button>
              </div>
            </div>
            
            
            {/* Botón de submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-800 to-green-900 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Verificando...</span>
                </>
              ) : (
                <>
                  <LogIn />
                  <span>Iniciar sesión</span>
                </>
              )}
            </button>
            
          </form>
        </div>
        
      </div>
    </div>

  );
}
