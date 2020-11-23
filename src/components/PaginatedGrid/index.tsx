import { Composition } from 'atomic-layout';
import { de } from 'date-fns/locale';
import React, { useMemo, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { PagedList } from '../../../models/PagedList';
import { debounce } from '../../utils/debounce';
import { IconButton } from '../Button';
import InputField from '../Forms/InputField';
import { BasicInput } from '../Forms/styles';
import { BorderlessSelect, GridContainer, PageCounting } from './styles';

type Props<T> = {
    list: PagedList<T>,
    renderItem: (item: T, index?: number) => void,
    availablePagesSizes?: number[]
    notFoundLabel?: string,
    loading?: boolean,
    onPageChange?: (index: number) => void;
    onPageSizeChange?: (newPageSize: number) => void;
    onSearch?: (search: string) => void;
}

const layout = `
    search pagingTop
    data data
    size pagingBottom
`;

export const PaginatedGrid: <T extends Record<string, number | string>>(props: Props<T>) => JSX.Element = <
    T extends Record<string, unknown>
>({
    list,
    loading,
    availablePagesSizes = [10, 25, 50],
    notFoundLabel,
    onPageChange,
    onPageSizeChange,
    renderItem,
    onSearch
}: Props<T>) => {
    const [searching, setSearching] = useState(false);

    const pagination = useMemo(() => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <PageCounting>
                {list.totalCount > 0 ? list.pageIndex * list.pageSize + 1 : 0}{' - '}
                {(list.pageIndex + 1) * list.pageSize >= list.totalCount
                    ? list.totalCount
                    : (list.pageIndex + 1) * list.pageSize}
                {' de '} {list.totalCount}
            </PageCounting>
            <IconButton onClick={() => onPageChange && onPageChange(list.pageIndex--)} disabled={!list.hasPreviousPage} style={{ marginLeft: 10 }}>
                <BiChevronLeft />
            </IconButton>
            <IconButton onClick={() => onPageChange && onPageChange(list.pageIndex++)}  disabled={!list.hasNextPage}>
                <BiChevronRight />
            </IconButton>
        </div>
    ), [list, loading]);

    function handleSearchChange(value: string) {
        const func = debounce(() => {
            if (onSearch && !searching) {
                onSearch(value);
            }
        }, 1000);
        func();
    }

    return (
        <Composition areas={layout} sty>
            {({ Search, PagingTop, PagingBottom, Data, Size }) => (
                <>
                    {onSearch && <Search>
                        <BasicInput placeholder="Pesquise..." onChange={({ target }) => handleSearchChange(target.value)} />
                    </Search>}
                    <PagingTop style={{ textAlign: 'right' }}>
                        {pagination}
                    </PagingTop>
                    <Data as={GridContainer}>
                        {list.items.map(renderItem)}
                    </Data>
                    <Size>
                        <BorderlessSelect onChange={({ target }) => {
                            if (onPageSizeChange) {
                                onPageSizeChange(parseInt(target.value));
                            }
                        }}>
                            {availablePagesSizes?.map(size => (
                                <option value={size}>{size}</option>
                            ))}
                        </BorderlessSelect>
                    </Size>
                    <PagingBottom style={{ textAlign: 'right' }}>
                        {pagination}
                    </PagingBottom>
                </>
            )}
        </Composition>
    )
}