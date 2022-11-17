import Head from 'next/head'
import PageBuilder from 'components/PageBuilder'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dropsplash | Login</title>
        <meta name="description" content="Build and launch a splash page in minutes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Log In</h1>

      <form action="">
        <input type="text" />
        <input type="password" />
        <button>Sign up with Google</button>
      </form>
    </div>
  )
}
