/*
 * ========================================
 * PÁGINA PRINCIPAL
 *
 * Este archivo organiza todas las secciones
 * de la landing de Terapia de los Vientos.
 * ========================================
 */

/*
 * ICONOS DE LA INTERFAZ
 *
 * Todos pertenecen a Lucide React.
 */
import {
  ArrowDownRight,
  CalendarDays,
  Footprints,
  GraduationCap,
  Music2,
  Users,
  Wind
} from "lucide-react";

/*
 * COMPONENTES DE LA PÁGINA
 *
 * Importamos la sección interactiva
 * con las solapas de instrumentos.
 */
import InstrumentTabs from "../src/components/InstrumentTabs";

/*
 * COMPONENTE PRINCIPAL
 */
export default function Home() {
  return (
    <main>
      {/* ========================================
          MENÚ PRINCIPAL

          Los enlaces con # llevan a diferentes
          secciones dentro de la misma página.
      ======================================== */}

      <nav
        className="navbar"
        aria-label="Navegación principal"
      >
        {/* Marca y acceso para volver al inicio */}
        <a
          className="brand"
          href="#inicio"
          aria-label="Volver al inicio"
        >
          <Wind size={24} aria-hidden="true" />

          <span>Terapia de los Vientos</span>
        </a>

        {/* Enlaces internos del menú */}
        <div className="navLinks">
          <a href="#propuesta">
            Qué hacemos
          </a>

          <a href="#instrumentos">
            Instrumentos
          </a>

          <a href="#eventos">
            Eventos
          </a>

          <a href="#contacto">
            Contacto
          </a>
        </div>
      </nav>

      {/* ========================================
          PORTADA PRINCIPAL

          Es la primera sección que aparece
          cuando una persona entra al sitio.
      ======================================== */}

      <section
        className="hero"
        id="inicio"
      >
        {/* Columna izquierda de la portada */}
        <div className="heroContent">
          {/* Conceptos principales */}
          <p className="eyebrow">
            Sikus · Música · Naturaleza
          </p>

          {/* Título principal */}
          <h1>
            Terapia de

            <span>
              los Vientos.
            </span>
          </h1>

          {/* Resumen principal de la propuesta */}
          <p className="description">
            Prácticas, experiencias e instrumentos
            artesanales para encontrarnos a través del
            aire y el sonido.
          </p>

          {/* Botones principales */}
          <div className="buttons">
            <a
              className="primaryButton"
              href="#propuesta"
            >
              Conocer la propuesta
            </a>

            <a
              className="secondaryButton"
              href="#contacto"
            >
              Escribinos
            </a>
          </div>
        </div>

        {/* Columna derecha con la fotografía */}
        <div className="heroImage">
          {/*
           * Esta ruta coincide con el archivo que
           * actualmente aparece en tu carpeta public/images.
           */}
          <img
            src="/images/portada copy.jpg"
            alt="Sebastián Kuselman tocando sikus en las sierras"
          />

          {/* Capa oscura para mejorar el contraste */}
          <div className="imageOverlay" />

          {/* Ubicación del proyecto */}
          <div className="imageLabel">
            <span>
              Capilla del Monte
            </span>

            <strong>
              Córdoba, Argentina
            </strong>
          </div>
        </div>
      </section>

      {/* ========================================
          SECCIÓN: QUÉ HACEMOS

          Presenta las actividades principales
          de Terapia de los Vientos.
      ======================================== */}

      <section
        className="proposalSection"
        id="propuesta"
      >
        {/* Número y nombre de la sección */}
        <p className="sectionNumber">
          01 — TERAPIA DE LOS VIENTOS
        </p>

        {/* Encabezado de la propuesta */}
        <div className="proposalHeading">
          <h2>
            Una práctica nacida del

            <span>
              {" "}aire y el territorio.
            </span>
          </h2>

          <div className="proposalIntroduction">
            {/* Presentación del proyecto */}
            <p>
              La caña, el siku y la identidad andina
              forman parte de una propuesta viva.
              Trabajamos con el sonido, el cuerpo, el
              movimiento y la naturaleza desde un
              lenguaje humano y respetuoso.
            </p>

            <a href="#contacto">
              Conocer la propuesta

              <ArrowDownRight
                size={18}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Grilla de actividades */}
        <div className="proposalCards">
          {/* Tarjeta 01 */}
          <article className="proposalCard">
            <span className="cardNumber">
              01
            </span>

            <Wind
              size={31}
              aria-hidden="true"
            />

            <h3>
              Respiración
              <br />
              musicalizada
            </h3>

            <p>
              El aire se transforma en sonido y abre
              un espacio para volver al presente.
            </p>
          </article>

          {/* Tarjeta 02 destacada */}
          <article className="proposalCard proposalCardFeatured">
            <span className="cardNumber">
              02
            </span>

            <Footprints
              size={31}
              aria-hidden="true"
            />

            <h3>
              Caminatas
              <br />
              sopladas
            </h3>

            <p>
              Naturaleza, movimiento y sikus en
              experiencias que recorren el territorio.
            </p>
          </article>

          {/* Tarjeta 03 */}
          <article className="proposalCard">
            <span className="cardNumber">
              03
            </span>

            <Users
              size={31}
              aria-hidden="true"
            />

            <h3>
              Prácticas y
              <br />
              encuentros
            </h3>

            <p>
              Propuestas individuales y colectivas.
              No hace falta tener experiencia musical.
            </p>
          </article>

          {/* Tarjeta 04 */}
          <article className="proposalCard">
            <span className="cardNumber">
              04
            </span>

            <GraduationCap
              size={31}
              aria-hidden="true"
            />

            <h3>
              Cursos y
              <br />
              formación
            </h3>

            <p>
              Recorridos para comprender y llevar la
              respiración musicalizada a la práctica.
            </p>
          </article>

          {/* Tarjeta 05 */}
          <article className="proposalCard">
            <span className="cardNumber">
              05
            </span>

            <Music2
              size={31}
              aria-hidden="true"
            />

            <h3>
              Sikus e
              <br />
              instrumentos
            </h3>

            <p>
              Fabricación artesanal de sikus, antaras
              y diferentes instrumentos de viento.
            </p>
          </article>

          {/* Tarjeta 06 */}
          <article className="proposalCard">
            <span className="cardNumber">
              06
            </span>

            <CalendarDays
              size={31}
              aria-hidden="true"
            />

            <h3>
              Talleres y
              <br />
              eventos
            </h3>

            <p>
              Encuentros, talleres, experiencias
              abiertas y actividades especiales.
            </p>
          </article>
        </div>
      </section>

      {/* ========================================
          SECCIÓN: INSTRUMENTOS

          Este componente contiene las solapas,
          fotografías y animaciones con Anime.js.

          El componente ya incluye:
          id="instrumentos"
      ======================================== */}

      <InstrumentTabs />

      {/* ========================================
          SECCIÓN: EVENTOS Y FECHAS

          Por el momento se muestra un mensaje
          hasta que tengamos fechas confirmadas.
      ======================================== */}

      <section
        className="sectionPlaceholder sectionPlaceholderDark"
        id="eventos"
      >
        <p className="sectionNumber">
          03 — EVENTOS Y FECHAS
        </p>

        <h2>
          Todavía no hay fechas confirmadas.
        </h2>

        <p>
          Próximamente publicaremos talleres,
          caminatas y nuevos encuentros.
        </p>
      </section>

      {/* ========================================
          PIE DE PÁGINA Y CONTACTO
      ======================================== */}

      <footer id="contacto">
        <p>
          Terapia de los Vientos
        </p>

        <h2>
          ¿Respiramos juntos?
        </h2>

        {/*
         * Más adelante reemplazaremos este enlace
         * con el número real de WhatsApp.
         */}
        <a href="#">
          Próximamente: contacto por WhatsApp
        </a>
      </footer>
    </main>
  );
}