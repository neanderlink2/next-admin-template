import React, { createContext, useCallback, useContext, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import Breadcrumb from "../Breadcrumb";
import { BreadcrumbContextType, BreadcrumbItem } from "./types";

const BreadcrumbContext = createContext<BreadcrumbContextType>({
    breadcrumbs: [],
    changeBreadcrumbs: () => { console.log("não implementado") }
});

export const useBreadcrumb = () => {
    const context = useContext(BreadcrumbContext);
    return context;
};

export default function BreadcrumbProvider({ children }: any) {
    const [breadcrumbs, setBreadcrumbs] = useState<React.ReactNode[]>(
        [
            <Breadcrumb
                key={`route-inicio-${Date.now()}`}
                title="Início"
                icon={<BiHomeAlt />}
                disabled
            />
        ]
    );

    const changeBreadcrumbs = useCallback((breadcrumbItems: BreadcrumbItem[]) => {
        const elements = breadcrumbItems.map((item) => (
            <Breadcrumb
                key={`route-${item.title.toLowerCase()}-${Date.now()}`}
                href={item.href}
                title={item.title}
                icon={item.icon}
                disabled={!item.href}
            />
        ));
        setBreadcrumbs(elements);
    }, [breadcrumbs, setBreadcrumbs]);

    return (
        <BreadcrumbContext.Provider value={{ breadcrumbs, changeBreadcrumbs }}>
            {children}
        </BreadcrumbContext.Provider>
    )
}