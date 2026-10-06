import { Wind } from "lucide-react";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#inicio">
          <Wind size={24} />
          <span>Terapia de los Vientos</span>
        </a>

        <div className="navLinks">
          <a href="#propuesta">Qué hacemos</a>
          <a href="#instrumentos">Instrumentos</a>
          <a href="#eventos">Eventos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="heroContent">
          <p className="eyebrow">
            Sikus · Música · Naturaleza
          </p>

          <h1>
            Terapia de
            <span>los Vientos.</span>
          </h1>

          <p className="description">
            Prácticas, experiencias e instrumentos artesanales para
            encontrarnos a través del aire y el sonido.
          </p>

          <div className="buttons">
            <a className="primaryButton" href="#instrumentos">
              Conocer la propuesta
            </a>

            <a className="secondaryButton" href="#contacto">
              Escribinos
            </a>
          </div>
        </div>

        <div className="heroImage">
            <img
                src="/images/tdv/portada.jpg"
                alt="Sebastián Kuselman tocando sikus en las sierras"
            />

            <div className="imageOverlay" />

            <div className="imageLabel">
                <span>Capilla del Monte</span>
                <strong>Córdoba, Argentina</strong>
            </div>
        </div>
      </section>
    </main>
  );
}