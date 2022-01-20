import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Commerce</title>
        <meta name='description' content='An ecommerce shop website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <p className='font-bold'>Hello</p>
    </div>
  )
}

export default Home
