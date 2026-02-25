/**
 * Spanish translations for tour display fields.
 * Keyed by tour ID from tourData.ts.
 */

export interface TourTranslationEs {
  title: string;
  shortTitle: string;
  shortDescription: string;
  description: string;
  h1: string;
  duration: string;
  badge?: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { time: string; title: string; description: string }[];
}

export const tourTranslationsEs: Record<string, TourTranslationEs> = {
  "classic-day-tour": {
    title: "Tour Clásico a Chichén Itzá desde Cancún",
    shortTitle: "Tour Clásico de Día",
    shortDescription: "Tour guiado de día completo con nado en cenote y almuerzo en Valladolid.",
    description: "Vive la maravilla de Chichén Itzá con nuestro tour guiado más popular. Incluye nado en el Cenote Ik Kil, almuerzo buffet en Valladolid y guía arqueólogo bilingüe experto.",
    h1: "Tour a Chichén Itzá desde Cancún – Experiencia de Día Completo",
    duration: "12 horas",
    badge: "Más Vendido",
    highlights: [
      "Exploración del Patrimonio de la Humanidad UNESCO",
      "Refrescante nado en el Cenote Ik Kil",
      "Almuerzo buffet tradicional yucateco",
      "Guía arqueólogo bilingüe certificado",
      "Transporte de lujo con aire acondicionado",
      "Tiempo libre para explorar y comprar"
    ],
    inclusions: [
      "Transporte ida y vuelta con aire acondicionado",
      "Guía arqueólogo certificado (inglés/español)",
      "Entrada a Chichén Itzá",
      "Acceso y nado en Cenote Ik Kil",
      "Almuerzo buffet en Valladolid",
      "Agua embotellada y snacks",
      "Cobertura de seguro"
    ],
    exclusions: ["Propinas para guía y conductor", "Gastos personales", "Seguro de viaje", "Souvenirs"],
    itinerary: [
      { time: "6:00 AM", title: "Recogida en Hotel", description: "Cómoda van con AC te recoge en el lobby de tu hotel en la Zona Hotelera de Cancún." },
      { time: "9:30 AM", title: "Llegada a Chichén Itzá", description: "Llega antes que las multitudes con acceso temprano a la zona arqueológica Patrimonio de la Humanidad." },
      { time: "12:00 PM", title: "Nado en Cenote Ik Kil", description: "Refréscate con un nado en este impresionante cenote natural, uno de los más bellos de Yucatán." },
      { time: "1:30 PM", title: "Almuerzo en Valladolid", description: "Disfruta de un almuerzo buffet yucateco tradicional con especialidades locales." },
      { time: "3:00 PM", title: "Explora Valladolid", description: "Tiempo libre para explorar el encantador pueblo colonial y sus coloridas calles." },
      { time: "6:00 PM", title: "Regreso a Cancún", description: "Relájate en el pintoresco viaje de regreso a tu alojamiento." },
    ],
  },
  "private-vip-tour": {
    title: "Tour Privado VIP a Chichén Itzá – Sin Filas",
    shortTitle: "Tour Privado VIP",
    shortDescription: "Tour privado exclusivo con acceso sin filas y guía personal.",
    description: "Salta las filas y disfruta de un tour privado exclusivo a Chichén Itzá. Tu guía arqueólogo personal te revela secretos que la mayoría de visitantes no conoce. Transporte de lujo y almuerzo gourmet incluidos.",
    h1: "Tour Privado a Chichén Itzá desde Cancún – Experiencia VIP",
    duration: "10 horas",
    badge: "Premium",
    highlights: [
      "Entrada prioritaria sin filas",
      "Guía arqueólogo profesional privado",
      "Hora de salida flexible",
      "Transporte en SUV o van de lujo",
      "Visita exclusiva a cenote privado",
      "Almuerzo gourmet en hacienda"
    ],
    inclusions: [
      "Vehículo privado de lujo con AC",
      "Guía arqueólogo personal (en tu idioma)",
      "Entrada prioritaria sin filas",
      "Todas las entradas incluidas",
      "Almuerzo gourmet en hacienda histórica",
      "Acceso a cenote privado",
      "Bebidas y snacks premium",
      "Itinerario personalizado"
    ],
    exclusions: ["Propinas", "Seguro de viaje"],
    itinerary: [
      { time: "Flexible", title: "Recogida Privada", description: "SUV de lujo te recoge a la hora que prefieras desde cualquier hotel." },
      { time: "+2.5h", title: "Entrada VIP Prioritaria", description: "Salta las filas de admisión general y entra por la entrada VIP." },
      { time: "+3h", title: "Tour Privado a Profundidad", description: "Tu arqueólogo personal te revela secretos e historias ocultas." },
      { time: "+5h", title: "Cenote Privado", description: "Visita un cenote apartado lejos de las multitudes turísticas." },
      { time: "+7h", title: "Almuerzo Gourmet en Hacienda", description: "Experiencia gastronómica con cocina regional yucateca." },
    ],
  },
  "sunrise-tour": {
    title: "Tour al Amanecer en Chichén Itzá – Acceso Temprano",
    shortTitle: "Tour al Amanecer",
    shortDescription: "Acceso temprano para vivir Chichén Itzá al amanecer.",
    description: "Sé de los primeros en entrar a Chichén Itzá al alba. Observa cómo el amanecer ilumina El Castillo en soledad casi perfecta antes de que lleguen las multitudes. Una experiencia fotográfica mágica.",
    h1: "Tour al Amanecer en Chichén Itzá – Acceso Temprano sin Multitudes",
    duration: "14 horas",
    badge: "Experiencia Única",
    highlights: [
      "Presencia el amanecer en El Castillo",
      "Entra antes que las multitudes de admisión general",
      "Guía historiador maya experto",
      "Perfecto para fotografía",
      "Desayuno y almuerzo incluidos",
      "Nado en cenote en la tranquilidad matutina"
    ],
    inclusions: [
      "Transporte ida y vuelta",
      "Pase especial de acceso temprano",
      "Guía historiador maya experto",
      "Desayuno caliente",
      "Visita a cenote con nado",
      "Almuerzo buffet",
      "Todas las entradas"
    ],
    exclusions: ["Propinas", "Gastos personales", "Equipo fotográfico"],
    itinerary: [
      { time: "3:30 AM", title: "Salida Temprana", description: "Parte antes del amanecer para la mágica experiencia del alba." },
      { time: "6:30 AM", title: "Amanecer en El Castillo", description: "Observa la primera luz iluminar la antigua pirámide en soledad." },
      { time: "7:00 AM", title: "Desayuno", description: "Disfruta de un desayuno caliente mexicano tradicional." },
      { time: "8:00 AM", title: "Tour Guiado a Profundidad", description: "Explora mientras el sitio aún está tranquilo y sin multitudes." },
      { time: "11:00 AM", title: "Cenote y Almuerzo", description: "Refrescante nado y almuerzo tradicional." },
    ],
  },
  "cenote-ik-kil-combo": {
    title: "Tour Combo Chichén Itzá + Cenote Ik Kil",
    shortTitle: "Combo Cenote Ik Kil",
    shortDescription: "Tour guiado a Chichén Itzá más nado en el icónico Cenote Ik Kil.",
    description: "La combinación perfecta: explora las magníficas ruinas de Chichén Itzá y nada en el famoso Cenote Ik Kil. Incluye almuerzo tradicional yucateco.",
    h1: "Tour Combo Chichén Itzá y Cenote Ik Kil",
    duration: "11 horas",
    badge: "Más Popular",
    highlights: [
      "Nada en el famoso Cenote Ik Kil",
      "Tour guiado completo a Chichén Itzá",
      "Almuerzo tradicional yucateco",
      "Experiencia en grupo pequeño",
      "Oportunidades fotográficas"
    ],
    inclusions: [
      "Transporte ida y vuelta",
      "Guía certificado",
      "Entrada a Chichén Itzá",
      "Acceso al Cenote Ik Kil",
      "Almuerzo buffet",
      "Agua embotellada"
    ],
    exclusions: ["Propinas", "Alquiler de chaleco salvavidas ($3)", "Alquiler de casillero ($2)"],
    itinerary: [
      { time: "6:30 AM", title: "Recogida en Hotel", description: "Sal cómodamente desde tu hotel." },
      { time: "10:00 AM", title: "Tour Chichén Itzá", description: "Exploración guiada del sitio arqueológico." },
      { time: "1:00 PM", title: "Cenote Ik Kil", description: "Nada en el impresionante cenote natural." },
      { time: "2:30 PM", title: "Almuerzo", description: "Almuerzo buffet tradicional." },
    ],
  },
  "budget-express": {
    title: "Tour Express Económico a Chichén Itzá",
    shortTitle: "Tour Express Económico",
    shortDescription: "Tour express asequible cubriendo todos los puntos destacados.",
    description: "Visita Chichén Itzá sin gastar de más. Nuestro tour express asequible cubre todos los puntos destacados con guía profesional a un precio inmejorable.",
    h1: "Tour Económico a Chichén Itzá – Excursión Asequible",
    duration: "10 horas",
    badge: "Mejor Precio",
    highlights: [
      "La opción más asequible",
      "Todos los monumentos principales cubiertos",
      "Guía profesional certificado",
      "Tiempo libre para explorar",
      "Oportunidad de comprar souvenirs"
    ],
    inclusions: [
      "Transporte en autobús ida y vuelta",
      "Guía certificado",
      "Entrada a Chichén Itzá"
    ],
    exclusions: ["Almuerzo (disponible para compra)", "Acceso a cenote", "Propinas", "Souvenirs"],
    itinerary: [
      { time: "7:00 AM", title: "Recogida", description: "Autobús cómodo desde tu zona hotelera." },
      { time: "10:30 AM", title: "Tour Guiado", description: "Tour guiado de 90 minutos por las estructuras principales." },
      { time: "12:00 PM", title: "Tiempo Libre", description: "Explora por tu cuenta y compra souvenirs." },
      { time: "5:00 PM", title: "Regreso", description: "Vuelta a tu hotel." },
    ],
  },
  "family-adventure": {
    title: "Tour Familiar de Aventura a Chichén Itzá",
    shortTitle: "Aventura Familiar",
    shortDescription: "Tour para toda la familia con actividades interactivas y nado seguro en cenote.",
    description: "Un tour pensado para familias con niños. Cuentos interactivos mayas, actividades divertidas y nado seguro en cenote hacen que la historia antigua cobre vida para todas las edades.",
    h1: "Tour Familiar a Chichén Itzá – Diversión para Todas las Edades",
    duration: "11 horas",
    badge: "Ideal Familias",
    highlights: [
      "Actividades interactivas para niños",
      "Cuentos y leyendas mayas",
      "Nado seguro en cenote con chalecos",
      "Menú infantil en el almuerzo",
      "Cuadernos de actividades para niños",
      "Guías pacientes orientados a familias"
    ],
    inclusions: [
      "Transporte con entretenimiento infantil",
      "Guía especializado en familias",
      "Todas las entradas",
      "Acceso a cenote con equipo de seguridad",
      "Almuerzo infantil",
      "Cuadernos de actividades y colorear"
    ],
    exclusions: ["Propinas", "Souvenirs", "Snacks adicionales"],
    itinerary: [
      { time: "7:00 AM", title: "Recogida Divertida", description: "Se reparten cuadernos de actividades y juegos en el autobús." },
      { time: "10:00 AM", title: "Tour con Cuentos", description: "Tour interactivo con leyendas mayas y datos para niños." },
      { time: "12:30 PM", title: "Diversión en Cenote", description: "Nado seguro con chalecos salvavidas para todos." },
      { time: "2:00 PM", title: "Almuerzo y Juegos", description: "Buffet infantil seguido de juegos mayas." },
    ],
  },
  "night-light-show": {
    title: "Tour Nocturno a Chichén Itzá – Show de Luz y Sonido",
    shortTitle: "Show Nocturno",
    shortDescription: "Tour nocturno con el espectacular show de luces en El Castillo.",
    description: "Vive Chichén Itzá como nunca antes con el espectacular show Noches de Kukulkán de luz y sonido. Observa cómo El Castillo cobra vida con coloridas proyecciones que cuentan antiguas historias mayas.",
    h1: "Tour Nocturno a Chichén Itzá – Show Noches de Kukulkán",
    duration: "6 horas",
    badge: "Único",
    highlights: [
      "Espectacular show de luz y sonido",
      "Proyecciones sobre El Castillo",
      "Historias mayas que cobran vida",
      "Cena en la zona arqueológica",
      "Atmósfera nocturna única"
    ],
    inclusions: [
      "Transporte ida y vuelta",
      "Entrada al show de luces",
      "Cena en el sitio",
      "Guía profesional",
      "Bebidas"
    ],
    exclusions: ["Propinas", "Souvenirs", "Bebidas adicionales"],
    itinerary: [
      { time: "4:00 PM", title: "Recogida por la Tarde", description: "Sal de tu hotel para la aventura nocturna." },
      { time: "6:30 PM", title: "Llegada y Cena", description: "Disfruta de la cena en la zona arqueológica." },
      { time: "8:00 PM", title: "Show de Luces", description: "Vive el mágico Noches de Kukulkán." },
      { time: "9:30 PM", title: "Regreso", description: "Vuelta a tu hotel." },
    ],
  },
  "chichen-valladolid-combo": {
    title: "Tour Chichén Itzá + Valladolid Ciudad Colonial",
    shortTitle: "Combo Valladolid",
    shortDescription: "Tour a las ruinas más exploración de la encantadora ciudad colonial.",
    description: "Combina la historia maya antigua con el encanto colonial español. Explora Chichén Itzá y luego pasea por las coloridas calles de Valladolid, un Pueblo Mágico.",
    h1: "Tour Chichén Itzá y Valladolid – Lo Antiguo Encuentra lo Colonial",
    duration: "12 horas",
    badge: "Selección Cultural",
    highlights: [
      "Tour completo a Chichén Itzá",
      "Recorrido a pie por Valladolid",
      "Visita un Pueblo Mágico",
      "Coloridas oportunidades fotográficas",
      "Almuerzo tradicional yucateco",
      "Mercados artesanales locales"
    ],
    inclusions: [
      "Transporte ida y vuelta",
      "Guía y entrada a Chichén Itzá",
      "Recorrido a pie por Valladolid",
      "Almuerzo tradicional",
      "Agua embotellada"
    ],
    exclusions: ["Propinas", "Souvenirs", "Actividades extra"],
    itinerary: [
      { time: "6:30 AM", title: "Salida", description: "Recogida en tu hotel." },
      { time: "10:00 AM", title: "Chichén Itzá", description: "Tour guiado completo de las ruinas." },
      { time: "1:00 PM", title: "Almuerzo", description: "Comida tradicional en Valladolid." },
      { time: "2:30 PM", title: "Tour por Valladolid", description: "Recorrido a pie por el pueblo colonial." },
    ],
  },
  "private-sunrise-tour": {
    title: "Tour Privado al Amanecer en Chichén Itzá – Acceso VIP",
    shortTitle: "Amanecer Privado",
    shortDescription: "Tour privado con acceso temprano, guía personal y transporte de lujo.",
    description: "La experiencia definitiva en Chichén Itzá: acceso privado temprano antes de que abran las puertas al público, tu propio guía arqueólogo y transporte de lujo. Contempla el amanecer pintando El Castillo de dorado en soledad casi total.",
    h1: "Tour Privado al Amanecer en Chichén Itzá – Acceso VIP Temprano",
    duration: "12 horas",
    badge: "Experiencia Definitiva",
    highlights: [
      "Acceso exclusivo temprano antes de la apertura pública",
      "Guía arqueólogo privado",
      "Transporte en SUV de lujo con refrigerios",
      "Sesión fotográfica en la hora dorada",
      "Nado en cenote privado",
      "Desayuno y almuerzo gourmet"
    ],
    inclusions: [
      "Vehículo privado de lujo",
      "Guía arqueólogo personal",
      "Pase de acceso VIP temprano",
      "Todas las entradas",
      "Desayuno gourmet",
      "Almuerzo en hacienda",
      "Cenote privado",
      "Bebidas premium"
    ],
    exclusions: ["Propinas", "Seguro de viaje"],
    itinerary: [
      { time: "3:00 AM", title: "Recogida Privada", description: "SUV de lujo te recoge con café y pastelería." },
      { time: "6:00 AM", title: "Amanecer en El Castillo", description: "Contempla la pirámide bañada en luz dorada, casi en soledad." },
      { time: "7:00 AM", title: "Desayuno Gourmet", description: "Desayuno caliente en una hacienda cercana." },
      { time: "8:00 AM", title: "Tour Privado Guiado", description: "Exploración a profundidad con tu arqueólogo personal." },
      { time: "11:00 AM", title: "Cenote Privado", description: "Cenote exclusivo alejado de las multitudes turísticas." },
      { time: "1:00 PM", title: "Almuerzo en Hacienda", description: "Gastronomía fina con cocina regional yucateca." },
    ],
  },
  "budget-day-playa": {
    title: "Tour Económico a Chichén Itzá desde Playa del Carmen",
    shortTitle: "Económico desde Playa",
    shortDescription: "Excursión económica desde Playa del Carmen con guía incluido.",
    description: "Visita Chichén Itzá de forma asequible desde Playa del Carmen. El trayecto más corto significa más tiempo en las ruinas. Guía profesional que cubre todos los puntos destacados a un precio inmejorable.",
    h1: "Tour Económico a Chichén Itzá desde Playa del Carmen – Desde $55",
    duration: "10 horas",
    badge: "Mejor Precio",
    highlights: [
      "La opción más asequible desde Playa",
      "Trayecto más corto que desde Cancún",
      "Todos los monumentos principales cubiertos",
      "Guía bilingüe profesional",
      "Tiempo libre para explorar"
    ],
    inclusions: [
      "Transporte en autobús ida y vuelta",
      "Guía certificado",
      "Entrada a Chichén Itzá",
      "Agua embotellada"
    ],
    exclusions: ["Almuerzo (disponible para compra)", "Acceso a cenote", "Propinas"],
    itinerary: [
      { time: "7:30 AM", title: "Recogida desde Playa", description: "Salida desde el punto de encuentro en 5ta Avenida." },
      { time: "10:00 AM", title: "Tour Guiado", description: "Tour guiado de 90 minutos por Chichén Itzá." },
      { time: "11:30 AM", title: "Tiempo Libre", description: "Explora por tu cuenta, compra souvenirs." },
      { time: "5:30 PM", title: "Regreso a Playa", description: "Llegada al punto de encuentro original." },
    ],
  },
  "cenote-saamal-combo": {
    title: "Tour Chichén Itzá + Cenote Saamal y Valladolid",
    shortTitle: "Combo Cenote Saamal",
    shortDescription: "Tres en uno: Chichén Itzá, nado en Cenote Saamal y Valladolid.",
    description: "Tour de triple atracción combinando Chichén Itzá, el hermoso Cenote Saamal en Valladolid y un recorrido a pie por este encantador Pueblo Mágico. Tres experiencias en un día inolvidable.",
    h1: "Tour Chichén Itzá + Cenote Saamal + Valladolid",
    duration: "13 horas",
    badge: "3 en 1",
    highlights: [
      "Tres atracciones principales en un día",
      "Nada en el impresionante Cenote Saamal",
      "Recorrido a pie por Valladolid",
      "Tour guiado completo a Chichén Itzá",
      "Almuerzo tradicional yucateco",
      "Experiencia en grupo pequeño"
    ],
    inclusions: [
      "Transporte ida y vuelta",
      "Guía certificado",
      "Entrada a Chichén Itzá",
      "Acceso al Cenote Saamal",
      "Recorrido a pie por Valladolid",
      "Almuerzo buffet",
      "Agua embotellada"
    ],
    exclusions: ["Propinas", "Alquiler de chaleco salvavidas ($3)", "Souvenirs"],
    itinerary: [
      { time: "6:00 AM", title: "Recogida en Hotel", description: "Salida desde tu hotel." },
      { time: "9:30 AM", title: "Tour Chichén Itzá", description: "Tour guiado completo de las ruinas." },
      { time: "12:00 PM", title: "Almuerzo en Valladolid", description: "Buffet yucateco tradicional." },
      { time: "1:30 PM", title: "Cenote Saamal", description: "Nada en las cristalinas aguas del cenote." },
      { time: "2:30 PM", title: "Recorrido por Valladolid", description: "Explora el colorido Pueblo Mágico." },
    ],
  },
  "ek-balam-combo": {
    title: "Tour Combo Chichén Itzá + Ek Balam – Dos Ruinas",
    shortTitle: "Combo Ek Balam",
    shortDescription: "Dos sitios mayas en un día — sube la pirámide de Ek Balam.",
    description: "Visita dos increíbles sitios mayas en un día. Explora Chichén Itzá y luego sube la Acrópolis de Ek Balam — una de las pocas pirámides que aún puedes escalar. Incluye nado en cenote.",
    h1: "Tour Combo Chichén Itzá + Ek Balam – Dos Sitios, Un Día",
    duration: "14 horas",
    badge: "Selección Aventura",
    highlights: [
      "Sube la pirámide Acrópolis de Ek Balam",
      "Vistas panorámicas de la selva desde la cima",
      "Tour guiado completo a Chichén Itzá",
      "Nado en cenote entre sitios",
      "Dos sitios arqueológicos dignos de UNESCO",
      "Grupo pequeño (máx 12)"
    ],
    inclusions: [
      "Transporte ida y vuelta",
      "Guía experto para ambos sitios",
      "Todas las entradas",
      "Acceso y nado en cenote",
      "Almuerzo buffet",
      "Agua embotellada y snacks"
    ],
    exclusions: ["Propinas", "Gastos personales"],
    itinerary: [
      { time: "5:30 AM", title: "Salida Temprana", description: "Llega antes que las multitudes a ambos sitios." },
      { time: "8:30 AM", title: "Chichén Itzá", description: "Tour guiado de la zona arqueológica." },
      { time: "11:30 AM", title: "Nado en Cenote", description: "Refrescante nado en un cenote cercano." },
      { time: "1:00 PM", title: "Almuerzo", description: "Comida yucateca tradicional." },
      { time: "2:30 PM", title: "Ek Balam", description: "Explora y sube la pirámide Acrópolis." },
    ],
  },
  "merida-cultural-tour": {
    title: "Tour Cultural a Chichén Itzá desde Mérida",
    shortTitle: "Cultural desde Mérida",
    shortDescription: "El trayecto más corto desde Mérida con guía historiador local.",
    description: "¡La salida más cercana a Chichén Itzá! Explora las ruinas con un guía historiador yucateco local, luego visita talleres artesanales y cenotes escondidos en haciendas. Una experiencia profundamente cultural.",
    h1: "Tour Cultural a Chichén Itzá desde Mérida – Guía Local",
    duration: "9 horas",
    badge: "Experiencia Local",
    highlights: [
      "El trayecto más corto a Chichén Itzá",
      "Guía historiador yucateco local",
      "Visita una hacienda restaurada",
      "Nada en un cenote de hacienda",
      "Visita a taller artesanal",
      "Cocina regional auténtica"
    ],
    inclusions: [
      "Transporte ida y vuelta desde Mérida",
      "Guía historiador yucateco",
      "Entrada a Chichén Itzá",
      "Acceso a cenote de hacienda",
      "Visita a taller artesanal",
      "Almuerzo regional",
      "Agua embotellada"
    ],
    exclusions: ["Propinas", "Souvenirs", "Gastos personales"],
    itinerary: [
      { time: "7:00 AM", title: "Salida desde Mérida", description: "Solo 1.5 horas de viaje — la más corta de cualquier ciudad." },
      { time: "8:30 AM", title: "Chichén Itzá", description: "Tour con perspectiva de historiador local." },
      { time: "11:30 AM", title: "Hacienda y Cenote", description: "Visita hacienda restaurada y nada en cenote privado." },
      { time: "1:00 PM", title: "Almuerzo y Artesanías", description: "Cocina regional y demostración artesanal." },
    ],
  },
};
