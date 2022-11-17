import Head from 'next/head'
import PageBuilder from 'components/PageBuilder'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dropsplash</title>
        <meta name="description" content="Build and launch a splash page in minutes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageBuilder/>
    </div>
  )
}
