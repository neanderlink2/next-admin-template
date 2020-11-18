export interface PagedList<T = any> {
    indexFrom?: number;
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    items: T[];
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
}

export const defaultList: PagedList = {
    pageIndex: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
    items: [],
}