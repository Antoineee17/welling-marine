import styles from "./innovation.module.css";
export default function Innovation() {
  return (
    <main>
      <section className={styles.hero} />

      <section className={styles["wave-section"]}>
        <div className={styles["wave-content"]}>
          <div className={styles["wave-left"]}>
            <h2 className={styles["first-title"]}>
              Naviguez vers l'innovation avec les trimarans Welling Marine
            </h2>
            <span className={styles["divider-line"]} />
            <p className={styles["p-first-description"]}>
              Avoir vécu plusieurs années à bord de mes propres bateaux a
              profondément influencé ma vision de ce qu’un bateau doit être.
              Quand on vit en mer, les priorités deviennent très claires : la
              fiabilité, la simplicité, la sécurité et le plaisir de naviguer
              prennent toute leur importance. Avec le temps, une réflexion s’est
              imposée : imaginer un bateau qui réunirait ces deux expériences,
              celle du constructeur et celle du navigateur. Un bateau pensé pour
              naviguer vraiment. Un bateau capable d’offrir de la performance
              sous voiles, tout en restant robuste et simple à utiliser. Un
              bateau dans lequel chaque choix de conception a un sens et répond
              à un usage réel en mer.
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
              <h2 className={styles.title}>Fiabilité</h2>
              <p className={styles["p-description"]}>
                La performance n'a de sens que si elle est durable. Nous avons
                conçu nos trimarans pour qu’ils soient une réponse concrète aux
                exigences du grand large, là où la fiabilité n’est pas une
                option, mais une condition essentielle. Chaque composant et
                chaque structure sont pensés pour offrir une robustesse
                infaillible, testée pour affronter les conditions réelles avec
                sérénité. Cette fiabilité s’exprime dans le choix de matériaux
                éprouvés et une ingénierie qui privilégie la durabilité sur le
                long terme. En limitant les points de rupture et en facilitant
                la maintenance, nous garantissons un bateau qui ne vous fait pas
                seulement rêver, mais qui vous accompagne en toute confiance,
                quelles que soient vos destinations. Vous naviguez ainsi avec
                l’esprit libre, porté par une machine conçue pour durer.
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
          <div className={styles["description-row"]}>
            <div className={styles["wave-left"]}>
              <h2 className={styles.title}>Simplicité</h2>
              <p className={styles["p-description"]}>
                Nous croyons que la performance ne doit jamais se faire au
                détriment de la simplicité. Nos trimarans sont conçus pour être
                intuitifs à utiliser, avec des systèmes accessibles et faciles à
                prendre en main, que ce soit pour la navigation ou l’entretien.
                Cette simplicité permet de se concentrer sur l’essentiel : le
                plaisir de naviguer. Elle s’exprime aussi dans des choix de
                design épurés, intégrant notamment une ouverture panoramique
                pour une grosse luminosité ainsi que pour les flotteurs.
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
          <div className={`${styles["description-row"]} ${styles.reverse}`}>
            <div className={styles["wave-left"]}>
              <h2 className={styles.title}>Sécurité</h2>
              <p className={styles["p-description"]}>
                La sécurité guide chacune de nos décisions de conception. La
                stabilité naturelle du trimaran est renforcée par une
                architecture pensée pour inspirer confiance, aussi bien en
                navigation côtière qu’au large. La largeur accrue de la
                plateforme offre une assise rassurante et sécurisante, tout en
                participant activement aux performances globales du bateau.
                Chaque détail est étudié pour garantir une navigation sereine,
                même dans des conditions exigeantes.
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
          <div className={styles["description-row"]}>
            <div className={styles["wave-left"]}>
              <h2 className={styles.title}>Plaisir de naviguer</h2>
              <p className={styles["p-description"]}>
                Naviguer doit rester une expérience unique et accessible. Nos
                trimarans sont conçus pour maximiser les sensations tout en
                offrant un confort exceptionnel. Leur design plus large pour une
                mise en avant de la performance et qui inclut plus de confort du
                fait de sa superficie plus large permet de profiter pleinement
                de chaque instant à bord. L’ouverture panoramique pour une
                grosse luminosité ainsi que pour les flotteurs renforce cette
                connexion avec l’environnement, offrant une immersion totale
                entre mer, ciel et navigation.
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
