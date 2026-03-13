// ------------------------------------------------------------
// Tipos
// ------------------------------------------------------------

export interface MenuItem {
  src: string;
  name: string;
  description: string;
  price: string;
}

export interface ParrillaItem {
  src: string;
  name: string;
  gramaje: string;
  price: string;
  boton?: string;
}

export interface CampoItem {
  src: string;
  name: string;
  description: string;
}

export interface CorteTalla {
  name: string;
  size: string;
  price: string;
}

export interface BifeItem {
  name: string;
  quality: string;
  queality2?: string;
  pricePrime: string;
  priceHighChoice?: string;
  size: string;
}

// ------------------------------------------------------------
// Menú principal
// ------------------------------------------------------------

export const empanadas: MenuItem[] = [
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Carne",
    description:
      "Empanada de carne cortada a cuchillo, contiene aceitunas, paprica, pasas de uva y un toque de huevo",
    price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Carne picante",
    description:
      "Igual que nuestra empanada tradicional pero con un toque de picante",
    price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Espinaca",
    description: "Con queso ricotta, parmesano, pimienta blanca y nuez moscada",
    price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Queso y cebolla",
    description: "Cebolla morada, queso gouda y condimentos",
    price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Humita",
    description:
      "Empanada con elote dulce, cebolla cambray, pimiento morrón, y queso gouda. Sabor suave y delicioso en cada bocado.",
    price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Roquefort",
    description:
      "Rellena de queso roquefort y mozzarella, con un toque fresco de apio. Sabor intenso y equilibrado.",
    price: "$70",
  },
  {
    src: "/imagenes/carta/empanadas/siciliana.webp",
    name: "Siciliana",
    description:
      "Hecha con masa de pizza, rellena de jamón, quesos, pimiento rojo asado y aceituna verde, bañada en una rica salsa pomodoro.",
    price: "$140",
  },
];

export const pizzas: MenuItem[] = [
  {
    src: "/imagenes/carta/pizzas/pizzaMargarita.webp",
    name: "Margarita",
    description:
      "Clásica combinación de mozzarella derretida, salsa de tomate y albahaca fresca",
    price: "$170",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaHongos.webp",
    name: "Hongos",
    description:
      "Mozzarella, salsa de tomate y champiñones salteados enteros, llenos de sabor.",
    price: "$180",
  },
  {
    src: "/imagenes/carta/pizzas/4quesos.webp",
    name: "4 Quesos",
    description:
      "Mezcla de mozzarella, provolone, parmesano y roquefort, un clásico equilibrio.",
    price: "$170",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaAnchoas.webp",
    name: "Tomate con anchoas",
    description:
      "Una opción sabrosa y sin queso. Rebanadas frescas de tomate, anchoas, aceitunas y ajo, rociadas con aceite de oliva.",
    price: "$260",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaBurrata.webp",
    name: "Jamón con burrata",
    description:
      "Base de salsa blanca, jamón hecho en casa, burrata fresca de San Miguel de Allende, y un toque de oliva y pistache hace de esta pizza una delicia.",
    price: "$280",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaPancceta.webp",
    name: "Panceta y provolone",
    description:
      "Salsa de tomate, mozzarella y provolone, coronada con panceta casera crujiente. Un deleite irresistible para los amantes de los sabores intensos.",
    price: "$60",
  },
];

