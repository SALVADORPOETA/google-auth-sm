import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Google Auth</title>
        <meta name="description" content="Google authentication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='container'>
          <a href="/login">
            <button className='signin'>
              Sign In
            </button>
          </a>
        </div>
      </main>
    </>
  )
}
