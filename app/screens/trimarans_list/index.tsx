import Link from "next/link";
import "./trimaransList.css";

export default function TrimaransList() {

  const TRIMARANS = [
  { id: "53", name: "Trimaran 53" },
];
  return (
    <main>
      <section className="backgroundWave">
      <div className="imageBlock">
          <Link href={`/trimaran/${TRIMARANS[0].id}`} className="imageContainer"> 
          <img src="/assets/well53.svg" alt="Trimaran" className="hoverImage" />
          <div className="overlay">
            <p style={{fontSize:64, fontWeight:'bold'}}>WELL 53</p>
          </div>
        </Link>
      </div>
      </section>
    </main>
  );
}
