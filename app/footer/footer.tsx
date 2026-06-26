import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="/logo/circle_logo_welling_marine.svg"
            alt="Welling Marine logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-right">
          <h3>Contacts</h3>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
          >
            <span>Mail :</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href="mailto:contact@welling-marine.fr">
                contact@welling-marine.com
              </a>
              <a href="mailto:contact@3lignes.fr">contact@3lignes.fr</a>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
          >
            <span>Tel :</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href="tel:+33635231245">+33 6 35 23 12 45</a>
              <a href="tel:+33783261761">+33 7 83 26 17 61</a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <a href="/legalmention">Mentions légales</a>
        <a href="/cgu">Conditions générales d'utilisation</a>
        <a href="/confidentiality">Politique de confidentialité</a>
      </div>
    </footer>
  );
}
