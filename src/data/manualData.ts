// ------------------------------------------------------------
// Manual de alimentos — Restaurante La Matera
// Datos extraídos del PDF oficial. NO modificar la información.
// ------------------------------------------------------------

export interface ManualItem {
  nombre: string;
  nombreEn?: string;
  descripcion: string;
  gramaje?: string;
  notas?: string;
  alergias?: string;
  terminos?: string;
  tiempoCoccion?: string;
  gramajes?: { porcion: string; personas: string; guarniciones: string }[];
}

export interface ManualSeccion {
  id: string;
  titulo: string;
  icono: string;
  introduccion?: string;
  items: ManualItem[];
}

// ------------------------------------------------------------
// Secciones del manual
// ------------------------------------------------------------

export const manualSecciones: ManualSeccion[] = [
  // ===================== EMPANADAS =====================
  {
    id: "empanadas",
    titulo: "Empanadas",
    icono: "empanada",
    introduccion:
      "Se denomina empanada a una comida que consiste en una masa (en su mayoría de harina de trigo) rellena de carne, queso, verdura, pollo, entre otro ingredientes. Por lo general las empanadas se hacen fritas, aunque también existen las empanadas al horno, a la parrilla y cocidas al vapor. La masa está hecha con harina de trigo. Se fríen en aceite.",
    items: [
      {
        nombre: "Carne",
        nombreEn: "Beef",
        descripcion:
          "Carne de res molida, cebolla, aceitunas y huevo cocido picado. Paprika y comino.",
      },
      {
        nombre: "Carne Picante",
        nombreEn: "Spicy Beef",
        descripcion:
          "Carne de res (cortada a cuchillo), cebolla, huevo cocido, aceitunas, chile habanero, chile verde y uvas pasas.",
      },
      {
        nombre: "Humita",
        nombreEn: "Sweet Corn",
        descripcion:
          "Elote amarillo, cebolla cambray, pimiento morrón, queso gouda y queso parmesano. Con un ligero sabor dulce.",
      },
      {
        nombre: "Queso con Cebolla",
        nombreEn: "Cheese & Onion",
        descripcion:
          "Cebolla morada, queso gouda y condimentos (paprika, un toque de chile quebrado, orégano, sal y pimienta).",
      },
      {
        nombre: "Espinaca",
        nombreEn: "Spinach",
        descripcion:
          "Espinacas, queso ricotta, queso parmesano, pimienta blanca y nuez moscada.",
      },
      {
        nombre: "Roquefort",
        descripcion: "Queso roquefort, mozzarella y un poco de apio.",
      },
      {
        nombre: "Siciliana",
        descripcion:
          "Elaborada con masa de pizza, rellena de jamón, queso (mozzarella y manchego), pimiento rojo asado y aceituna verde; bañada en salsa pomodoro.",
      },
    ],
  },

  // ===================== ENTRADAS =====================
  {
    id: "entradas",
    titulo: "Entradas",
    icono: "entrada",
    items: [
      {
        nombre: "Chorizo argentino",
        nombreEn: "Argentinian Style Sausage",
        descripcion:
          "Embutido clásico de las parrilladas argentinas. Elaborado con carne de cerdo y res, conocido como chorizo criollo para los argentinos. Lo elaboramos en casa y contiene chile quebrado, orégano y ajo.",
        gramaje: "130 grs.",
      },
      {
        nombre: "Chistorra",
        nombreEn: "Spanish Style Sausage",
        descripcion:
          "Embutido estilo español, la carne es 100% de cerdo. Su color rojo característico se lo aporta el pimentón como condimento básico. Tiene ajo. La tripa en la que está embutida es de cordero.",
        gramaje: "220 grs.",
      },
      {
        nombre: "Mollejas de Res a la Parrilla",
        nombreEn: "Grilled Sweetbreads",
        descripcion:
          "Las mollejas son glándulas que van de la garganta al corazón de la res. (Nosotros para éste platillo utilizamos la parte del corazón) Se cocinan a la parrilla y su tiempo de cocción es de aproximadamente 20 minutos.",
        gramaje: "220 grs.",
      },
      {
        nombre: "Mollejas al Verdeo",
        nombreEn: "Sauté Sweetbreads, Onion & Serrano Chili",
        descripcion:
          "Salteados con cebolla cambray y chile serrano. Ligeramente picante, (sale con tortillas). En éste platillo utilizamos la molleja de la garganta.",
        gramaje: "180 grs. de molleja y 140 grs. de verdeo",
      },
      {
        nombre: "Chinchulines a las brasas",
        nombreEn: "Charcoal Grilled Beef Intestines",
        descripcion:
          "Son las tripas de la res, se cocinan a la parrilla. Llevan una previa cocción en leche, laurel y pimienta para suavizar su textura y sabor.",
        gramaje: "220 grs.",
        notas: "Especificar al cliente que no son fritas. No se pueden pedir fritas.",
      },
      {
        nombre: "Bocaditos de Espinaca",
        nombreEn: "Spinach Fritters",
        descripcion:
          "Tortitas de espinaca (fritas). Se preparan con espinaca, queso parmesano, huevo batido para ligar y un ligero toque de ajo (pimienta blanca y nuez moscada).",
        notas: "Contiene queso y pimienta.",
        alergias:
          "Contiene lactosa y pimienta. No son aptos para intolerantes a la lactosa. Pimienta: condimento que puede generar alergia para las personas intolerantes.",
      },
      {
        nombre: "Pimiento Morrón Asado",
        nombreEn: "Grilled Red Pepper",
        descripcion:
          "Un pimiento rojo asado a las brasas, se le quita la piel y se sirve frío con aceite de oliva y lajas de ajo. Se recomienda para acompañar los cortes.",
        notas:
          "Contiene ajo, previamente marinado en ajo y aceite de olivo, por lo que no se puede pedir sin ajo.",
      },
      {
        nombre: "Espárragos",
        nombreEn: "Grill or Steamed Asparagus",
        descripcion:
          "Al vapor o a la parrilla. Se sirven con aceite de oliva y queso parmesano (cocción corta para dar textura firme).",
        gramaje: "180 grs.",
      },
      {
        nombre: "Hongos al Ajillo",
        nombreEn: "Mushrooms Garlic Style",
        descripcion:
          "Champiñones y setas salteadas con ajo, aceite de oliva, perejil y chile guajillo. Acompañados de crutones.",
        gramaje: "180 grs. de champiñones y 125 grs. de setas",
      },
      {
        nombre: "Berenjenas a la Parmesana",
        nombreEn: "Parmesan Style Eggplant",
        descripcion:
          "Rodajas de berenjenas (fritas), queso mozzarella, salsa pomodoro y gratinadas con queso parmesano.",
        gramaje: "225 grs.",
        alergias: "No apto para intolerantes al gluten o la lactosa.",
      },
      {
        nombre: "Espinacas al Gratín",
        nombreEn: "Spinach au Gratin",
        descripcion:
          "Espinacas, crema y gratinadas con parmesano y queso manchego.",
        gramaje: "250 grs.",
      },
      {
        nombre: "Carpaccio de Jamón Serrano",
        nombreEn: "Serrano Ham Carpaccio",
        descripcion:
          "Jamón con aceite de oliva, vinagre balsámico, un toque de limón, alcaparras, grana padano, julianas de arúgula, albahaca y un toque de sal y pimienta.",
        gramaje: "100 grs. de jamón serrano",
      },
      {
        nombre: "Tártara de Rib Eye",
        descripcion:
          "Se utiliza el centro del rib eye (corazón, 150 gr.) y se corta a cuchillo. Lleva anchoa, perejil frito, cebolla morada, mostaza dijon, alcaparras y yema de huevo. Se mezclan los ingredientes en la mesa y se sirve con croutones y papas rejilla.",
      },
    ],
  },

  // ===================== PROVOLETA =====================
  {
    id: "provoleta",
    titulo: "Provoleta",
    icono: "queso",
    introduccion:
      "La rebanada de queso provolone es a la plancha y tiene un peso de 200 grs. Es un queso hilado semi maduro de origen argentino que se corta en rodajas y se asa a la plancha. Clásico de las parrillas argentinas.",
    items: [
      {
        nombre: "A la Parrilla",
        descripcion: "Toque de aceite de oliva y orégano y chile quebrado.",
      },
      {
        nombre: "Con Tomate y Pimiento",
        descripcion:
          "Con rebanadas de tomate rostizadas y pimiento asado, orégano, pimienta y aceite de oliva.",
      },
      {
        nombre: "Con Jamón Serrano y Arúgula",
        descripcion:
          "Tomate deshidratado, toque de pimienta y aceite de oliva.",
      },
    ],
  },

  // ===================== ENSALADAS =====================
  {
    id: "ensaladas",
    titulo: "Ensaladas",
    icono: "ensalada",
    items: [
      {
        nombre: "Palmitos y Alcachofa",
        descripcion:
          "Corazones de palmitos (cogollo de varias especies de palmera; cocotero, jasará, azaí y pijuayo. Originario de sudamérica.) y alcachofas con jitomate deshidratado, aceite de oliva, limón y chile quebrado.",
      },
      {
        nombre: "Arúgula con Ajo y Limón",
        descripcion: "Arúgula con ajo, limón y aceite de oliva.",
      },
      {
        nombre: "Arúgula Cherry",
        descripcion:
          "Con jitomates cherry, queso parmesano (grana padano), vinagre balsámico y aceite de oliva.",
        gramaje: "90 grs. de arúgula y 80 grs. de grana padano",
      },
      {
        nombre: "Corazones de Lechuga",
        descripcion:
          "Se cocinan en la parrilla y se preparan con un aderezo césar preparado en casa (mayonesa, anchoas, ajo, queso parmesano, vinagre de vino tinto) y queso grana padano.",
      },
      {
        nombre: "Ensalada Mikonos",
        descripcion:
          "Tomates saladet, cebolla morada en aros, aceitunas kalamata, pepino persa, pimiento rojo y verde, ajo y queso tipo feta. Vinagreta de la casa y hierbas (albahaca, perejil, cilantro y orégano).",
      },
      {
        nombre: "Ensalada de Tomates y Burrata",
        descripcion:
          "Ensalada inspirada en la clásica ensalada italiana panzanella. Mix de tomates, apio, alcaparras, cebolla morada, crutones y ajo, vinagreta de vino tinto y coronada por una cremosa burrata de San Miguel de Allende.",
      },
      {
        nombre: "Ensalada Verde",
        descripcion:
          "Variedad de lechugas, espinaca, berros, pepino, aguacate, pimiento verde, apio, germen de alfalfa y vinagreta de la casa.",
      },
    ],
  },

  // ===================== PIZZAS =====================
  {
    id: "pizzas",
    titulo: "Pizzas",
    icono: "pizza",
    introduccion:
      "Todas las pizzas están hechas al momento y son de tamaño mediano (28 cm. de diámetro). Nuestra masa de pizza se prepara con harina de trigo, agua y levadura fresca.",
    items: [
      {
        nombre: "Cuatro Quesos",
        descripcion:
          "Salsa de tomate, mozzarella, provolone, parmesano y roquefort.",
      },
      {
        nombre: "Pizza de Panceta",
        descripcion:
          "Salsa de tomate, mozzarella, provolone y panceta (hecha en casa).",
      },
      {
        nombre: "Hongos",
        nombreEn: "Mushrooms",
        descripcion:
          "Mozzarella, salsa de tomate y champiñones (son enteros, salteados y sazonados).",
      },
      {
        nombre: "Margarita",
        descripcion: "Mozzarella, salsa de tomate y albahaca fresca.",
      },
      {
        nombre: "Fugazzeta",
        nombreEn: "Onion & Parmesan Cheese",
        descripcion:
          "Lleva crema (no salsa de pizza). Queso parmesano, cebolla pochada (pasada por agua hirviendo), sal de grano y orégano deshidratado.",
      },
      {
        nombre: "Tomate y Anchoas",
        descripcion:
          "Rebanadas de tomate, anchoas, aceitunas, ajo y aceite de olivo (no lleva queso).",
      },
    ],
  },

  // ===================== NUESTRA COCINA =====================
  {
    id: "cocina",
    titulo: "Nuestra Cocina",
    icono: "cocina",
    items: [
      {
        nombre: "Fettuccine de Hongos",
        descripcion:
          "Pasta fresca fettuccine, crema de hongos, cebolla, ajo, vino blanco, paprika, setas y portobello.",
      },
      {
        nombre: "Fettuccini Negro con Calamares en su Tinta",
        descripcion:
          "Pasta elaborada con tinta de calamar lo cual le proporciona el color negro. Se sirve con calamares salteados en tinta de calamar, vino blanco, cebolla, crema y perejil. Es importante comentarle al cliente que toda la pasta es negra porque la salsa también lleva tinta de calamar.",
      },
      {
        nombre: "Ravioles Pomodoro",
        descripcion:
          "Cuadraditos de pasta rellenos de espinaca y queso ricota. Se sirve con salsa pomodoro (salsa de tomate condimentada con: albahaca, ajo, orégano y laurel).",
      },
      {
        nombre: "Sorrentinos Rosa",
        descripcion:
          "Pasta de forma redonda rellena de queso ricotta, parmesano y nuez troceada. Se sirven con salsa rosa (pomodoro y crema).",
      },
      {
        nombre: "Lasagna",
        descripcion:
          "Delgadas capas de pasta entre las cuales lleva salsa bolognesa, espinacas, champiñón, queso ricotta, mozzarella y parmesano. Sale gratinada con salsa blanca y queso. Es importante comentar con el cliente que es nuestra versión de la lasaña bolognesa clásica, ya que no es común que lleve estos ingredientes. En Argentina es común que lleve estos ingredientes extras.",
        notas: "Lleva nuez. Aclarar por alergias.",
      },
      {
        nombre: "Fettuccini Bolognesa",
        descripcion:
          "Pasta larga hecha en casa, servida con salsa bolognesa que consiste de un ragú de carne de res, una mirepoix (cebolla, zanahoria, poro y apio) de verduras y salsa pomodoro.",
      },
      {
        nombre: "Hamburguesa al estilo La Matera",
        descripcion:
          "Pan preparado en casa, 130 gramos de carne, molleja asada a la parrilla, queso amarillo, jitomate, lechuga, cebolla morada y aderezo preparado con mayonesa, mostaza, catsup, chiles cascabel baby encurtidos y pepinillos picados. Acompañada de papas rotas fritas.",
        alergias:
          "No es apto para alérgicos a la lactosa, tampoco para intolerantes al gluten.",
      },
      {
        nombre: "Milanesa de Res",
        descripcion:
          "Hecha con filete de res empanizada y frita. Una guarnición a elegir.",
        gramaje: "250 grs.",
      },
      {
        nombre: "Milanesa de Pollo",
        descripcion:
          "Pechuga de pollo empanizada y frita. Una guarnición a elegir.",
        gramaje: "200 grs.",
      },
      {
        nombre: "Milanesa a la Napolitana",
        descripcion:
          "Puede ser de res o de pollo. Se le agrega salsa pomodoro, rebanadas de jitomate, queso gratinado y unas julianas de pimiento rojo asado.",
      },
      {
        nombre: "Matambrito de Cerdo",
        descripcion:
          "Clásico corte de los asadores argentinos, proviene de la parte del pecho del cerdo. Es el músculo subcutáneo del animal. Lo marinamos en chimichurri pampeano (chile de árbol, paprika, orégano, ajo, vinagre blanco y aceite de maíz) y se acompaña de puré de camotes que se cocina en un caldo de cenizas y ensalada de berros, espinaca, mix de lechugas y aguacate.",
        notas:
          "Este corte está marinado previamente, por lo cual no se puede quitar el marinado.",
        alergias:
          "El puré de camote lleva lácteos (mantequilla y crema).",
      },
      {
        nombre: "Farroto",
        descripcion:
          "Clásico plato de la cocina Italiana, se lo conoce así porque es una preparación muy similar al risotto pero con farro en lugar de arroz. El farro es un trigo ancestral, también conocido como trigo Emmer. Elaborado a base de farro, cebolla, calabacitas, brócolis o espárragos (dependiendo de su estacionalidad), elotes, mantequilla y grana padano.",
        alergias:
          "No es apto para alérgicos a la lactosa, tampoco para intolerantes al gluten.",
      },
      {
        nombre: "Pollo al Oreganato",
        descripcion:
          "Medio pollo (entre pechuga y muslo, 450g aprox.) deshuesado, asado a la parrilla, con limón y orégano. No se pregunta término, sale cocido. Una guarnición a elegir.",
      },
      {
        nombre: "Pollo Malazzo",
        descripcion:
          "Medio pollo deshuesado (entre pechuga y muslo, 450g aprox.) asado a la parrilla, con ajo, aceite de olivo y chile serrano. No se pregunta término, sale cocido. Acompañado de una guarnición a elegir.",
      },
      {
        nombre: "Rack de Cordero",
        descripcion:
          "Costillas de cordero importado (Nueva Zelanda), asadas a la parrilla con un toque de pimienta, con una guarnición de papas al romero y ensalada de berros. Se acompaña con jalea de menta. Rack completo (8 costillas) y ½ Rack (4 costillas).",
      },
      {
        nombre: "Pato Deshuesado",
        descripcion:
          "Medio pato a la parrilla (pechuga, pierna y muslo). Marinado con miel de cítricos. Acompañado con puré de manzanas (manzana golden, miel, canela y azúcar) y ensalada de lechuga con aceite de ajonjolí, vinagre de vino tinto, semillas de ajonjolí.",
      },
    ],
  },

  // ===================== MAR =====================
  {
    id: "mar",
    titulo: "Mar",
    icono: "mar",
    items: [
      {
        nombre: "Lonja de Robalo",
        nombreEn: "Sea Bass",
        descripcion:
          "El robalo es un pescado blanco, de excelente textura y sabor. Se limita a existencia. Sale con papas romero y ensalada de lechuga y berros (vinagreta de la casa).",
        gramaje: "350 grs.",
      },
      {
        nombre: "Salmón al Horno",
        descripcion:
          "Filete de salmón sellado a la parrilla. Se monta sobre espinacas a la crema (espinacas, cebolla, crema, vino blanco, nuez moscada, sal y pimienta) y papitas cambray.",
        gramaje: "250 grs.",
      },
      {
        nombre: "Pulpo con Papas Españolas",
        nombreEn: "Octopus Spanish Style Potatoes",
        descripcion:
          "Previamente cocido en agua, asado a la parrilla en un tiempo aproximado de 20 minutos. Acompañado de rodajas de papas panaderas con pimentón y tapenade (aceitunas negras, alcaparras, tomate deshidratado, paprika, pimienta, orégano y aceite de oliva).",
        gramaje: "350 grs. aprox.",
      },
      {
        nombre: "Calamar Patagónico",
        descripcion:
          "Platillo muy representativo de la nueva etapa de la matera donde se intenta reflejar el respeto por el producto y la simpleza de interpretación del mismo. Es un producto que obtenemos de la Patagonia Argentina. Se sirve entero, se asa en la parrilla previamente marinado con un provenzal (ajo y perejil). Se acompaña de 3 jitomates rostizados.",
        notas:
          "No se puede quitar el provenzal ya que está marinado con tiempo previo a la preparación.",
        alergias:
          "No lo pueden consumir personas alérgicas a los mariscos.",
      },
      {
        nombre: "Camarones al Grill",
        descripcion:
          "Camarón con cáscara y cabeza, con adobo de chiles (chile de árbol, guajillo) montados en un alioli de camarones (mayonesa, adobo de chiles, chipotle y vinagre de manzana).",
        gramaje: "350 grs.",
      },
    ],
  },

  // ===================== CAMPO (CORTES) =====================
  {
    id: "campo",
    titulo: "Campo — Cortes",
    icono: "campo",
    introduccion:
      "Todos nuestros cortes van asados a la parrilla y se sazonan únicamente con sal. Se sirven con guarnición a elegir. Utilizamos carne Prime de una empresa llamada Sigma que maneja cortes de Estados Unidos y de Canadá. Esta empresa compra la carne a una planta que se llama JBS. Solamente el filete es el único corte que se compra nacional. Para nuestros cortes lo único que utilizamos es sal y el carbón que utilizamos es de mezquite.",
    items: [
      {
        nombre: "Bife de Chorizo (Rib-Eye)",
        descripcion:
          "Proviene del costillar de la res (de la quinta y la doceava costilla). Su forma redonda y su grasa intramuscular ayudan a identificarlo con mayor facilidad. Su nombre significa literalmente Ojo de costillar. En México se le conoce como Rib Eye, y en Argentina se puede encontrar como bife de res, bife ancho o bife sin tapa. Uno de los más deliciosos por su marmoleo, sabor y jugosidad. Cuenta con un rico balance entre carne magra y grasa intramuscular.",
        gramajes: [
          { porcion: "450g", personas: "1 persona aprox.", guarniciones: "1 guarnición" },
          { porcion: "600g", personas: "1 a 2 personas aprox.", guarniciones: "1 guarnición" },
          { porcion: "1000g", personas: "2 a 3 personas aprox.", guarniciones: "2 guarniciones" },
        ],
        terminos: "Término ½: 20 a 25 min · Término ¾: 25 a 30 min",
      },
      {
        nombre: "Corazón de Bife",
        descripcion:
          "Corte que proviene del centro de la pieza del Rib-eye, en la cual el corte se separa de la tapa de bife y se retira el excedente de marmoleo. Es un corte suave y el poco marmoleo que tiene una vez parrillado le otorga buen sabor; es una excelente alternativa a un corte magro.",
        gramajes: [
          { porcion: "300g", personas: "1 persona", guarniciones: "1 guarnición" },
        ],
        terminos: "Término medio rojo: 20 a 25 min · Término ½: 25 a 30 min",
      },
      {
        nombre: "Tapa de Bife",
        descripcion:
          "Se extrae de la pieza completa del Rib-Eye siendo esta la parte superior del mismo, su nombre da referencia a que es la parte que cubre el corte completo. Muy solicitado por su excelente sabor y suavidad, su marmoleo es abundante pero con buena distribución lo que le da excelente textura y sabor. Sujeto a existencia y a reservación.",
        gramajes: [
          { porcion: "1kg a 1.6kg", personas: "4 a 6 personas aprox.", guarniciones: "2 a 3 guarniciones" },
        ],
        terminos: "Término medio rojo a ½ a ¾: 25 a 30 min",
      },
      {
        nombre: "Vacío",
        descripcion:
          "Situado entre la zona lateral trasera de la res, entre las costillas y los huecos de la cadera. Es un corte jugoso aunque su textura es firme. Clásico entre los asados argentinos. Marmoleo intermedio, con sabor intenso y textura firme pero sin perder jugosidad.",
        gramajes: [
          { porcion: "400g", personas: "1 persona aprox.", guarniciones: "1 guarnición" },
          { porcion: "650g", personas: "2 personas aprox.", guarniciones: "2 guarniciones" },
          { porcion: "1300g", personas: "3 personas aprox.", guarniciones: "3 guarniciones" },
        ],
        terminos: "Término ½: 20 a 25 min · Término ¾: 25 a 30 min",
      },
      {
        nombre: "Entraña",
        descripcion:
          "Corresponde a la parte que cubre el diafragma de la res. Existen 2 tipos de corte: Inside skirt (arrachera) y Outside skirt (Entraña). Nosotros utilizamos el Outside skirt que viene con una membrana de piel. Tiene una delgada membrana de piel, lo cual lo hace un corte de textura firme y con textura crocante al masticar, sabor intenso y buen marmoleo. También se le puede retirar la piel aunque no se recomienda.",
        gramajes: [
          { porcion: "500g", personas: "1 persona aprox.", guarniciones: "1 guarnición" },
          { porcion: "850g", personas: "2 personas aprox.", guarniciones: "2 guarniciones" },
        ],
        terminos: "Término ½: 25 a 30 min · Término ¾: 30 a 35 min",
      },
      {
        nombre: "Asado de Tira",
        descripcion:
          "Corte habitual en las parrillas argentinas que es cortado de las tres principales costillas de la res (costilla 6, 7 y 8). El costillar de la res es cortado de forma transversal «en tiras», son piezas que tienen hueso lo cual su tiempo de cocción puede ser más duradera. La carne del costillar está infiltrada de grasa lo que, junto con el hueso de la costilla, otorga a la carne una vez cocida un sabor, textura y aroma muy particular.",
        gramajes: [
          { porcion: "350g", personas: "1 persona", guarniciones: "1 guarnición" },
          { porcion: "3200g aprox.", personas: "6 personas aprox.", guarniciones: "A criterio (solo con 2 días de antelación para la reserva)" },
        ],
        terminos: "Término ¾: 30 a 35 min",
      },
      {
        nombre: "Bife de Lomo y Lomo en Caña",
        descripcion:
          "Es la parte más magra y tierna de la res, se extrae de la parte superior del lomo de la res. Corte que no necesita mucha cocción pues tiende a perder jugosidad. Un corte suave, de color rosa sin nada de marmoleo, totalmente magro con grosor de 1 a 2 pulgadas. Se recomienda no cocerlo mucho para apreciar su sabor y textura. Se presenta de dos maneras: Medallón (lomito y bife de lomo) y en Caña.",
        gramajes: [
          { porcion: "300g", personas: "1 persona aprox.", guarniciones: "1 guarnición" },
          { porcion: "400g", personas: "1 a 2 personas aprox.", guarniciones: "1 guarnición" },
          { porcion: "800g (en caña)", personas: "2 a 3 personas", guarniciones: "—" },
          { porcion: "1200g (en caña)", personas: "3 a 4 personas aprox.", guarniciones: "2 guarniciones" },
        ],
        terminos: "Término ½: 20 a 25 min · Término ¾: 25 a 30 min",
      },
    ],
  },

  // ===================== CALIDAD DE LA CARNE =====================
  {
    id: "calidad",
    titulo: "Calidad de la Carne",
    icono: "calidad",
    introduccion:
      "En el mundo de la carne de res, la grasa es igual a sabor. La grasa intramuscular (la grasa distribuida en toda la porción roja de un filete) se llama marmoleado. El marmoleo hace que el filete sea más rico en sabor, jugoso. La carne de res se clasifica en los Estados Unidos basándose principalmente en la cantidad de marmoleado (USDA).",
    items: [
      {
        nombre: "Select",
        descripcion:
          "Un filete de este grado es muy magro con una cantidad mínima de grasa intramuscular.",
      },
      {
        nombre: "Choice",
        descripcion:
          "Los filetes tendrán buen sabor y la textura es más tierna.",
      },
      {
        nombre: "Prime",
        descripcion:
          "Solo del 3 al 4% de la carne de res recibe esta calificación máxima. Estos son los más veteados, sabrosos y tiernos cortes. Se pueden encontrar en carnicerías especializadas o tiendas de alta gama, aunque la mayoría de la calidad Prime va a asadores de primera calidad.",
      },
    ],
  },

  // ===================== GUARNICIONES =====================
  {
    id: "guarniciones",
    titulo: "Guarniciones",
    icono: "guarnicion",
    introduccion:
      "Los cortes salen con guarnición a elección. Se tiene que manejar el criterio del número de guarniciones según sea la situación (clientes vip, buen consumo, entre otros).",
    items: [
      {
        nombre: "Papas al Romero",
        descripcion:
          "Cubos de papa salteados con ajo y romero, horneados, de textura crujiente por fuera y suave por dentro.",
      },
      {
        nombre: "Papas Fritas",
        descripcion: "Papas fritas clásicas.",
      },
      {
        nombre: "Ensalada",
        descripcion: "Lechuga, jitomate, cebolla y vinagreta de la casa.",
      },
      {
        nombre: "Puré de Papa",
        descripcion:
          "Papa, mantequilla, leche, nuez moscada. Gratinado con queso parmesano.",
      },
      {
        nombre: "Verduras al Horno",
        descripcion:
          "Papa cambray, camote, calabaza, zanahoria y pimiento rojo, troceados y horneados.",
      },
    ],
  },

  // ===================== SOPAS =====================
  {
    id: "sopas",
    titulo: "Sopas",
    icono: "sopa",
    items: [
      {
        nombre: "Caldo de Hongos",
        descripcion:
          "Champiñones y setas salteados en verdeo y guajillo y se agregan a caldo de pollo.",
      },
      {
        nombre: "Minestrone",
        descripcion:
          "Sopa de verduras (zanahoria, papa, pimiento rojo y verde y calabaza) con un poco de carne y tocino, lleva un poco de munición y al final se le pone un toque de pesto y parmesano.",
      },
      {
        nombre: "Campesina",
        descripcion:
          "Sopa de setas y flor de calabaza salteadas con cebolla y mantequilla con crema y leche.",
      },
      {
        nombre: "Lentejas",
        descripcion:
          "Sopa de potaje con verduras, tocino y jamón serrano.",
      },
      {
        nombre: "Tortilla",
        descripcion:
          "Caldo de tomate con tocino, chorizo, ajo, cebolla y verdeo. Lleva julianas de tortilla fritas, aguacate, queso panela y crema ácida.",
      },
    ],
  },

  // ===================== POSTRES =====================
  {
    id: "postres",
    titulo: "Postres",
    icono: "postre",
    introduccion:
      "Todos nuestros postres son preparados en Zona Dulce (perteneciente al grupo La Matera) a excepción de los helados. Todos los postres no son recomendables para personas intolerantes a la lactosa, ni para diabéticos.",
    items: [
      {
        nombre: "Crepa Matera",
        descripcion:
          "Crepa con relleno de queso mascarpone. Se sirve con dulce de leche líquido y se acompaña con un helado de alfajor. Es uno de los postres más vendidos de la matera.",
        alergias: "No es para intolerantes a los lácteos y al gluten.",
      },
      {
        nombre: "Alfajor",
        descripcion:
          "Postre típico argentino, con muchas capas de hojaldre (similar al mil hojas) unidas con dulce de leche, nuez troceada y espolvoreado de azúcar glass.",
      },
      {
        nombre: "Ate con Queso",
        descripcion:
          "También conocido como vigilante, postre típico argentino degustado después de los asados argentinos. El ate es de camote y lleva queso gouda y dulce de leche.",
      },
      {
        nombre: "Martín Fierro",
        descripcion:
          "El nombre data de un libro llamado El Gaucho escrito por José Hdez. en el cual hay un personaje llamado Martín Fierro. Postre muy emblemático de la Matera. Fresas flameadas (con mantequilla, azúcar y licor de naranja) sobre base de helado de vainilla y un botón de crema batida.",
      },
      {
        nombre: "Flan",
        descripcion:
          "Postre de origen portugués reconocido mundialmente. Preparado con huevo, leche, vainilla y azúcar; decorado con tres botones de crema batida y tres botones de dulce de leche.",
      },
      {
        nombre: "Pastel de Chocolate",
        descripcion:
          "Base de bizcocho de chocolate con nueces con mousse de chocolate semiamargo (lleva un poco de crema en la mezcla del mousse).",
      },
      {
        nombre: "Tarta de Manzana",
        descripcion:
          "Base de masa sablé (mantequilla, harina y huevos), manzana en cubos pequeños sazonadas con canela, clavo y azúcar. Lleva streusel de canela, acompañado de helado de vainilla y una base de compota de zarzamoras.",
      },
      {
        nombre: "Camote al Rescoldo",
        descripcion:
          "Postre que se come después del asado; con las cenizas de la parrilla se cocina el camote al rescoldo (técnica de cocción que se hace a partir de cenizas). Lleva dulce de leche, crema batida, streusel (harina, mantequilla y azúcar) y se adorna con helado de queso mascarpone, caramelo, pimienta y una hoja de albahaca.",
      },
      {
        nombre: "Tarta Helada de Limón",
        descripcion:
          "Base de masa sablé, en la preparación lleva yemas de huevo, limón y mantequilla; se decora con streusel, suspiros (kisses de merengue) y frutos rojos como adorno.",
      },
      {
        nombre: "Mousse de Chocolate",
        descripcion:
          "De origen francés. Es una espuma de chocolate semiamargo, preparado con claras de huevo, chocolate y crema para batir. Montado a punto de nieve en un refractario de vidrio y decorado con frutos rojos.",
      },
    ],
  },
];

// ------------------------------------------------------------
// Definición de términos de cocción (se muestra aparte)
// ------------------------------------------------------------

export interface TerminoCoccion {
  nombre: string;
  nombreEn: string;
  descripcion: string;
  color: string;
}

export const terminosCoccion: TerminoCoccion[] = [
  {
    nombre: "Blue / Sellado",
    nombreEn: "Blue Rare",
    descripcion: "Sellado por fuera, completamente crudo por dentro. Frío en el centro.",
    color: "#8B0000",
  },
  {
    nombre: "Medio Rojo",
    nombreEn: "Rare",
    descripcion: "Cocido por fuera, centro rojo y tibio.",
    color: "#B22222",
  },
  {
    nombre: "Medio",
    nombreEn: "Medium Rare",
    descripcion: "Centro rosa-rojizo, jugoso y tibio.",
    color: "#CD5C5C",
  },
  {
    nombre: "Tres Cuartos",
    nombreEn: "Medium",
    descripcion: "Centro rosa claro, menos jugoso.",
    color: "#D2907F",
  },
  {
    nombre: "Bien Cocido",
    nombreEn: "Well Done",
    descripcion: "Cocido por completo, sin rosa. Menos jugoso.",
    color: "#A0826D",
  },
];
