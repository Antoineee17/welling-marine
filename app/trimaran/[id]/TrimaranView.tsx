"use client";
import { Anchor } from 'lucide-react';
import { useState } from "react";
import "./styles.css";
export default function TrimaranView({ trimaran }: any) {
  const [current, setCurrent] = useState(0);
  const [version, setVersion] = useState(0);

  return (
    <div className="trimaranPage">
      <div className="carousel">
        <div className="carouselWrapper">
          <img src={trimaran.images[current]} className="mainImage" />

          {/* LEFT */}
          <button
            className="navButton leftBtn"
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? trimaran.images.length - 1 : prev - 1,
              )
            }
          >
            ←
          </button>

          {/* RIGHT */}
          <button
            className="navButton rightBtn"
            onClick={() =>
              setCurrent((prev) =>
                prev === trimaran.images.length - 1 ? 0 : prev + 1,
              )
            }
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="carousel-controls">
          {trimaran.images.map((_: any, i: number) => (
            <button
              key={i}
              className={i === current ? "activeDot" : ""}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
      <section className="caracteristiques-section">
  
  {/* Titre avec les icônes */}
  <div className="title-wrapper">
    <Anchor className="anchor-icon" strokeWidth={3} />
    <h2>Caractéristiques</h2>
    <Anchor className="anchor-icon" strokeWidth={3} />
  </div>

  {/* Groupe de boutons */}
  <div className="version-buttons">
    {trimaran.versions.map((_: any, i: number) => (
      <button
        key={i}
        className={`individual-button ${version === i ? 'active' : ''}`}
        onClick={() => setVersion(i)}
      >
        Version {i + 1}
      </button>
    ))}
  </div>

</section>
      <div className="trimaran-content">
        <div className="left">
          <img src={trimaran.versions[version]} className="versionImage" />
        </div>

        <div className="right">
          <div className="spec-grid">
            <Spec label="Longueur hors tout" value={trimaran.specs.longueur} />
            <Spec label="Largeur hors tout" value={trimaran.specs.largeur} />
            <Spec label="Longueur de coque" value={trimaran.specs.coque} />
            <Spec label="Tirant d'eau" value={trimaran.specs.tirant} />
            <Spec label="Surface grand voile" value={trimaran.specs.gv} />

            <Spec label="Surface génois" value={trimaran.specs.genois} />
            <Spec label="Réservoir eau douce" value={trimaran.specs.eau} />
            <Spec label="Réservoir gazole" value={trimaran.specs.gazole} />
            <Spec
              label="Nombre de couchages"
              value={trimaran.specs.couchages}
            />
            <Spec label="Nombre de cabines" value={trimaran.specs.cabines} />
          </div>
        </div>
      </div>
      <div className="featureSection">
        {/* BLOC 1 */}
        <div className="featureRow">
          <div className="featureImageWrapper">
            <img src="/assets/53/3128.jpg" className="featureImage" />
          </div>

          <div className="featureText">
            <h2>Performance exceptionnelle</h2>
            <p>
              Ce trimaran offre une vitesse remarquable grâce à sa conception
              légère et ses lignes hydrodynamiques optimisées.
            </p>
          </div>
        </div>

        {/* BLOC 2 (inversé) */}
        <div className="featureRow reverse">
          <div className="featureImageWrapper">
            <img src="/assets/53/3123.jpg" className="featureImage" />
          </div>

          <div className="featureText">
            <h2>Confort à bord</h2>
            <p>
              Des espaces de vie spacieux et lumineux pensés pour la navigation
              longue durée. Une personnalisation possible pour répondre aux besoins spécifiques de chaque propriétaire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="spec">
      <p className="spec-label">{label}</p>
      <p className="spec-value">{value}</p>
    </div>
  );
}
