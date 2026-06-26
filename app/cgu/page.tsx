export const metadata = {
  title: "Conditions Générales d'Utilisation - Welling Marine",
  description: "Conditions d'utilisation des services du site Welling Marine.",
};

export default function CGU() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-indigo-600">
        Conditions Générales d'Utilisation (CGU)
      </h1>

      <h2 className="text-2xl font-semibold text-indigo-900 mt-8 mb-4">
        Article 1 : Objet
      </h2>
      <p className="mb-6">
        Les présentes CGU ont pour objet l'encadrement juridique des modalités
        de mise à disposition du site Welling Marine et de ses services. Ce
        document constitue un contrat entre l'Éditeur du site et l'Utilisateur.
        L'accès au site par l'Utilisateur signifie son acceptation pleine et
        entière des présentes CGU.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-900 mt-8 mb-4">
        Article 2 : Propriété intellectuelle
      </h2>
      <p className="mb-4">
        Les marques, logos, signes ainsi que tous les contenus du site (textes,
        images, graphismes) font l'objet d'une protection par le Code de la
        propriété intellectuelle et plus particulièrement par le droit d'auteur.
      </p>
      <p className="mb-6">
        L'Utilisateur doit solliciter l'autorisation préalable de l'Éditeur pour
        toute reproduction, publication, copie ou adaptation des différents
        contenus du site.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-900 mt-8 mb-4">
        Article 3 : Responsabilité de l'Éditeur
      </h2>
      <p className="mb-4">
        Les sources des informations diffusées sur le site sont réputées
        fiables, mais l'Éditeur ne garantit pas que le site soit totalement
        exempt de défauts, d'erreurs ou d'omissions.
      </p>
      <p className="mb-6">
        L'Éditeur ne pourra être tenu responsable des dommages directs ou
        indirects causés au matériel de l'utilisateur lors de l'accès au site,
        ou résultant d'un bug, d'une panne réseau ou d'une interruption
        temporaire du service.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-900 mt-8 mb-4">
        Article 4 : Liens hypertextes
      </h2>
      <p className="mb-6">
        Le site peut contenir des liens hypertextes menant vers des sites
        internet tiers. L'Utilisateur est informé qu'en cliquant sur ces liens,
        il quitte le présent site. L'Éditeur n'exerce aucun contrôle sur ces
        pages web externes et ne peut être tenu responsable de leur contenu.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-900 mt-8 mb-4">
        Article 5 : Droit applicable et juridiction
      </h2>
      <p className="mb-6">
        Le présent contrat est soumis à la législation française. L'Éditeur se
        réserve le droit de modifier ces CGU à tout moment. En cas de litige qui
        ne pourrait être résolu à l'amiable, les tribunaux français de La
        Rochelle seront seuls compétents pour régler le différend.
      </p>
    </div>
  );
}
