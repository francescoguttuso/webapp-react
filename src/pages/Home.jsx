import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-content">
          <p className="home-label">Benvenuto su Universo Videogiochi</p>

          <h1>
            Scopri il mondo
            <span> dei videogiochi</span>
          </h1>

          <p className="home-description">
            Esplora la nostra raccolta di videogiochi, scopri nuove avventure e
            leggi le recensioni della community.
          </p>

          <Link to="/games" className="home-button">
            Scopri i giochi
          </Link>
        </div>
      </section>

      <section className="home-features">
        <div>
          <h3>🎮 Esplora</h3>
          <p>Scopri giochi di generi e console differenti.</p>
        </div>

        <div>
          <h3>⭐ Recensioni</h3>
          <p>Leggi le opinioni e le valutazioni sui videogiochi.</p>
        </div>

        <div>
          <h3>⭐ Inserisci la tua recensione</h3>
          <p>Condividi la tua opinione sui tuoi videogiochi preferiti.</p>
        </div>
      </section>
    </main>
  );
};
