import "./styles.css";
export default function History() {
  return (
    <main>
      <section className="hero" />

      <section className="wave-section">
        <div className="wave-content">
          <div className="wave-left">
            <h2 className="first-title">Comment vous êtes venus l'idée de faire ce projet</h2>
            <span className="divider-line" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className="wave-right">
            <img
              src="/assets/boat_home.png"
              alt="Boat"
              className="wave-image"
            />
          </div>
        </div>
        <div className="background" />
      </section>
      <section className="description-home">
        <div className="description-content">
          {/* LIGNE PRINCIPALE */}
          <div className="description-row reverse">
            <div className="wave-left">
              <h2 className="second-title">Pourquoi le Well 53 devrait exister.</h2>
              <span className="divider-line" />
              <p className="p-description">
                Chaque bateau naît d’une idée. Mais certains naissent surtout
                d’une expérience accumulée au fil des années. En travaillant
                dans la construction navale depuis l’âge de 19 ans, au cœur des
                chantiers de La Rochelle, j’ai participé à la fabrication de
                nombreux bateaux de 20 à 75 pieds. Cette immersion dans le monde
                du chantier m’a permis de comprendre en profondeur la structure
                des bateaux, les choix techniques qui fonctionnent réellement et
                l’importance de chaque détail dans la fiabilité d’une unité. Le
                WELL53 devait exister parce qu’il est le résultat d’un parcours,
                d’une passion et d’une vision claire de ce que doit être un
                bateau fait pour la mer.
              </p>
            </div>

            <div className="wave-right">
              <img
                src="/assets/boat_home.png"
                alt="Boat"
                className="wave-image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
