
// Indispensable pour utiliser le moteur interactif de React
"use client"; 

import Image from "next/image";
import Link from "next/link";
// Les outils pour la mémoire, la redirection et les cookies
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import styles from "./page.module.css"; 


export default function LoginPage() {

   // Création des "mémoires" et du GPS (le routeur)
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

// La fonction "Moteur" qui parle au backend
  const manageLogin = async (e: any) => {
    e.preventDefault(); // Empêche la page de sauter
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("sportsee_token", data.token); // bracelet VIP
        router.push("/dashboard"); // redirige vers la nouvelle route
      } else {
        setErrorMessage("Identifiants incorrects");
      }
    } catch (error) {
      setErrorMessage("Serveur injoignable");
    }
  };

  return (
    <div className={styles.container}>
      
      {/* --- COLONNE GAUCHE : Formulaire (43%) --- */}
      <div className={styles.leftColumn}>
        
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            {/*<Image src={Logo} alt="Logo SportSee" width={100} height={100} />*/}
            
            <Image 
                          src="/Logo.png"  // Next regarde dans public tout seul
                          alt="Logo SportSee"
                          width={100}
                          height={100}
                        />
          </div>
        </div>

        {/* Carte blanche du formulaire */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>
            Transformez <br /> vos stats en résultats
          </h2>

          <h3 className={styles.formSubtitle}>
            Se connecter
          </h3>

          {/* branche le moteur sur le formulaire */}
          <form className={styles.form} onSubmit={manageLogin}>

          {/*<form className={styles.form}>*/}
            {/* Champ Email */}
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">
                Adresse Email
              </label>
              <input 
                //type="email" 
                type="text"
                id="email" 
                placeholder="sophiemartin@mail.com"
                className={styles.input} 
                // relie le champ à la mémoire "username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Champ Mot de passe */}
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="password">
                Mot de passe
              </label>
              <input 
                type="password" 
                id="password" 
                placeholder="Votre mot de passe"
                className={styles.input} 
                // relie le champ à la mémoire "password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* 9. AJOUT : L'écran de contrôle pour afficher les erreurs en rouge */}
            {errorMessage && (
              <p className={styles.errorMessage}>
                {errorMessage}
              </p>
            )}

            {/* Bouton de soumission */}
            <button type="submit" className={styles.submitBtn}>
              Se connecter
            </button>
          </form>

          {/* Lien Mot de passe oublié */}
          <div className={styles.forgotPasswordContainer}>
            <Link href="#" className={styles.forgotPasswordLink}>
              Mot de passe oublié ?
            </Link>
          </div>
        </div>
      </div>

      {/* --- COLONNE DROITE : Image d'illustration (60%) --- */}
      <div className={styles.rightColumn}>
        <Image
          src="/Background picture.png" /* image dans le dossier public/ */ 
          alt="Coureurs en plein marathon"
          fill
          className={styles.image}
          priority
        />
        
        {/* Le petit badge ovale */}
        <div className={styles.badge}>
          <p className={styles.badgeText}>
            Analysez vos performances en un clin d’œil,<br />
            suivez vos progrès et atteignez vos objectifs.
          </p>
        </div>
      </div>

    </div>
  );
}







