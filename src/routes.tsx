import React from 'react';
import { BiCommentDetail, BiHome, BiLogIn } from 'react-icons/bi';

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
        href: '/login',
        icon: <BiLogIn size={20} />,
        title: 'Login'
    }
]