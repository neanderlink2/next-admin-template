export interface AuthProviderUser {
    username: string;
    email: string;    
    role: string;
}

export type AuthContextType = {
    user: AuthProviderUser | undefined;
    token: string | null;
    loading: boolean;
    authenticated: boolean;
    hydrating: boolean;
    entrar(usuario: string, senha: string): void;
    sair(): void;
};