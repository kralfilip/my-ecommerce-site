import '../app/globals.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { ShoppingCartProvider } from '../context/ShoppingCartContext'; // adjust the path


function MyApp({Component, pageProps}: AppProps) {
    return (
        <ShoppingCartProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ShoppingCartProvider>
    );
}

export default MyApp;
