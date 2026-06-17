import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
     
      <h1>Page introuvable</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link href='/'>Retour à l'accueil</Link>
    </main>
  );
}
