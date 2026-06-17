import styles from "./styles.module.css";

export default function History() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} />

      <section className={styles["wave-section"]}>
        <div className={styles["wave-content"]}>
          <div className={styles["wave-left"]}>
            <h2 className={styles["first-title"]}>
              Comment vous êtes venus l'idée de faire ce projet
            </h2>
            <span className={styles["divider-line"]} />
            <p className={styles["p-description"]}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
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
              <span className={styles["divider-line"]} />
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
