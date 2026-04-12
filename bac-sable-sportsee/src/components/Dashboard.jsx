import React from 'react';
import './Dashboard.css';
import Image from 'next/image';
//import Outline from '../public/OUTLINE.png';
//import IconeAI from '../public/icone-ai.png';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      {/* HEADER VERROUILLÉ */}
      <header className="dashboard-header">
        <div className="logo-container">
          <Image 
                          src="/Logo.png"  // Next regarde dans public tout seul
                          alt="Logo SportSee"
                          width={156}
                          height={24}
                        />
        </div>
        
        <div className="right-nav-block">
          <nav className="main-nav">
            <a href="#">Dashboard</a>
            <a href="#">Coach AI</a>
            <a href="#">Mon profil</a>
          </nav>
          
          <div className="user-action-block">
            <span className="separator">|</span>
            <a href="#" className="logout">Se déconnecter</a>
          </div>
        </div>
      </header>

      {/* CONTENU */}
      <main className="dashboard-content">
        
        <section className="ai-banner">
  <p className="ai-message">
  <span className="ai-icon">
    <span className="ai-icon">
  <Image 
    src="/icone-ai.png" 
    alt="Icône AI" 
    width={24} 
    height={24}      
    /* fill supprimé */
  />
</span>
      
  </span>
  {/* texte isolé dans son propre bloc */}
  <span className="ai-text">
    Posez vos questions sur votre programme, vos performances ou vos objectifs.
  </span>
</p>
          <button className="btn-primary">Lancer une conversation</button>
        </section>

        <section className="profile-header">
          <div className="profile-info">
            {/* vraie image à remplacer le div ci-dessous par une balise <img> */}
            <div className="avatar-placeholder">
                <div className="avatar-placeholder">
    <Image 
        src="http://localhost:8000/images/sophie.jpg" 
        alt="Avatar de Sophie Martin" 
        width={104}
        height={117}
        className="avatar-img"
        unoptimized
    />
</div>
            </div>
            <div>
              <h4>Sophie Martin</h4>
              <p className="member-since">Membre depuis le 14 juin 2023</p>
            </div>
          </div>
          <div className="total-distance-badge">
            <p><span>Distance totale parcourue</span></p>
            <div className="badge-value">
  <Image 
    src="/OUTLINE.png"
    alt="Icône distance" 
    width={24} /* Ajusté à 24 pour que ça soit harmonieux avec le texte */
    height={24}      
    /* fill supprimé */
  />
  <span>312 km</span> {/* entoure le texte d'un span pour que Flexbox le gère bien */}
</div>
          </div>
        </section>

        <h4 className="section-title">Vos dernières performances</h4>
        <section className="grid-2-cols">
          <div className="card chart-card">
            <h4 className='blue'>18km en moyenne</h4>
            <p className="subtitle">Total des kilomètres 4 dernières semaines</p>
            <div className="chart-placeholder">[Graphique Barres : Distance]</div>
          </div>

          <div className="card chart-card">
            <h4 className='red'>163 BPM</h4>
            <p className="subtitle">Fréquence cardiaque moyenne</p>
            <div className="chart-placeholder">[Graphique Mixte : BPM]</div>
          </div>
        </section>

        <h4 className="section-title">Cette semaine</h4>
        <p className="section-subtitle">Du 23/06/2025 au 30/06/2025</p>
        
        <section className="grid-2-cols bottom-grid">
          <div className="card donut-card">
            <h3 className='blue'>x4 <span className="unit-blue">sur objectif de 6</span></h3>
            <p className="subtitle">Courses hebdomadaires réalisées</p>
            <div className="chart-placeholder">[Graphique Donut : Objectif]</div>
          </div>

          <div className="stats-column">
            <div className="card stat-card">
              <p>Durée d'activité</p>
              <h4 className="blue">140 <span className="unit-blue">minutes</span></h4>
            </div>
            <div className="card stat-card">
              <p>Distance</p>
              <h4 className="red">21.7 <span className="unit-red">kilomètres</span></h4>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;