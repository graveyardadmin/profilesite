import HomeButton from "@/components/HomeButton";

export default function Styles() {
  return(
    <div className="template">
      <section className="template-section background">
        <h1 className="magic">Styling</h1>

        <p>
          <b>Should I care about my sites websites styling?</b>
        </p>

        <p>
          From LinkedIn: "Yes, a website's design always matters.
          Whether it is to create a first impression on a visitor
          or to attract them to explore more about the products and
          services, website design always matters. Your customers
          care about the design."

          <br/>
          <br/>
          Read more <a href="https://www.linkedin.com/pulse/why-good-website-design-important-himanshu-verma#:~:text=Yes%2C%20a%20website's%20design%20always,customers%20care%20about%20the%20design.">here</a>.
        </p>

        <hr/>

        <h2>Available styling</h2>

        <h3>Colours</h3>
        <div style={{display: "flex", flexWrap:"wrap", gap:"2rem"}}>
          <div className="background ivory-div">
            <h4>Ivory</h4>

            <p>
              Primarily used as a text colour
            </p>

            <p>
              Colour values:
            </p>

            <p className="snippet">
              html: #F2F5EA,<br/>
              rgb: rgb(242, 245, 234),<br/>
              hsl: hsl(76, 35%, 94%)
            </p>
          </div>

          <div className="background gunmetal-div">
            <h4>Gunmetal</h4>

            <p>
              Primarily used as a background colour
            </p>

            <p>
              Colour values:
            </p>

            <p className="snippet">
              html: #1b1d22,<br/>
              rgb: rgb(27, 29, 34),<br/>
              hsl: hsl(223, 11%, 12%)
            </p>
          </div>
          
          <div className="background indigo-div">
            <h4>Indigo</h4>

            <p>
              Primarily used as a link colour
            </p>

            <p>
              Colour values:
            </p>

            <p className="snippet">
              html: #9b7ede,<br/>
              rgb: rgb(155, 126, 222),<br/>
              hsl: hsl(258, 59%, 68%)
            </p>
          </div>

          <div className="background lightsea-div">
            <h4>Indigo</h4>

            <p>
              Primarily used as a highlight colour
            </p>

            <p>
              Colour values:
            </p>

            <p className="snippet">
              html: #17a1a6,<br/>
              rgb: rgb(23, 161, 166),<br/>
              hsl: hsl(182, 76%, 37%)
            </p>
          </div>

          <div className="background yellow-div">
            <h4>Yellow</h4>

            <p>
              Primarily used as a highlight colour
            </p>

            <p>
              Colour values:
            </p>

            <p className="snippet">
              html: #F9DB6D,<br/>
              rgb: rgb(249, 219, 109),<br/>
              hsl: hsl(47, 92%, 70%)
            </p>
          </div>
        </div>
      </section>

      <HomeButton/>
    </div>
  );
}