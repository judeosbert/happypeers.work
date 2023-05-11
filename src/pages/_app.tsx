import { initAuth } from '@/initAuth'
import '@/styles/globals.css'
import { initializeAuth } from 'firebase/auth'
import type { AppProps } from 'next/app'

initAuth()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

