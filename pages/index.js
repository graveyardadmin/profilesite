import LinkList from '@/components/LinkList'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (      
      <div className="template center-section no-bg">
        <section className='template-section center'>
          <Head>
            <title>3x00</title>
          </Head>

          <h1>
            <i className="orange">Fully</i> customisable
            single page websites,
            for <b className="magic">free.</b>
          </h1>

          <p>.. did I mention it's open source?</p>

          <br/>

          <LinkList>
            <Link href="/about"><a>Read more</a></Link>
            <Link href="/search"><a>Search users</a></Link>
            <Link href="/top"><a>Top profiles</a></Link>
          </LinkList>
        </section>

        <div className='backgrounder'>
        </div>
    </div>
  )
}
