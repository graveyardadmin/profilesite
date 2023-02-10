import HomeButton from "@/components/HomeButton";

export default function About() {
  return( 
    <div className="template">
      <section className="template-section">
        <HomeButton/>

        <h1 className="magic">How do I create my own single page website?</h1>

        <h3>If you don't know Next.JS</h3>
        <ol>
          <li>Go to <a href="https://github.com/graveyardadmin/profilesite">this</a> GitHub repository and clone the users branch to your computer.</li>
          <li>Open the {`"template.md"`} file from the {`"./mds"`} folder and save it as {`"{your desired username}.md"`}. <br/><b>Note:</b> your application won't be accepted if you delete someone elses file.</li>
          <li>Commit the changes to your branch that you copied and create a pull request for your changes.</li>
        </ol>

        <h3>If you know Next.JS</h3>
        <ol>
          <li>Go to <a href="https://github.com/graveyardadmin/profilesite">this</a> GitHub repository and clone the users branch to your computer.</li>
          <li>Open the {`"./users/"`} folder, and create a file with your desired name. <br/><b>Note:</b> your application won't be accepted if you delete someone elses file.</li>
          <li>Open the {`"./styles/user/"`} folder, and create a {`".module.css"`} file with the same name as the function that you exported from your react page.</li>
          <li>Create your own fully custom Next.js webpage.</li>
          <li>Commit the changes to your branch that you copied and create a pull request for your changes.</li>
        </ol>
      </section>

    </div>
  )
}