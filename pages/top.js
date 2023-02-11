import HomeButton from "@/components/HomeButton";
import Link from "next/link";

export default function Top() {
  return(
    <div className="template no-bg">
      <section className="template-section">
        <h1 className="magic">Top profiles</h1>

        <p className="background">
          <b className="orange">Valdemar</b> 
          <br/>
          I chose this because it's me 
          <br/>
          <br/>
          <Link href="/users/valdemar">Visit.</Link>
        </p>

      </section>

      <div className="backgrounder"></div>
      <HomeButton/>
    </div>
  );
}