import HomeButton from "@/components/HomeButton";
import Head from "next/head";

export default function Steph() {
  return(
    <div className="center template">
      <Head>
        <title>Hi!</title>
      </Head>

      <section className="template-section">
        <HomeButton/>

        <h1 className="magic">Hello!</h1>

        <p>Hi I'm Steph and I'm a loser.</p>
      </section>

    </div>
  )
}