export const entradas: MenuItem[] = [
  {
    src: "/imagenes/carta/entradas/bocaditos.webp",
    name: "Bocaditos de espinaca",
    description:
      "Bocaditos crujientes de espinaca con queso parmesano, huevo batido y un toque de ajo.",
    price: "$185",
  },
  {
    src: "/imagenes/carta/entradas/pimientoAsado.webp",
    name: "Pimiento asado",
    description:
      "Pimiento rojo asado, pelado y servido frío con aceite de oliva y lajas de ajo. Perfecto para acompañar cortes de carne.",
    price: "$130",
  },
  {
    src: "/imagenes/carta/entradas/esparragos.webp",
    name: "Espárragos al vapor",
    description:
      "Espárragos al vapor o a la parrilla, servidos con aceite de oliva y queso parmesano.",
    price: "$155",
  },
  {
    src: "/imagenes/carta/entradas/hongos.webp",
    name: "Hongos al ajillo",
    description:
      "Hongos al ajillo salteados con ajo, aceite de oliva, perejil y chile guajillo. Acompañados de crutones.",
    price: "$170",
  },
  {
    src: "/imagenes/carta/entradas/berenjenas.webp",
    name: "Berenjenas a la parmesana",
    description:
      "Berenjenas fritas con mozzarella, bañadas en salsa pomodoro y gratinadas con parmesano.",
    price: "$185",
  },
  {
    src: "/imagenes/carta/entradas/chorizoArgentino.webp",
    name: "Chorizo argentino",
    description:
      "Elaborado en casa, el embutido clásico de las parrilladas argentinas hecho con carne de res y cerdo.",
    price: "$110",
  },
  {
    src: "/imagenes/carta/entradas/chistorra.webp",
    name: "Chistorra",
    description:
      "Elaborada en casa, embutido estilo español, la carne es 100% de cerdo.",
    price: "$135",
  },
  {
    src: "/imagenes/carta/entradas/mollejaParrilla.webp",
    name: "Mollejas a la parrilla",
    description:
      "Mollejas de res a la parrilla, cocinadas con cuidado durante 20 minutos. Utilizamos la parte del corazón para un sabor excepcional.",
    price: "$310",
  },
  {
    src: "/imagenes/carta/entradas/mollejasVerdeo.webp",
    name: "Mollejas al verdeo",
    description:
      "Mollejas salteadas con cebolla cambray y chile serrano, ligeramente picantes. Se sirven con tortillas.",
    price: "$290",
  },
  {
    src: "/imagenes/carta/entradas/chinchulines.webp",
    name: "Chinchulines a la parrilla",
    description: "Parrillados para conservar su textura suave y gran sabor.",
    price: "$210",
  },
  {
    src: "/imagenes/carta/entradas/malfatis.webp",
    name: "Malfatti de espinaca",
    description:
      "La pasta es hecha en casa, rellena de espinaca y queso ricotta, bañada en salsa de poro.",
    price: "$250",
  },
  {
    src: "/imagenes/carta/entradas/provoletaTomate.webp",
    name: "Provoleta Tomate",
    description:
      "Queso semi maduro de origen argentino, con tomate y medio pimiento asado.",
    price: "$220",
  },
  {
    src: "/imagenes/carta/entradas/provoletaSerrano.webp",
    name: "Provoleta Arúgula",
    description:
      "Queso semi maduro de origen argentino, servida con jamón serrano y arúgula.",
    price: "$260",
  },
  {
    src: "/imagenes/carta/entradas/tartara.webp",
    name: "Tártara de Rib-Eye",
    description: "Carne de rib eye cortada a cuchillo, mezclada con anchoas y alcaparras.",
    price: "$250",
  },
  {
    src: "/imagenes/carta/entradas/carpaccioJamon.webp",
    name: "Carpaccio de jamón serrano",
    description:
      "Con un toque de aceite de oliva y vinagre balsámico, acompañado de albahaca y grana padano.",
    price: "$260",
  },
  {
    src: "/imagenes/carta/entradas/mejillones.webp",
    name: "Mejillones con chistorra",
    description:
      "Cocinados al vapor con chistorra y papas a la francesa, uno de los favoritos de la casa.",
    price: "$335",
  },
];

