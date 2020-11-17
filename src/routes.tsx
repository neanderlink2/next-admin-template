import React from 'react';
import { BiCommentDetail, BiHome, BiLogIn } from 'react-icons/bi';

type Navigation = {
    href: string;
    icon?: React.ReactNode;
}

export const navigationItems: Navigation[] = [
    {
        href: '/',
        icon: <BiHome size={20} />,
    },
    {
        href: '/forms',
        icon: <BiCommentDetail size={20} />,
    },
    {
        href: '/login',
        icon: <BiLogIn size={20} />,
    }
]