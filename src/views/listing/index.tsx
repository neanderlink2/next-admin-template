import React, { useEffect, useState } from 'react'
import InfiniteScrollList from '../../components/InfiniteScrollList'
import { PaginatedGrid } from '../../components/PaginatedGrid';
import Layout from '../../layout';
import { wait } from '../../utils/promiseUtils'

type Item = {
    id: number;
    name: string;
    teste?: any
}

async function createMoreItems(): Promise<Item[]> {
    await wait(1500);
    const data: Item[] = [];
    for (let index = 0; index < 10; index++) {
        data.push({ id: Math.random() * 10000, name: `Random item ${Math.random() * 10000}` });
    }
    return data;
}

const ListingPage = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const [data, setData] = useState<Item[]>([
        { id: 1, name: 'item 1' }, { id: 2, name: 'item 2' }, { id: 3, name: 'item 3' },
        { id: 4, name: 'item 4' }, { id: 5, name: 'item 5' }, { id: 6, name: 'item 6' },
        { id: 7, name: 'item 7' }, { id: 8, name: 'item 8' }, { id: 9, name: 'item 9' },
        { id: 10, name: 'item 10' }
    ]);

    useEffect(() => {
        console.log('PAGINA', page);
        setData([...data.map(obj => ({ ...obj, name: obj.name + 'alt' }))])
    }, [page]);
    return (
        <Layout>
            <PaginatedGrid
                list={{
                    items: data,
                    pageIndex: page,
                    pageSize: 10,
                    totalCount: 20,
                    totalPages: 5,
                    hasNextPage: page <= 0,
                    hasPreviousPage: page > 0
                }}
                renderItem={(item, i) => <p>{item.name}</p>}
                onSearch={(value) => console.log(value)}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </Layout>
    )
}

export default ListingPage
