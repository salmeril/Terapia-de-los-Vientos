"use client";

/*
 * ========================================
 * COMPONENTE: INSTRUMENT TABS
 *
 * Muestra las categorías de instrumentos
 * mediante solapas interactivas.
 *
 * Cuando se selecciona una categoría:
 * - Cambia la fotografía.
 * - Cambia la información.
 * - Anime.js anima el contenido.
 * - El botón abre Tiendanube o WhatsApp.
 * ========================================
 */

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { ArrowUpRight, Wind } from "lucide-react";

/*
 * Importamos la función que genera
 * automáticamente el enlace de WhatsApp.
 */
import { getWhatsAppUrl } from "../data/siteConfig";


/*
 * ========================================
 * INFORMACIÓN DE LOS INSTRUMENTOS
 *
 * Cuando Tiendanube esté publicada,
 * agregaremos la dirección de cada producto
 * dentro de su propiedad storeUrl.
 * ========================================
 */

const instruments = [
  {
    id: "sikus",

    tab: "Sikus",

    title: "Sikus artesanales",

    subtitle:
      "Instrumentos de viento construidos a mano",

    description:
      "Cada siku nace de un proceso artesanal que respeta el material, su sonido y su identidad. Creamos instrumentos para la práctica musical, los encuentros y la conexión con la respiración.",

    image:
      "/images/instrumentos/sikus.jpg",

    alt:
      "Sikus artesanales fabricados por Terapia de los Vientos",

    details: [
      "Construcción artesanal",
      "Afinación cuidada",
      "Distintos tamaños"
    ],

    /*
     * Cuando exista el producto en Tiendanube,
     * reemplazaremos el texto vacío por su URL.
     */
    storeUrl: ""
  },

  {
    id: "antaras",

    tab: "Antaras",

    title: "Antaras artesanales",

    subtitle:
      "Sonidos que conectan con la tierra",

    description:
      "Antaras fabricadas artesanalmente para quienes desean explorar el sonido del viento. Cada pieza posee una terminación propia y pequeñas diferencias que la hacen única.",

    image:
      "/images/instrumentos/antaras.jpg",

    alt:
      "Antara artesanal de Terapia de los Vientos",

    details: [
      "Selección de cañas",
      "Terminación manual",
      "Piezas únicas"
    ],

    storeUrl: ""
  },

  {
    id: "especiales",

    tab: "Piezas especiales",

    title: "Instrumentos especiales",

    subtitle:
      "Creaciones realizadas con tiempo y dedicación",

    description:
      "También desarrollamos instrumentos especiales y personalizados. Trabajamos diferentes escalas, tamaños y combinaciones para acompañar nuevas formas de expresión.",

    image:
      "/images/instrumentos/especiales.jpg",

    alt:
      "Instrumento artesanal especial de Terapia de los Vientos",

    details: [
      "Diseños especiales",
      "Trabajo personalizado",
      "Consulta previa"
    ],

    storeUrl: ""
  }
];


/*
 * ========================================
 * COMPONENTE PRINCIPAL
 * ========================================
 */

