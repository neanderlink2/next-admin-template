export type BreadcrumbContextType = {
    breadcrumbs: React.ReactNode[];
    changeBreadcrumbs: (items: BreadcrumbItem[]) => void;
}

export type BreadcrumbItem = {
    href?: string;
    title: string;
    icon?: React.ReactNode;
}