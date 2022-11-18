import { useEffect, useState } from 'react'
import Head from 'next/head'
import PageSection from 'components/PageSection'
import Button from 'components/Button'

const Home = () => {
  const [sections, updateSections] = useState([{}])
  return (
    <div>
      <Head>
        <title>Dropsplash</title>
        <meta name="description" content="Build and launch a splash page in minutes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='top-0 left 0 h-screen w-full fixed flex flex-col'>
        <div className="grow">
          {sections.map(() => (
            <PageSection deletable={sections.length > 1} />
          ))}
        </div>
        <div className="bg-black shrink-0 grow-0 flex justify-center">
          <div className="py-2 text-center">
            <Button>+ Page Section</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home