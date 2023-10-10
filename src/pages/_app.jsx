import Layout from '../components/layout'
import './globals.css';
import localFont from 'next/font/local';

const sen = localFont({
    src: [
        {
            path: './Sen-Bold.ttf',
            weight: '700'
        },
        {
            path: './Sen-Medium.ttf',
            weight: '500'
        },
        {
            path: './Sen-Regular.ttf',
            weight: '400'
        }
    ],
    variable: '--font-sen',
})


export default function MyApp({ Component, pageProps }) {
    return (
        <main className={`${sen.variable} font-sans`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    )
}