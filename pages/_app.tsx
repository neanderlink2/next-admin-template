import { AppProps } from 'next/dist/next-server/lib/router/router'
import BreadcrumbProvider from '../src/components/BreadcrumbProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '../src/components/AuthProvider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <BreadcrumbProvider>
            <AuthProvider>
                <ToastContainer
                    toastStyle={{ borderRadius: 7 }}
                    position="top-center"
                />
                <Component {...pageProps} />
            </AuthProvider>
        </BreadcrumbProvider>
    )
}