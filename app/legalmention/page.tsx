export const metadata = {
  title: "Mentions Légales - Welling Marine",
  description:
    "Mentions légales et informations réglementaires du site Welling Marine.",
};

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-blue-600">
        Mentions Légales
      </h1>

      <p className="mb-6 text-lg">
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance dans l'économie numérique (LCEN), il est précisé aux
        utilisateurs du site https://www.welling-marine.com l'identité des
        différents intervenants dans le cadre de sa réalisation et de son suivi.
      </p>

      <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">
        1. Éditeur du site
      </h2>
      <p className="mb-4">Le présent site est édité par :</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Statut / Forme juridique :</strong> SAS
        </li>
        <li>
          <strong>Nom ou Dénomination sociale :</strong> Pelagos
        </li>
        <li>
          <strong>Siège social :</strong> 5 allée poussin 17137 l'Houmeau
        </li>
        <li>
          <strong>Numéro de SIRET :</strong> 10055139900015
        </li>
        <li>
          <strong>Immatriculation :</strong> RCS La Rochelle 100551399
        </li>
        <li>
          <strong>Capital social :</strong> au capital de 1000 €
        </li>
        <li>
          <strong>TVA intracommunautaire :</strong> FR20100551399
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">
        2. Directeur de la publication
      </h2>
      <p className="mb-6">
        Le Directeur de la publication du site est : Antoine Collignon.
      </p>

      <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">
        3. Hébergement du site
      </h2>
      <p className="mb-4">Le site est hébergé par la société suivante :</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Nom de l'hébergeur :</strong> OVH
        </li>
        <li>
          <strong>Raison sociale :</strong> OVH SAS
        </li>
        <li>
          <strong>Adresse postale :</strong> 2 rue Kellermann, 59100 Roubaix,
          France
        </li>
        <li>
          <strong>Téléphone :</strong> Téléphone : * 1007 (numéro unique,
          gratuit depuis un poste fixe en France) +33 9 72 10 10 07 (si tu
          appelles depuis l'étranger)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">
        4. Nous contacter
      </h2>
      <p className="mb-6">
        Pour toute question ou demande d'information concernant le site, vous
        pouvez nous adresser un message électronique à l'adresse suivante :
        contact@welling-marine.com.
      </p>
    </div>
  );
}
