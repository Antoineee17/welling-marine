import styles from "./styles.module.css";

export default function History() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} />

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
            <h3
              className={styles["substitle"]}
            >
              Une rencontre charnière
            </h3>
            <p className={styles["p-main-description"]}>
              Le véritable déclic de cette aventure est né d'une synergie. La
              rencontre avec Sébastien Follain et Nicolas Purnu a été l’élément
              fédérateur et le tournant charnière de ce projet. Autour d'une
              vision commune, nos compétences et nos passions se sont alignées
              pour donner une impulsion décisive à ce qui n'était alors qu'un
              dessein personnel.
            </p>

            <h3
              className={styles["substitle"]}
            >
              Le début d'une nouvelle ère
            </h3>
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
                Pourquoi le Well 53 devrait exister.
              </h2>
              <p className={styles["p-description"]}>
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

            <div className={styles["wave-right"]}>
              <img
                src="/assets/boat_home.png"
                alt="Boat"
                className={styles["wave-image"]}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
