import styles from "./styles.module.css";

export default function History() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>
            Well 53 : un trimaran océanique novateur
          </h1>
          <p className={styles["hero-description"]}>
            En dehors d’un chantier majeur au concept très affirmé, les
            trimarans sont particulièrement peu représentés sur le marché des
            multicoques de croisière océanique très largement occupé par les
            catamarans. Fort de ce constat, Welling Marine et 3 Lignes
            Architecture Navale proposent un bateau moderne, simple, et marin.
            Du trimaran il reprend les qualités marines et l’espace considérable
            de la nacelle, du catamaran il emprunte la disposition intime des
            aménagements et un cockpit pleine largeur. De cette approche il
            résulte un bateau aux espaces diurnes inédits dans cette taille, au
            plan de pont simple et ergonomique et au rapport
            facilité/performance inédit. S’adressant à des propriétaires
            exigeants, il est construit en petite série avec une vraie capacité
            d’adaptation aux programmes les plus ambitieux.
          </p>
        </div>
      </section>

      <section className={styles["wave-section"]}>
        <div className={styles["wave-content"]}>
          <div className={styles["wave-left"]}>
            <h2 className={styles["first-title"]}>
              Comment vous êtes venus l'idée de faire ce projet ?
            </h2>
            <p className={styles["p-main-description"]}>
              Développer mes propres bateaux n’a jamais été une simple idée
              passagère: c’est l’objectif d’une vie. Porter en soi une vision
              précise de l’architecture navale et vouloir la concrétiser est une
              chose, mais transformer cette intention en réalité exige une
              alchimie humaine bien particulière.
            </p>
            <h3 className={styles["substitle"]}>Une rencontre charnière</h3>
            <p className={styles["p-main-description"]}>
              Le véritable déclic de cette aventure est né d'une synergie. La
              rencontre entre Guillaume COLLIGNON, Sébastien FOLLAIN et Nicolas
              PURNU a été l’élément fédérateur et le tournant charnière de ce
              projet. Autour d'une vision commune, nos compétences et nos
              passions se sont alignées pour donner une impulsion décisive à ce
              qui n'était alors qu'un dessein personnel.
            </p>

            <h3 className={styles["substitle"]}>Le début d'une nouvelle ère</h3>
            <p className={styles["p-main-description"]}>
              Nous n’en sommes aujourd’hui qu’aux prémices de l’aventure, mais
              notre conviction est absolue : ce projet va révolutionner le monde
              du multicoque de croisière rapide. Nous ne construisons pas
              seulement un nouveau modèle, nous redéfinissons l'expérience de la
              navigation au large.
            </p>
          </div>

          <div className={styles["wave-right"]}>
            <img
              src="/assets/boat_home.png"
              alt="Boat"
              className={styles["wave-image"]}
            />
          </div>
        </div>
        <div className={styles.background} />
      </section>

      <section className={styles["description-home"]}>
        <div className={styles["description-content"]}>
          <div className={`${styles["description-row"]} ${styles.reverse}`}>
            <div className={styles["wave-left"]}>
              <h2 className={styles["second-title"]}>
                Welling Marine : un nouveau chantier de confiance
              </h2>
              <p className={styles["p-description"]}>
                Fondé en 2026, le chantier Welling Marine est le fruit de la
                longue collaboration entre Guillaume COLLIGNON et Sébastien
                FOLLAIN. Leur profils complémentaires garantissent un large
                spectre de connaissances indispensable à la bonne réalisation
                d’un projet aussi ambitieux que le Well 53.
              </p>
            </div>

            <div className={styles["wave-right"]}>
              <img
                src="/assets/logo_welling_marine.jpg"
                alt="Welling Marine"
                className={styles["wave-image"]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles["description-home"]}>
        <div className={styles["description-content"]}>
          <div className={`${styles["description-row"]}`}>
            <div className={styles["wave-left"]}>
              <h2 className={styles["second-title"]}>
                3 Lignes Architecture Navale : un concepteur d'expérience
              </h2>
              <p className={styles["p-description"]}>
                Crée en 2019 à Lorient, 3 Lignes Architecture Navale partage son
                activité entre la conception de nouveaux projets et les études
                techniques en sous-traitance pour plusieurs chantiers navals.
                Nicolas PURNU cumule plus de 20 ans d’expérience dans la
                conception de multicoques dont une majeure partie au sein d’un
                grand cabinet Rochelais.
              </p>
            </div>

            <div className={styles["wave-right"]}>
              <img
                src="/assets/3LAN_logo.png"
                alt="3 Lignes Architecture Navale"
                className={styles["wave-image"]}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
