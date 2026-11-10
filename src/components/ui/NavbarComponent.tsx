'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/useAuthStore';

interface NavItem {
  label: string;
  href: string;
  onlyForAdmin?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '/auth/dashboard', onlyForAdmin: false },
  { label: 'Documentos', href: '/auth/documents', onlyForAdmin: false },
  { label: 'Tramites', href: '/auth/formalities', onlyForAdmin: false },
  { label: 'Configuracion', href: '/auth/users', onlyForAdmin: true },
];

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { logout, user } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  // Efecto de sombra al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <div>
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300
        ${scrolled ? 'shadow-sm border-b border-gray-100' : 'border-b border-transparent'}
      `}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 tracking-tight hover:text-blue-600 transition-colors"
            >
              Marca<span className="text-blue-600">.</span>
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                if (
                  item.onlyForAdmin === true &&
                  String(user?.role) === 'admin'
                ) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                    relative px-4 py-2 text-sm font-medium transition-colors rounded-lg
                    ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                      )}
                    </Link>
                  ); // No renderizar el enlace si no es admin
                } else if (item.onlyForAdmin === false) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                    relative px-4 py-2 text-sm font-medium transition-colors rounded-lg
                    ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                      )}
                    </Link>
                  );
                }
              })}
            </div>

            {/* Botón CTA desktop */}
            <div className="">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={-1}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLogout()}
                      className="btn btn-ghost text-black"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Botón hamburguesa mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú mobile */}
        <div
          className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                  block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3 mt-3 border-t border-gray-100 space-y-2">
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