export const ensaladas: MenuItem[] = [
  {
    src: "/imagenes/carta/ensaladas/ensaladaVerde.webp",
    name: "Ensalada Verde",
    description:
      "Ensalada fresca con una cuidada selección de vegetales y vinagreta especial de la casa.",
    price: "$170",
  },
  {
    src: "/imagenes/carta/ensaladas/tomateBurrata.webp",
    name: "Ensalada de tomate con burrata",
    description:
      "Mix de tomates, cebolla morada, crutones y burrata de San Miguel de Allende.",
    price: "$280",
  },
  {
    src: "/imagenes/carta/ensaladas/mikonos.webp",
    name: "Mykonos",
    description:
      "Fresca ensalada de tomate y queso feta, acompañada de una vinagreta casera y hierbas frescas.",
    price: "$180",
  },
  {
    src: "/imagenes/carta//ensaladas/corazones.webp",
    name: "Corazones de lechuga asados",
    description:
      "Bañados de un aderezo César casero, con un toque de queso Grana Padano. Una opción deliciosa.",
    price: "$210",
  },
  {
    src: "/imagenes/carta/ensaladas/arugula.webp",
    name: "Arúgula",
    description: "Fresca mezcla de arúgula aderezada con ajo y limón.",
    price: "$155",
  },
  {
    src: "/imagenes/carta/ensaladas/arugulaCherry.webp",
    name: "Arúgula Cherry",
    description:
      "Fresca mezcla de arúgula con jitomates cherry, un toque de balsámico, aceite de oliva y láminas de queso Grana Padano.",
    price: "$170",
  },
  {
    src: "/imagenes/carta/ensaladas/palmitos.webp",
    name: "Palmito con alcachofa",
    description:
      "Suaves palmitos y corazones de alcachofas, acompañados de jitomate deshidratado, aceite de oliva, limón y un toque de chile quebrado.",
    price: "$250",
  },
];

export const cocina: MenuItem[] = [
  {
    src: "/imagenes/carta/cocina/fetuBolognesa.webp",
    name: "Fettuccine Bolognesa",
    description:
      "Pasta larga hecha en casa servida con salsa bolognesa que consiste en un ragú de carne.",
    price: "$230",
  },
  {
    src: "/imagenes/carta/cocina/fetucciniHongos.webp",
    name: "Fettuccine con crema de hongos",
    description:
      "Crema de hongos, setas y portobelo con un toque de ajo y vino blanco.",
    price: "$195",
  },
  {
    src: "/imagenes/carta/cocina/fetuNegro.webp",
    name: "Fettuccine negro",
    description:
      "Pasta elaborada con tinta de calamar, se sirve con calamares salteados en su tinta, vino blanco y crema.",
    price: "$275",
  },
  {
    src: "/imagenes/carta/cocina/ravioles.webp",
    name: "Ravioles de espinaca al pomodoro",
    description: "Cuadritos de pasta, rellenos de espinacas y queso ricota.",
    price: "$230",
  },
  {
    src: "/imagenes/empanadas.webp",
    name: "Farroto: vegetales y grana padano",
    description: "",
    price: "$210",
  },
  {
    src: "/imagenes/carta/cocina/sorrentinos.webp",
    name: "Sorrentinos de ricota con salsa rosa",
    description:
      "Rellenos de queso ricota, parmesano y nuez troceada. Se sirven en salsa rosa (pomodoro y crema).",
    price: "$250",
  },
  {
    src: "/imagenes/carta/cocina/lasagna.webp",
    name: "Lasagna bolognesa",
    description:
      "Pasta en salsa boloñesa con espinacas y champiñón, gratinada con queso. También contiene nuez.",
    price: "$250",
  },
  {
    src: "/imagenes/carta/cocina/hamburguesaMatera.webp",
    name: "Hamburguesa al estilo de la matera",
    description:
      "Preparada en casa: 130 g de carne, molleja asada en la parrilla con queso provolone, jitomate, lechuga morada y aderezo de la casa.",
    price: "$250",
  },
  {
    src: "/imagenes/carta/cocina/milaPollo.webp",
    name: "Milanesa de pollo",
    description: "Pechuga de pollo empanizada y frita (200 g), una guarnición a elegir.",
    price: "$220",
  },
  {
    src: "/imagenes/carta/cocina/milaRes.webp",
    name: "Milanesa de res",
    description: "Hecha con filete de res empanizado y frito (250 g), una guarnición a elegir.",
    price: "$320",
  },
];

