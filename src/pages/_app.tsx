import { AppProps } from 'next/app'

import Context from '@/contexts'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  return (
    <Context>
      <SsrComponent {...ssrPageProps} />
    </Context>
  )
}
