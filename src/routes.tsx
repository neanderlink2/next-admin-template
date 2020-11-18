import React from 'react';
import { BiCommentDetail, BiHome, BiListOl, BiLogIn } from 'react-icons/bi';

type Navigation = {
    href: string;
    icon?: React.ReactNode;
    title?: string;
}

export const navigationItems: Navigation[] = [
    {
        href: '/',
        icon: <BiHome size={20} />,
        title: 'Início'
    },
    {
        href: '/forms',
        icon: <BiCommentDetail size={20} />,
        title: 'Formulários'
    },
    {
        href: '/listing',
        icon: <BiListOl size={20} />,
        title: 'Listagem de itens'
    },
    {
        href: '/login',
        icon: <BiLogIn size={20} />,
        title: 'Login'
    }
]