export const postres: MenuItem[] = [
  {
    src: "/imagenes/carta/postres/helados.webp",
    name: "Helados",
    description: "Vainilla, Chocolate, Mascarpone, Alfajor, Ferrero.",
    price: "$40",
  },
  {
    src: "/imagenes/carta/postres/flanCasero.webp",
    name: "Flan casero",
    description: "Acompañado con botones de dulce de leche y crema batida.",
    price: "$125",
  },
  {
    src: "/imagenes/carta/postres/alfajor.webp",
    name: "Alfajor de hojaldre",
    description:
      "Postre típico argentino con capas de hojaldre unidas con dulce de leche y nuez troceada.",
    price: "$175",
  },
  {
    src: "/imagenes/carta/postres/martinFierro.webp",
    name: "Martín fierro",
    description: "Helado de vainilla con fresas flameadas.",
    price: "$155",
  },
  {
    src: "/imagenes/carta/postres/musse.webp",
    name: "Mousse de chocolate",
    description: "Espuma de chocolate semiamargo acompañado con frutos rojos.",
    price: "$125",
  },
  {
    src: "/imagenes/carta/postres/crepa.webp",
    name: "Crepa Matera",
    description: "Con mascarpone y salsa de dulce de leche.",
    price: "$165",
  },
  {
    src: "/imagenes/carta/postres/pastelChocolate.webp",
    name: "Pastel de chocolate",
    description: "Base de bizcocho con nueces y mousse de chocolate semiamargo.",
    price: "$115",
  },
  {
    src: "/imagenes/carta/postres/ate.webp",
    name: "Ate con queso",
    description:
      "También conocido como vigilante, el ate es de camote acompañado con queso gouda y botones de dulce de leche.",
    price: "$125",
  },
  {
    src: "/imagenes/carta/postres/tartaManzana.webp",
    name: "Tarta de manzana",
    description:
      "Base de masa sablé, manzana en cubos pequeños, streusel de canela y acompañado con una bola de helado de vainilla.",
    price: "$175",
  },
  {
    src: "/imagenes/carta/postres/camoteRescoldo.webp",
    name: "Camote al rescoldo",
    description:
      "Cocinado con las cenizas de la parrilla, un poco de streusel, caramelo y un helado de mascarpone.",
    price: "$145",
  },
];

// ------------------------------------------------------------
// Parrilla — Campo (cortes, imagen del mapa y descripción)
// ------------------------------------------------------------

export const campoData: CampoItem[] = [
  {
    src: "/imagenes/carta/parrilla/campo/filetes.webp",
    name: "Bife de lomo",
    description: "Cortes suaves totalmente magros",
  },
  {
    src: "/imagenes/carta/parrilla/campo/vacios.webp",
    name: "Vacio",
    description: "Corte jugoso, con marmoleo intermedio y textura firme",
  },
  {
    src: "/imagenes/carta/parrilla/campo/entrana.webp",
    name: "Entraña",
    description:
      "Corte con sabor intenso, se recomienda con piel que le aporta una textura crocante",
  },
  {
    src: "/imagenes/carta/parrilla/campo/asado.webp",
    name: "Asado de tira",
    description:
      "Costillas cortadas transversalmente, abundante marmoleo y mucho sabor",
  },
  {
    src: "/imagenes/carta/parrilla/campo/bifedechorizo.webp",
    name: "Bife de chorizo",
    description: "Muy marmoleados y jugosos, nuestros cortes más suaves.",
  },
  {
    src: "/imagenes/carta/parrilla/campo/tomahak.webp",
    name: "Especiales",
    description: "Nuestros cortes especiales son de disponibilidad limitada.",
  },
];

// Imágenes del mapa anatómico (usadas en pruebaCartaContenedor para el grid de iconos)
export const campoMapaData: CampoItem[] = [
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaFilete.webp",
    name: "Bife de lomo",
    description: "Cortes suaves totalmente magros",
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaVacio.webp",
    name: "Vacio",
    description: "Corte jugoso, con marmoleo intermedio y textura firme",
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaEntrana.webp",
    name: "Entraña",
    description:
      "Corte con sabor intenso, se recomienda con piel que le aporta una textura crocante",
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaAsado.webp",
    name: "Asado de tira",
    description:
      "Costillas cortadas transversalmente, abundante marmoleo y mucho sabor",
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaBife.webp",
    name: "Bife de chorizo",
    description: "Muy marmoleados y jugosos, nuestros cortes más suaves.",
  },
  {
    src: "/imagenes/carta/parrilla/campo/tomahak.webp",
    name: "Especiales",
    description: "Nuestros cortes especiales son de disponibilidad limitada.",
  },
];

// ------------------------------------------------------------
// Parrilla — Mar
// ------------------------------------------------------------

