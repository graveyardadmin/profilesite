import HomeButton from "@/components/HomeButton";

export default function Components() {
  return(
    <div className="template">
      <section className="template-section background">
        <h1 className="magic">Components</h1>

        <p>
          <b>What are components?</b>
        </p>

        <p>         
          From Next.JS: "Components allow you to build self-contained,
          reusable snippets of code. If you think of components as LEGO bricks,
          you can take these individual bricks and combine them together to form
          larger structures."

          <br/>
          <br/>
          Read more about components <a href="https://nextjs.org/learn/foundations/from-javascript-to-react/building-ui-with-components" target="_blank" rel="noreferrer">
            here.
          </a>
        </p>

        <hr/>
        
        <h2>Available components</h2>

        <div className="background">
          <h3>HomeButton</h3>
          <p className="background">
            A small button at the top left of the screen which directs
            the user to the home page when they click on it.
          </p>

          <p>
            Props: <span className="snippet">none</span>
          </p>

          <p>
            Children? <span className="snippet">false</span>
          </p>
        </div>

        <br/>

        <div className="background">
          <h3>LinkCard</h3>
          <p className="background">
            A paragraph element which contains a title, description
            and a link to a website.
          </p>

          <p>
            Props:
          </p>
          <p className="snippet">
            title: Title for the LinkCard {"(string)"},
            <br/>
            <br/>
            description: Description for the LinkCard {"(string)"},
            <br/>
            <br/>
            url: URL of the LinkCards link {"(string)"},
            <br/>
            <br/>
            link_text: The text inside of the LinkCards link {"(string)"}
          </p>

          <p>
            Children? <span className="snippet">false</span>
          </p>
        </div>
        
        <br/>

        <div className="background">
          <h3>LinkList.js</h3>

          <p className="background">
            A flex div which you pass either Next.JS links, or HTML anchor tags to
          </p>

          <p>
            Props: <span className="snippet">none</span>
          </p>

          <p>
            Children? <span className="snippet">true</span>
          </p>
        </div>

      </section>

      <HomeButton/>
    </div>
  );
}