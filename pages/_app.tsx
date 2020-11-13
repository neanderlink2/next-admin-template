import { AppProps } from 'next/dist/next-server/lib/router/router'
import BreadcrumbProvider from '../components/BreadcrumbProvider'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <BreadcrumbProvider initialElements={[]}>
            <Component {...pageProps} />
        </BreadcrumbProvider>
    )
}