import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { AuthProviderUser } from '../components/AuthProvider/types'

type RedirectUrls = {
    redirectTo?: string,
    redirectIfFound?: boolean,
}

type UserHook = {
    user?: AuthProviderUser;
    mutateUser: (data?: AuthProviderUser) => void;
}

export default function useUser({ redirectTo, redirectIfFound }: RedirectUrls): UserHook {
    const { data: user, mutate: mutateUser } = useSWR<{ user: AuthProviderUser }>("/api/user");

    useEffect(() => {
        if (
            (redirectTo && !redirectIfFound && !user?.user) ||
            (redirectIfFound && redirectTo && user?.user)
        ) {
            Router.push(redirectTo);
        }
    }, [user, redirectIfFound, redirectTo]);

    return {
        user: user?.user,
        mutateUser: (data) => {
            mutateUser(data ? { user: data } : undefined);
        }
    };
}