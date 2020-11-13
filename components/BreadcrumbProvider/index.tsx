import React, { createContext, useCallback, useContext, useState } from "react";
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

export default function BreadcrumbProvider({ children, initialElements = [] }: any) {
    const [breadcrumbs, setBreadcrumbs] = useState<React.ReactNode[]>(initialElements);

    const changeBreadcrumbs = useCallback((breadcrumbItems: BreadcrumbItem[]) => {
        const elements = breadcrumbItems.map((item, i) => (
            <Breadcrumb
                key={`route-${item.title.toLowerCase()}`}
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