export default function InstrumentTabs() {
  /*
   * La sección comienza mostrando los sikus.
   */
  const [activeInstrument, setActiveInstrument] =
    useState("sikus");

  /*
   * Referencia del contenido que será
   * animado mediante Anime.js.
   */
  const contentRef = useRef(null);

  /*
   * Busca dentro del listado el instrumento
   * correspondiente a la solapa seleccionada.
   */
  const selectedInstrument = instruments.find(
    (instrument) =>
      instrument.id === activeInstrument
  );


  /*
   * ========================================
   * ANIMACIÓN DEL CONTENIDO
   *
   * Se ejecuta cada vez que una persona
   * selecciona una categoría diferente.
   * ========================================
   */

  useEffect(() => {
    if (!contentRef.current) return;

    const animatedElements =
      contentRef.current.querySelectorAll(
        "[data-instrument-item]"
      );

    animate(animatedElements, {
      opacity: [0, 1],

      translateY: [24, 0],

      duration: 650,

      /*
       * Cada elemento comienza su animación
       * después del elemento anterior.
       */
      delay: (_, index) => index * 90,

      ease: "out(3)"
    });
  }, [activeInstrument]);


  /*
   * Evita errores si no se encuentra
   * una categoría seleccionada.
   */
  if (!selectedInstrument) {
    return null;
  }


  /*
   * ========================================
   * ENLACE DEL BOTÓN
   *
   * Si hay una URL de Tiendanube:
   * lleva al producto.
   *
   * Si todavía no hay una URL:
   * abre WhatsApp con un mensaje preparado.
   * ========================================
   */

  const buttonUrl =
    selectedInstrument.storeUrl ||
    getWhatsAppUrl(
      `Hola, quisiera consultar por ${selectedInstrument.title} de Terapia de los Vientos.`
    );

  const buttonText =
    selectedInstrument.storeUrl
      ? "Ver en la tienda"
      : "Consultar por WhatsApp";


  return (
    <section
      className="instrumentSection"
      id="instrumentos"
    >
      {/* ========================================
          ENCABEZADO DE LA SECCIÓN
      ======================================== */}

      <div className="instrumentHeading">
        <div className="instrumentTitleBlock">
          <p className="sectionEyebrow">
            <Wind
              size={18}
              aria-hidden="true"
            />

            Nuestro oficio
          </p>

          <h2>
            Instrumentos que nacen

            <span>
              {" "}de la tierra y del viento.
            </span>
          </h2>
        </div>

        <p className="instrumentIntroduction">
          Fabricamos instrumentos artesanalmente,
          respetando los tiempos de cada material y
          buscando que cada pieza tenga una identidad
          sonora propia.
        </p>
      </div>


      {/* ========================================
          SOLAPAS DE INSTRUMENTOS
      ======================================== */}

      <div
        className="instrumentTabs"
        role="tablist"
        aria-label="Categorías de instrumentos"
      >
        {instruments.map((instrument) => {
          /*
           * Comprueba si esta categoría
           * se encuentra seleccionada.
           */
          const isActive =
            activeInstrument === instrument.id;

          return (
            <button
              key={instrument.id}
              id={`tab-${instrument.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${instrument.id}`}
              tabIndex={isActive ? 0 : -1}
              className={
                isActive
                  ? "instrumentTab instrumentTabActive"
                  : "instrumentTab"
              }
              onClick={() =>
                setActiveInstrument(instrument.id)
              }
            >
              {instrument.tab}
            </button>
          );
        })}
      </div>


      {/* ========================================
          CONTENIDO DEL INSTRUMENTO
      ======================================== */}

      <div
        className="instrumentContent"
        ref={contentRef}
        key={selectedInstrument.id}
        id={`panel-${selectedInstrument.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${selectedInstrument.id}`}
      >
        {/* Fotografía del instrumento */}

        <div
          className="instrumentImage"
          data-instrument-item
        >
          <img
            src={selectedInstrument.image}
            alt={selectedInstrument.alt}
          />

          {/* Degradado sobre la fotografía */}
          <div
            className="instrumentImageOverlay"
            aria-hidden="true"
          />

          {/* Información sobre la fotografía */}
          <p className="instrumentImageLabel">
            Hecho artesanalmente

            <span>
              Capilla del Monte, Córdoba
            </span>
          </p>
        </div>


        {/* Información del instrumento */}

        <div className="instrumentInformation">
          <p
            className="instrumentSubtitle"
            data-instrument-item
          >
            {selectedInstrument.subtitle}
          </p>

          <h3 data-instrument-item>
            {selectedInstrument.title}
          </h3>

          <p
            className="instrumentDescription"
            data-instrument-item
          >
            {selectedInstrument.description}
          </p>


          {/* Características principales */}

          <ul
            className="instrumentDetails"
            data-instrument-item
          >
            {selectedInstrument.details.map(
              (detail) => (
                <li key={detail}>
                  <span aria-hidden="true" />

                  {detail}
                </li>
              )
            )}
          </ul>


          {/* Botón hacia Tiendanube o WhatsApp */}

          <a
            className="instrumentButton"
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-instrument-item
          >
            {buttonText}

            <ArrowUpRight
              size={19}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}