export const marData: ParrillaItem[] = [
  {
    src: "/imagenes/carta/parrilla/mar/pulpo.webp",
    name: "Pulpo con papas españolas",
    gramaje: "350gr / 12oz",
    price: "$490",
  },
  {
    src: "/imagenes/carta/parrilla/mar/salmon.webp",
    name: "Salmón",
    gramaje: "260gr / 9oz",
    price: "$360",
  },
  {
    src: "/imagenes/carta/parrilla/mar/camarones.webp",
    name: "Camarones con adobo de chiles",
    gramaje: "300gr / 12oz",
    price: "$320",
  },
  {
    src: "/imagenes/carta/parrilla/mar/robalo.webp",
    name: "Lonja de robalo",
    gramaje: "350gr / 12oz",
    price: "$550",
  },
  {
    src: "/imagenes/carta/parrilla/mar/calamar.webp",
    name: "Calamar patagónico provenzal",
    gramaje: "350gr / 12oz",
    price: "$450",
    boton: ".",
  },
];

// ------------------------------------------------------------
// Parrilla — Granja
// ------------------------------------------------------------

export const granjaData: ParrillaItem[] = [
  {
    src: "/imagenes/carta/parrilla/granja/patoLaqueado.webp",
    name: "1/2 Pato laqueado con puré de manzana",
    gramaje: "350gr / 12oz",
    price: "$550",
  },
  {
    src: "/imagenes/carta/parrilla/granja/polloOreganato.webp",
    name: "1/2 Pollo al oreganato",
    gramaje: "260gr / 9oz",
    price: "$250",
  },
  {
    src: "/imagenes/carta/parrilla/granja/polloMalazo.webp",
    name: "1/2 Pollo Malazzo",
    gramaje: "300gr / 12oz",
    price: "$285",
  },
  {
    src: "/imagenes/carta/parrilla/granja/rack.webp",
    name: "Rack de cordero",
    gramaje: "500gr / 17oz",
    price: "$950",
  },
  {
    src: "/imagenes/carta/parrilla/granja/matambrito.webp",
    name: "Matambrito de cerdo",
    gramaje: "350gr / 12oz",
    price: "$450",
    boton: ".",
  },
];

// ------------------------------------------------------------
// Cortes detallados (tallas y precios) — usados en los CutCards
// ------------------------------------------------------------

export const filetes: CorteTalla[] = [
  { name: "Lomito",               size: "300gr / 11oz",   price: "$338"  },
  { name: "Bife de lomo",         size: "400gr / 14oz",   price: "$450"  },
  { name: "Bife de lomo en caña", size: "800gr / 28oz",   price: "$900"  },
  { name: "Bife de lomo en caña", size: "1,200gr / 42oz", price: "$1350" },
];

export const vacios: CorteTalla[] = [
  { name: "Vacío", size: "400gr / 14oz",   price: "$500"  },
  { name: "Vacío", size: "650gr / 23oz",   price: "$830"  },
  { name: "Vacío", size: "1,300gr / 46oz", price: "$1650" },
];

export const entranas: CorteTalla[] = [
  { name: "Entraña", size: "500gr / 18oz", price: "$670"  },
  { name: "Entraña", size: "850gr / 30oz", price: "$1100" },
];

export const asados: CorteTalla[] = [
  { name: "Asado de tira",    size: "350gr / 12.3oz",  price: "$470"      },
  { name: "Asado completo",   size: "3,400gr / 120oz", price: "$950(kg)"  },
];

export const bifes: BifeItem[] = [
  {
    name: "Corazón de bife",
    quality: "Prime:",
    pricePrime: "$840",
    size: "300gr / 11oz",
  },
  {
    name: "Bife de chorizo Baby",
    quality: "Prime:",
    queality2: "High Choice:",
    pricePrime: "$990",
    priceHighChoice: "$660",
    size: "450gr / 16oz",
  },
  {
    name: "Bife de chorizo",
    quality: "Prime:",
    queality2: "High Choice:",
    pricePrime: "$1350",
    priceHighChoice: "$870",
    size: "600gr / 21oz",
  },
  {
    name: "Bife de chorizo Mariposa",
    quality: "Prime:",
    queality2: "High Choice:",
    pricePrime: "$2100",
    priceHighChoice: "$1450",
    size: "1000gr / 35oz",
  },
];
