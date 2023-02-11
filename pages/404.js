import Link from 'next/link';
import Head from 'next/head';

export default function FourOhFour() {
  return (
    <div className='template center center-section'>
      <section className="template-section">
        <Head>
          <title>404 - Page not found</title>
        </Head>

        <h1 className='magic'>Page not found.</h1>
        <p>Doesn't seem like this page exists..</p>
        
        <br/>
        <br/>
        <Link href="/">
          <a>
            Go back home.
          </a>
        </Link>
      </section>
    </div>
  );
}