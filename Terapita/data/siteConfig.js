/*
 * ========================================
 * CONFIGURACIÓN GENERAL DEL SITIO
 *
 * Desde este archivo administramos:
 * - Información del proyecto.
 * - WhatsApp.
 * - Tiendanube.
 * - Redes sociales.
 *
 * Así evitamos repetir enlaces en distintos
 * componentes de la página.
 * ========================================
 */

export const siteConfig = {
  /*
   * INFORMACIÓN GENERAL
   */
  name: "Terapia de los Vientos",

  location: "Capilla del Monte, Córdoba",

  /*
   * WHATSAPP
   *
   * Número de Uruguay:
   * 598 + número sin espacios ni símbolos.
   */
  whatsappNumber: "59897288385",

  /*
   * Mensaje que aparecerá escrito cuando
   * una persona abra WhatsApp.
   */
  whatsappMessage:
    "Hola, quisiera conocer más sobre Terapia de los Vientos, sus experiencias y los instrumentos artesanales.",

  /*
   * TIENDANUBE
   *
   * Mientras la tienda no esté publicada,
   * permanece vacío y los botones llevan
   * automáticamente a WhatsApp.
   */
  storeUrl: "",

  /*
   * REDES SOCIALES
   */
  social: {
    instagram:
      "https://www.instagram.com/terapiadelosvientos/",

    facebook:
      "https://www.facebook.com/terapiadelosvientos",

    /*
     * TikTok permanece vacío hasta crear
     * o terminar de configurar el perfil.
     */
    tiktok: "",

    youtube:
      "https://www.youtube.com/@terapiadelosvientosoficial/videos"
  }
};


/*
 * ========================================
 * GENERADOR DEL ENLACE DE WHATSAPP
 *
 * No es necesario editar esta función.
 * ========================================
 */

export function getWhatsAppUrl(customMessage = "") {
  /*
   * Permite utilizar un mensaje personalizado.
   * Si no se proporciona ninguno, utiliza
   * el mensaje general configurado arriba.
   */
  const message =
    customMessage || siteConfig.whatsappMessage;

  const encodedMessage =
    encodeURIComponent(message);

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}


/*
 * ========================================
 * ENLACE DE COMPRA O CONSULTA
 *
 * Si Tiendanube ya está publicada, devuelve
 * el enlace de la tienda.
 *
 * Mientras no exista, devuelve WhatsApp.
 * ========================================
 */

export function getStoreOrWhatsAppUrl() {
  if (siteConfig.storeUrl) {
    return siteConfig.storeUrl;
  }

  return getWhatsAppUrl(
    "Hola, quisiera consultar por los instrumentos artesanales de Terapia de los Vientos."
  );
}