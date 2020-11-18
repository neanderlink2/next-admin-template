import { O_TRUNC } from 'constants';
import React, { useState } from 'react'
import InfiniteScrollList from '../../components/InfiniteScrollList'
import Layout from '../../layout';
import { wait } from '../../utils/promiseUtils'

type Item = {
    id: number;
    name: string;
}

async function createMoreItems(): Promise<Item[]> {
    await wait(3000);
    const data: Item[] = [];
    for (let index = 0; index < 10; index++) {
        data.push({ id: Math.random() * 10000, name: `Random item ${Math.random() * 10000}` });
    }
    return data;
}

const ListingPage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Item[]>([
        { id: 1, name: 'item 1' }, { id: 2, name: 'item 2' }, { id: 3, name: 'item 3' },
        { id: 4, name: 'item 4' }, { id: 5, name: 'item 5' }, { id: 6, name: 'item 6' },
        { id: 7, name: 'item 7' }, { id: 8, name: 'item 8' }, { id: 9, name: 'item 9' },
        { id: 10, name: 'item 10' }, { id: 11, name: 'item 11' }, { id: 12, name: 'item 12' },
        { id: 13, name: 'item 13' }, { id: 14, name: 'item 14' }, { id: 15, name: 'item 15' },
        { id: 16, name: 'item 16' }, { id: 17, name: 'item 17' }, { id: 18, name: 'item 18' },
        { id: 19, name: 'item 19' }, { id: 20, name: 'item 20' }, { id: 21, name: 'item 21' }
    ]);
    return (
        <Layout>
            <InfiniteScrollList
                data={data}
                getMore={async () => {
                    setLoading(true);
                    const data = await createMoreItems();
                    setData((oldData) => [...oldData, ...data]);
                }}
                loading={loading}
                renderItem={(item) => (
                    <p key={item.id}>{item.name}</p>
                )}
                LoadingComponent={<span>loading</span>}
                containerStyle={{ height: 100 }}
            />
        </Layout>
    )
}

export default ListingPage
