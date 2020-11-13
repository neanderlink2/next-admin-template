import React, { useEffect } from 'react'
import { BiHomeAlt } from 'react-icons/bi';
import { useBreadcrumb } from '../../components/BreadcrumbProvider';
import Layout from '../../layout';

const FormsPage = () => {
    const { changeBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        changeBreadcrumbs([
            { title: 'Início', href: '/', icon: <BiHomeAlt /> },
            { title: 'Formulários' }
        ]);
    }, []);

    return (
        <Layout>
            <span>Forms</span>
            <input />
        </Layout>
    )
}

export default FormsPage