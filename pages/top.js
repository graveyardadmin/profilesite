import HomeButton from "@/components/HomeButton";
import LinkCard from "@/components/LinkCard";
import Link from "next/link";

export default function Top() {
  return(
    <div className="template no-bg">
      <section className="template-section">
        <h1 className="magic">Top profiles</h1>

        <LinkCard 
          title="Valdemar" 
          description="I chose this because it's me and I'm the best"
          url="/users/valdemar"
          link_text="Visit"
        />

        <LinkCard 
          title="Steph" 
          description="I chose this because there is literally zero other users"
          url="/users/steph"
          link_text="Visit (yucky)"
        />

      </section>

      <div className="backgrounder"></div>
      <HomeButton/>
    </div>
  );
}