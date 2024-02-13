import { useEffect, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/layout'
import '../styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  )
}