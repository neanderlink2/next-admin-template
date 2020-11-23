import React, { useEffect, useRef } from 'react';
import { ListaItens } from './styles';

type Props = {
    loading?: boolean;
    getMore: () => void;
    renderItem: (item: any, index: number) => React.ReactNode;
    data: any[];
    LoadingComponent?: React.ReactNode;
    containerStyle?: React.CSSProperties
}

const verifyIsInBottomOfElement = (selector: string | HTMLElement, onEndReached: () => void) => {
    if (typeof selector === "string") {
        const element = document.getElementById(selector);
        if (element && element.offsetHeight + element.scrollTop >= element.scrollHeight) {
            onEndReached();
        }
    } else {
        if (selector && selector.offsetHeight + selector.scrollTop >= selector.scrollHeight) {
            onEndReached();
        }
    }
}

const InfiniteScrollList: React.FC<Props> = ({ data, loading, getMore, renderItem, containerStyle, LoadingComponent }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onScrolled(this: any) {
            verifyIsInBottomOfElement(this, onEndOfContainer);
        }
        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', onScrolled);
        }
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', onScrolled);
            }
        }
    }, [containerRef.current, loading]);

    function onEndOfContainer() {
        if (!loading) {
            getMore();
        }
    }

    return (
        <>
            <ListaItens ref={containerRef} style={containerStyle}>
                {data?.map((item, index) => (
                    renderItem(item, index)
                ))}
            </ListaItens>
            {loading && (LoadingComponent || <span>Carregando...</span>)}
        </>
    )
}

export default InfiniteScrollList;