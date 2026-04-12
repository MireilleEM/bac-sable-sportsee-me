import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1>
        Tableau de bord
      </h1>
      <p>Bienvenue dans le tableau de bord</p>
      
      <Link href="/">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}