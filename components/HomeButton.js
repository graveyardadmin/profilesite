import Link from "next/link";

export default function HomeButton() {
  return(
    <div className="homeNav">
      <Link href="/" ><a className="magic"><b>3x00</b></a></Link>
    </div>
  );
}