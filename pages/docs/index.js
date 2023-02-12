import HomeButton from "@/components/HomeButton";
import Link from "next/link";

export default function Docs() {
  return(
    <div className="template">
      <section className="template-section background">
        <h1 className="magic">Docs</h1>

        <p>
          3x00 is an open source Next.JS website where you can create your own
          single page website, sort of like a business card that you can link
          to from your social medias. Don't worry if you don't yet know React, HTML and CSS!
          You can also create pages using {"`.md`"} files!
        </p>

        <hr/>

        <h2>Quick links</h2>
        <ul>
          <li>
            <Link href="/docs/guide">
              <a>Get started</a>
            </Link>
          </li>

          <li>
            <Link href="/docs/components">
              <a>Components</a>
            </Link>
          </li>

          <li>
            <Link href="/docs/styling">
              <a>Styling</a>
            </Link>
          </li>

          <li>
            <a href="https://github.com/graveyardadmin/profilesite/" target={"_blank"} rel="noreferrer">
              GitHub Repository
            </a>
          </li>
        </ul>

        <br/>

        <h2>Basic info</h2>
        <p>
          This page is hosted using <a href="https://pages.cloudflare.com/" target={"_blank"} rel="noreferrer">
            Cloudflare Pages
          </a>.
        </p>

        <p>
          The JavaScript framework for this project is <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer">
            Next.JS
          </a>.
        </p>

        <p>
          All the code in this project is <a href="https://opensource.com/resources/what-open-source" target={"_blank"} rel="noreferrer">
            open source
          </a> and fully available to the public.
        </p>

        <p>
          Anyone can contribute to the project by forking the <a href="https://github.com/graveyardadmin/profilesite/" target={"_blank"} rel="noreferrer">
            GitHub Repository
          </a>, editing the code, and creating a pull request.
        </p>
      </section>


      <HomeButton/>
    </div>
  );
}