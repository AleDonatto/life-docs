import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface RoleUser {
    tipo: 'admin' | 'operator';
}

interface User {
    username: string;
    nombre: string;
    grado: string;
    active: boolean;
    role: RoleUser;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;

    setUser: (user: User, tokenUser: string | null) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null, 
            token: null, 
            isAuthenticated: false,

            setUser: (user : User, tokenUser: string | null) => {
                const userData = {
                    username: user.username,
                    nombre: user.nombre,
                    grado: user.grado,
                    active: user.active,
                    role: user.role
                };
                set({ user: userData, isAuthenticated: true, token: tokenUser });
            },
            logout: () => {
                set({ user: null, token: null, isAuthenticated: false });
            }
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated }),
            storage: createJSONStorage(() => localStorage)
        }
    )
)