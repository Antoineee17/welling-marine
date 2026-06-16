import "./innovation.css";
export default function Innovation() {
  return (
    <main>
      <section className="hero" />

      <section className="wave-section">
        <div className="wave-content">
          <div className="wave-left">
            <h2 className="first-title">
              Naviguez vers l'innovation avec les trimarans Welling Marine
            </h2>
            <span className="divider-line" />
            <p className="p-first-description">
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
          <div className="description-row reverse">
            <div className="wave-left">
              <h2 className="title">Fiabilité</h2>
              <p className="p-description">
                Avoir vécu plusieurs années à bord de mes propres bateaux a
                profondément influencé ma vision de ce qu’un bateau doit être.
                Quand on vit en mer, les priorités deviennent très claires : la
                fiabilité, la simplicité, la sécurité et le plaisir de naviguer
                prennent toute leur importance. Avec le temps, une réflexion
                s’est imposée : imaginer un bateau qui réunirait ces deux
                expériences, celle du constructeur et celle du navigateur. Un
                bateau pensé pour naviguer vraiment. Un bateau capable d’offrir
                de la performance sous voiles, tout en restant robuste et simple
                à utiliser.
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
          <div className="description-row">
            <div className="wave-left">
              <h2 className="title">Simplicité</h2>
              <p className="p-description">
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

            <div className="wave-right">
              <img
                src="/assets/boat_home.png"
                alt="Boat"
                className="wave-image"
              />
            </div>
          </div>
          <div className="description-row reverse">
            <div className="wave-left">
              <h2 className="title">Sécurité</h2>
              <p className="p-description">
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

            <div className="wave-right">
              <img
                src="/assets/boat_home.png"
                alt="Boat"
                className="wave-image"
              />
            </div>
          </div>
          <div className="description-row">
            <div className="wave-left">
              <h2 className="title">Plaisir de naviguer</h2>
              <p className="p-description">
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
