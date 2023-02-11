import HomeButton from "@/components/HomeButton";
import Head from "next/head";

export default function About() {
  return( 
    <div className="template no-bg">
      <Head>
        <title>About 3x00</title>
      </Head>

      <section className="template-section">
        <HomeButton/>

        <h2 className="magic">About 3x00</h2>

        <p>
          3x00 is an open source Next.JS website where you can create your own
          single page website, sort of like a business card that you can link
          to from your social medias.
        </p>

        <hr/>

        <h2 className="magic">How do I make my own site?</h2>

        <p>
          For a more in-depth guide on how to create your own site,
          refer to 
          our <a href="https://github.com/graveyardadmin/profilesite" rel="noreferrer" target="_blank">
            GitHub Page.
          </a>
          <br/>

          But here's the TLDR. Fork our GitHub repository, create a React page in
          the {`"./users/" `} directory with your desired name {`(that has not already been taken) `}
          and create a .module.css file with the same name as the React page that you created. 
          Then you can make the website exactly how you'd like.
        </p>

        <hr/>

        <h2 className="magic">
          Can I contribute?
        </h2>

        <p>
          If you spot a tpyo or have any suggestions,
          you can create an issue on 
          our <a href="https://github.com/graveyardadmin/profilesite/issues/new" rel="noreferrer" target="_blank">
            GitHub Repository
          </a>
        </p>
      </section>

      <div className='backgrounder'>
      </div>
    </div>
  )
}