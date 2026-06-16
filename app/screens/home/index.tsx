import "./home.css";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">L’Horizon, Version Grand Angle</h1>

          <div className="hero-separator">
            <span className="hero-separator-line" />
            <div className="hero-separator-icon anchor-icon" aria-label="Anchor" />
            <span className="hero-separator-line" />
          </div>

          <p className="hero-subtitle">
            Welling Marine : Plus de stabilité, plus de sensations. Redécouvrez
            la liberté sur un trimaran conçu pour l'exceptionnel
          </p>
        </div>
      </section>

      <section className="title-home">
        <div className="divider">
          <span className="divider-line" />

          <div className="divider-text">
            <p className="divider-subtitle">Redéfinir la liberté en mer avec</p>
            <h2 className="divider-title">Welling Marine</h2>
          </div>

          <span className="divider-line" />
        </div>
      </section>
      <section className="wave-section">
        <div className="wave-content">
          <h2 className="first-title">Le voyage commence ici</h2>
          <span className="divider-line" />
          <p className="first-description">
            Naviguer n’est plus seulement une question de destination, mais une
            nouvelle manière d’habiter l’instant. Avec nos trimarans, nous avons
            repensé l'architecture navale pour effacer les contraintes et ne
            garder que l'essentiel : une connexion pure avec les éléments. Entre
            design avant-gardiste et respect de la biodiversité marine, chaque
            mille parcouru devient une expérience sensorielle unique, où le
            confort rencontre enfin la performance brute.
          </p>
        </div>

        <img src="/assets/boat_home.png" alt="Boat" className="wave-image" />
      </section>
      <div className="background" />
      <section className="description-home">
        <div className="description-content">
          <div className="description-row reverse">
            <div className="wave-left">
              <h2 className="title">
                L’équilibre parfait entre audace technique et sérénité absolue
              </h2>
              <span className="divider-line" />
              <p className="p-description">
                Nos bateaux ne sont pas de simples embarcations ; ce sont des
                concentrés d'innovation conçus pour repousser les limites de la
                plaisance traditionnelle. En choisissant la stabilité
                exceptionnelle du trimaran, vous accédez à une navigation plus
                fluide, plus sûre et plus proche de l'eau. Oubliez les compromis
                et laissez-vous porter par une technologie qui s’efface pour
                laisser place à l’émotion.
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
        {/* CONTACT */}
        <div className="contact-block">
          <p className="contact-title">Contactez-nous !!</p>

          <div className="contact-content">
            {/* TELEPHONE */}
            <div className="contact-item">
              <img
                src="/assets/phone.svg"
                alt="Phone"
                height={106}
                width={106}
                color={"var(--color-night-blue)"}
              />
              <div>
                <p className="contact-label">PAR TÉLÉPHONE</p>
                <p className="contact-value">06 35 23 12 45</p>
              </div>
            </div>

            {/* SEPARATEUR */}
            <div className="contact-divider" />

            {/* EMAIL */}
            <div className="contact-item">
              <img
                src="/assets/mail.svg"
                alt="Mail"
                height={96}
                width={96}
                color={"var(--color-night-blue)"}
              />
              <div>
                <p className="contact-label">PAR EMAIL</p>
                <p className="contact-value">contact@welling-marine.fr</p>
              </div>
            </div>
          </div>

          {/* ICONE ANCRE */}
          <div className="contact-anchor">
            <img
              src="/assets/anchor.svg"
              alt="Anchor"
              height={48}
              width={48}
              color={"var(--color-night-blue)"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
