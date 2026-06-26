export const metadata = {
  title: "Politique de Confidentialité - Welling Marine",
  description:
    "Découvrez comment Welling Marine protège et utilise vos données personnelles.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-emerald-500">
        Politique de Confidentialité
      </h1>

      <p className="mb-6 text-lg">
        La présente politique de confidentialité définit et vous informe de la
        manière dont Welling Marine utilise et protège les informations que vous
        nous transmettez lorsque vous utilisez ce site web.
      </p>

      <h2 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
        1. Données personnelles collectées
      </h2>
      <p className="mb-4">
        Nous pouvons être amenés à collecter les données personnelles suivantes
        vous concernant :
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone</li>
        <li>
          Données de connexion (localisation, provenance du device, device et
          OS)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
        2. Finalités du traitement
      </h2>
      <p className="mb-4">Les données que nous collectons ont pour but de :</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Répondre à vos demandes de contact</li>

        <li>
          Améliorer le fonctionnement du site et analyser son trafic de manière
          anonyme.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
        3. Base légale et durée de conservation
      </h2>
      <p className="mb-4">
        Le traitement de vos données est fondé sur votre consentement ou notre
        intérêt légitime. Vos informations personnelles sont conservées
        uniquement pour le temps correspondant à la finalité de la collecte :
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Données de contact : Maximum 3 ans après le dernier échange.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
        4. Destinataires et vos droits (RGPD)
      </h2>
      <p className="mb-4">
        Vos données restent strictement confidentielles et sont exclusivement
        destinées à Welling Marine . Conformément à la réglementation
        européenne, vous disposez des droits suivants :
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Droit d'accès, de rectification et d'effacement de vos données.</li>
        <li>Droit de retirer votre consentement à tout moment.</li>
      </ul>
      <p className="mb-6">
        Pour exercer ces droits, contactez-nous à : contact@welling-marine.com .
      </p>
    </div>
  );
}
