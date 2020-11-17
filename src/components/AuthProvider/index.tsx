import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect, useState
} from "react";
import { usePersistedState } from "../../hooks/usePersistedState";
import Hydrating from "./Hydrating";
import { AuthContextType, AuthProviderUser } from "./types";
import axios from 'axios';
import useUser from "../../hooks/useUser";
import { useRouter } from "next/router";

const AuthContext = createContext<AuthContextType>({
    authenticated: false,
    token: null,
    entrar: () => { },
    sair: () => { },
    loading: false,
    user: undefined,
    hydrating: false
});

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
    const { user, mutateUser } = useUser({
        redirectTo: '/login'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [hydrating, setHydrating] = useState(true);
    const [usuario, setUsuario] = usePersistedState<AuthProviderUser | undefined>(
        "@app/user",
        user
    );
    const [token, setToken] = usePersistedState<string | null>(
        "@app/userToken",
        null
    );

    const router = useRouter();

    async function entrar(nomeUsuario: string, senha: string) {
        setIsLoading(true);
        await axios.post("/api/login", { nomeUsuario, senha });
        const response = await axios.get<{ user: AuthProviderUser }>("/api/user");
        setUsuario(response.data.user);
        setToken("3987210UE03WJD08JSA9RH093H98HR89SAGHER");
        setIsLoading(false);
        router.push("/")
    }

    async function sair() {
        await axios.post("/api/logout");
        setIsLoading(true);
        setUsuario(undefined);
        setToken(null);
        setIsLoading(false);
        mutateUser(undefined);
    }

    useEffect(() => {
        setHydrating(false);
    }, []);

    if (hydrating) {
        return <Hydrating />
    }

    return (
        <AuthContext.Provider
            value={{
                user: usuario,
                token,
                authenticated: !!usuario && !!token,
                entrar,
                sair,
                loading: isLoading,
                hydrating
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}