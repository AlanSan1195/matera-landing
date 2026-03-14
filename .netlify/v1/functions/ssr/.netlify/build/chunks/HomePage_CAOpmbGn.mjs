import { d as createComponent, m as maybeRenderHead, f as addAttribute, k as renderSlot, l as renderScript, r as renderTemplate, g as createAstro, j as renderComponent, s as spreadAttributes, n as defineScriptVars } from "./astro/server_Bj52SDah.mjs";
import { $ as $$Layout } from "./Layout_DIkg7jCl.mjs";
const $$Astro$j = createAstro();
const $$Portada = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Portada;
  const { color, subtitle, tagline, id } = Astro2.props;
  const textColor = `text-${color}`;
  return renderTemplate`${maybeRenderHead()}<section class="landing-section min-h-screen w-screen text-center overflow-hidden flex items-center"${addAttribute(color, "data-header-color")}${addAttribute(id, "id")}> <div class="opacity-85 z-30 relative h-auto text-end mt-4 md:w-[700px] lg:w-[900px] xl:w-[1200px] flex flex-col flex-wrap ml-auto text-pretty"> <header class="lg:p-2"> <h1${addAttribute(`${textColor} font-boldes mr-2 mt-4  lg:mr-4  lg:pt-28 xl:pt-48 text-[65px] leading-none text-opacity-95  lg:text-7xl xl:text-8xl  text-pretty`, "class")}> <span class="text-red-700 text-7xl lg:text-8xl font-bold">"</span>${tagline ?? "Buenos Amigos, Buenos Vinos, Buenos Aires."}<span class="text-red-700 text-7xl lg:text-8xl font-bold">"</span> </h1> <p${addAttribute(`${textColor} opacity-85  mr-2 ml-5 lg:mr-4 text-[13px] font-semibold md:font-medium  md:text-xl xl:text-xl mt-3`, "class")}> ${subtitle} </p> </header> <footer class="py-6 flex flex-col flex-grow justify-end mr-auto ml-auto md:mr-14"> ${renderSlot($$result, $$slots["footer"])} </footer> </div> <div class="absolute top-0 bottom-0 h-full w-full z-10 sm:hidden md:block"> ${renderSlot($$result, $$slots["background"])} </div> </section> ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Portada.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Portada.astro", void 0);
const es = {
  // Header nav
  nav: {
    reserva: "Reserva",
    carta: "Carta",
    eventos: "Eventos",
    nosotros: "Nosotros",
    reservar: "Reservar"
  },
  // Hero / Portada
  hero: {
    tagline: "Buenos Amigos, Buenos Vinos, Buenos Aires.",
    subtitle: "Conoce esa sensación de hospitalidad y personalización de la que tanto se habla entre amigos.",
    cta: "Reservar"
  },
  // Carrusel / Eventos
  carousel: {
    slide1: {
      title: "Seleccionamos los mejores productos",
      description: "Todos los días escogemos nuestros ingredientes con el mayor cuidado, para ofrecerte la mejor calidad en cada platillo."
    },
    slide2: {
      title: "Casa",
      subtitle: "Matera",
      description: "Tus eventos en las mejores manos. Descubre más sobre nuestros servicios y etiquetas.",
      cta: "Cotiza tu evento"
    },
    slide3: {
      title: "Nuestro estándar de",
      subtitle: "calidad",
      description: "En La Matera nos preocupamos por ofrecerte los mejores productos y, sobre todo, la variedad de ellos. Pregunta por nuestros cortes especiales del día y su origen."
    },
    slide4: {
      title: "Para los amantes del buen",
      subtitle: "Vino",
      description: "Uno de los lugares de la ciudad más recomendados para los que quieren saber del tema y también de los preferidos para los expertos. Nuestra cava cuenta con más de 200 etiquetas de vino."
    },
    slide5: {
      title: "De nuestra cocina a tu mesa",
      description: "Conoce toda la variedad de productos que puedes encontrar en nuestra tienda de Pan Nuestro, ubicada sobre Nelson.",
      cta: "Ver más"
    }
  },
  // Nosotros / We
  nosotros: {
    heading: "Nosotros",
    ambienteTitle: "Ambiente",
    ambienteText: "Restaurante argentino de ambiente bohemio. Su cava subterránea, con temperatura y humedad controladas, alberga más de 200 etiquetas de vinos del nuevo y viejo mundo. La consistente calidad de nuestra cocina, el especial cuidado en los detalles y la personalidad sencilla y acogedora del lugar, han consolidado a La Matera como un punto de referencia en la ciudad.",
    equipoTitle: "Equipo",
    equipoText: "Nace en el año 2000, escoltada de verdes árboles en una atmósfera cálida y fresca."
  },
  // Footer
  footer: {
    horarios: "Horarios:",
    lunes: "Lunes a Sábado de 1:00 pm a 12:00 am",
    domingo: "Domingo de 1:00 pm a 10:30 pm",
    facturar: "Facturar",
    derechos: "© 2024 La Matera Todos los derechos reservados"
  },
  // Menú / Carta
  carta: {
    heading: "Menú",
    subheading: "Apetito por lo que hacemos",
    tabs: {
      empanadas: "Empanadas",
      entradas: "Entradas",
      ensaladas: "Ensaladas",
      pizzas: "Pizzas",
      cocina: "Cocina",
      postres: "Postres",
      vinos: "Vinos",
      parrilla: "Parrilla"
    },
    parrillaTabs: {
      granja: "Granja",
      campo: "Campo",
      mar: "Mar"
    },
    campoInfo: "Los cortes que aquí servimos son de la más alta calidad, por lo tanto, no requieren ser sometidos a ningún proceso de marinado o suavizado que altere su textura y/o sabor natural.",
    // Traducciones de platos — en español no se muestran (son el original)
    platos: {
      // Empanadas
      "Carne": { nombre: "", descripcion: "" },
      "Carne picante": { nombre: "", descripcion: "" },
      "Espinaca": { nombre: "", descripcion: "" },
      "Queso y cebolla": { nombre: "", descripcion: "" },
      "Humita": { nombre: "", descripcion: "" },
      "Roquefort": { nombre: "", descripcion: "" },
      "Siciliana": { nombre: "", descripcion: "" }
    }
  },
  // Selector de idioma
  lang: {
    label: "Idioma",
    es: "Español",
    en: "English",
    ko: "한국어",
    zh: "中文",
    ja: "日本語"
  }
};
const en = {
  // Header nav
  nav: {
    reserva: "Reserve",
    carta: "Menu",
    eventos: "Events",
    nosotros: "About Us",
    reservar: "Book a Table"
  },
  // Hero / Portada
  hero: {
    tagline: "Good Friends, Good Wines, Good Times.",
    subtitle: "Discover the warm hospitality and personal touch that friends have been talking about.",
    cta: "Book a Table"
  },
  // Carrusel / Eventos
  carousel: {
    slide1: {
      title: "We select the finest ingredients",
      description: "Every day we choose our ingredients with the utmost care, to offer you the best quality in every dish."
    },
    slide2: {
      title: "Casa",
      subtitle: "Matera",
      description: "Your events in the best hands. Discover more about our services and wine labels.",
      cta: "Quote your event"
    },
    slide3: {
      title: "Our standard of",
      subtitle: "quality",
      description: "At La Matera we care about offering you the best products and, above all, the variety of them. Ask about our special cuts of the day and their origin."
    },
    slide4: {
      title: "For lovers of fine",
      subtitle: "Wine",
      description: "One of the most recommended places in the city for those who want to learn about wine and one of the favorites for experts. Our cellar has more than 200 wine labels."
    },
    slide5: {
      title: "From our kitchen to your table",
      description: "Discover the full range of products you can find in our Pan Nuestro store, located on Nelson.",
      cta: "See more"
    }
  },
  // Nosotros / We
  nosotros: {
    heading: "About Us",
    ambienteTitle: "Atmosphere",
    ambienteText: "A bohemian-style Argentine restaurant. Its underground wine cellar, with controlled temperature and humidity, houses more than 200 wine labels from the new and old world. The consistent quality of our cuisine, the special attention to detail and the simple, welcoming personality of the place have established La Matera as a reference point in the city.",
    equipoTitle: "Our Team",
    equipoText: "Founded in the year 2000, nestled among green trees in a warm and fresh atmosphere."
  },
  // Footer
  footer: {
    horarios: "Hours:",
    lunes: "Monday to Saturday 1:00 pm – 12:00 am",
    domingo: "Sunday 1:00 pm – 10:30 pm",
    facturar: "Invoice",
    derechos: "© 2024 La Matera All rights reserved"
  },
  // Menú / Carta
  carta: {
    heading: "Menu",
    subheading: "An appetite for what we do",
    tabs: {
      empanadas: "Empanadas",
      entradas: "Starters",
      ensaladas: "Salads",
      pizzas: "Pizzas",
      cocina: "Kitchen",
      postres: "Desserts",
      vinos: "Wines",
      parrilla: "Grill"
    },
    parrillaTabs: {
      granja: "Farm",
      campo: "Field",
      mar: "Sea"
    },
    campoInfo: "The cuts we serve here are of the highest quality and therefore do not require any marinating or tenderizing process that would alter their natural texture and/or flavor.",
    platos: {
      // Empanadas
      "Carne": { nombre: "Beef", descripcion: "Knife-cut beef empanada with olives, paprika, raisins and a touch of egg." },
      "Carne picante": { nombre: "Spicy Beef", descripcion: "Just like our traditional empanada but with a spicy kick." },
      "Espinaca": { nombre: "Spinach", descripcion: "With ricotta cheese, parmesan, white pepper and nutmeg." },
      "Queso y cebolla": { nombre: "Cheese & Onion", descripcion: "Red onion, gouda cheese and seasoning." },
      "Humita": { nombre: "Corn", descripcion: "Sweet corn, spring onion, bell pepper and gouda cheese. Soft and delicious." },
      "Roquefort": { nombre: "Roquefort", descripcion: "Filled with roquefort and mozzarella, with a fresh touch of celery. Intense and balanced." },
      "Siciliana": { nombre: "Sicilian", descripcion: "Pizza dough filled with ham, cheeses, roasted red pepper and green olive, topped with rich pomodoro sauce." },
      // Entradas
      "Bocaditos de espinaca": { nombre: "Spinach bites", descripcion: "Crispy spinach bites with parmesan, beaten egg and a hint of garlic." },
      "Pimiento asado": { nombre: "Roasted pepper", descripcion: "Roasted red pepper, peeled and served cold with olive oil and garlic slices. Perfect with meat." },
      "Espárragos al vapor": { nombre: "Steamed asparagus", descripcion: "Steamed or grilled asparagus, served with olive oil and parmesan cheese." },
      "Hongos al ajillo": { nombre: "Garlic mushrooms", descripcion: "Mushrooms sautéed with garlic, olive oil, parsley and guajillo chili. Served with croutons." },
      "Berenjenas a la parmesana": { nombre: "Eggplant parmigiana", descripcion: "Fried eggplant with mozzarella, bathed in pomodoro sauce and gratinated with parmesan." },
      "Chorizo argentino": { nombre: "Argentine chorizo", descripcion: "House-made classic Argentine sausage made with beef and pork." },
      "Chistorra": { nombre: "Chistorra", descripcion: "House-made Spanish-style sausage made with 100% pork." },
      "Mollejas a la parrilla": { nombre: "Grilled sweetbreads", descripcion: "Beef sweetbreads grilled carefully for 20 minutes. We use the heart part for exceptional flavor." },
      "Mollejas al verdeo": { nombre: "Sweetbreads al verdeo", descripcion: "Sweetbreads sautéed with spring onion and serrano chili, slightly spicy. Served with tortillas." },
      "Chinchulines a la parrilla": { nombre: "Grilled chitterlings", descripcion: "Grilled to preserve their soft texture and great flavor." },
      "Malfatti de espinaca": { nombre: "Spinach malfatti", descripcion: "House-made pasta filled with spinach and ricotta cheese, bathed in leek sauce." },
      "Provoleta Tomate": { nombre: "Provoleta Tomato", descripcion: "Semi-aged Argentine cheese with tomato and half a roasted pepper." },
      "Provoleta Arúgula": { nombre: "Provoleta Arugula", descripcion: "Semi-aged Argentine cheese served with serrano ham and arugula." },
      "Tártara de Rib-Eye": { nombre: "Rib-Eye Tartare", descripcion: "Knife-cut rib eye mixed with anchovies and capers." },
      "Carpaccio de jamón serrano": { nombre: "Serrano ham carpaccio", descripcion: "With a touch of olive oil and balsamic vinegar, garnished with basil and grana padano." },
      "Mejillones con chistorra": { nombre: "Mussels with chistorra", descripcion: "Steamed with chistorra and french fries, one of the house favorites." },
      // Ensaladas
      "Ensalada Verde": { nombre: "Green Salad", descripcion: "Fresh salad with a carefully selected mix of vegetables and house vinaigrette." },
      "Ensalada de tomate con burrata": { nombre: "Tomato & burrata salad", descripcion: "Mix of tomatoes, red onion, croutons and burrata from San Miguel de Allende." },
      "Mykonos": { nombre: "Mykonos", descripcion: "Fresh tomato and feta cheese salad with homemade vinaigrette and fresh herbs." },
      "Corazones de lechuga asados": { nombre: "Grilled lettuce hearts", descripcion: "Bathed in homemade Caesar dressing with a touch of Grana Padano. A delicious option." },
      "Arúgula": { nombre: "Arugula", descripcion: "Fresh arugula mix dressed with garlic and lemon." },
      "Arúgula Cherry": { nombre: "Arugula Cherry", descripcion: "Fresh arugula with cherry tomatoes, a touch of balsamic, olive oil and Grana Padano." },
      "Palmito con alcachofa": { nombre: "Hearts of palm & artichoke", descripcion: "Tender palm hearts and artichoke hearts with sun-dried tomato, olive oil, lemon and a hint of crushed chili." },
      // Cocina
      "Fettuccine Bolognesa": { nombre: "Fettuccine Bolognese", descripcion: "House-made long pasta served with meat ragù bolognese sauce." },
      "Fettuccine con crema de hongos": { nombre: "Fettuccine mushroom cream", descripcion: "Mushroom cream with setas, portobello, a touch of garlic and white wine." },
      "Fettuccine negro": { nombre: "Black fettuccine", descripcion: "Squid ink pasta served with squid sautéed in their ink, white wine and cream." },
      "Ravioles de espinaca al pomodoro": { nombre: "Spinach ravioli pomodoro", descripcion: "Pasta squares filled with spinach and ricotta cheese." },
      "Farroto: vegetales y grana padano": { nombre: "Farroto: vegetables & grana padano", descripcion: "" },
      "Sorrentinos de ricota con salsa rosa": { nombre: "Ricotta sorrentinos rosa", descripcion: "Filled with ricotta, parmesan and chopped walnut. Served in pink sauce (pomodoro and cream)." },
      "Lasagna bolognesa": { nombre: "Bolognese lasagna", descripcion: "Pasta in bolognese sauce with spinach and mushroom, gratinated with cheese. Contains walnut." },
      "Hamburguesa al estilo de la matera": { nombre: "Matera-style burger", descripcion: "House-made: 130g beef, grilled sweetbread with provolone cheese, tomato, red lettuce and house dressing." },
      "Milanesa de pollo": { nombre: "Chicken milanesa", descripcion: "Breaded and fried chicken breast (200g), one side dish to choose." },
      "Milanesa de res": { nombre: "Beef milanesa", descripcion: "Breaded and fried beef fillet (250g), one side dish to choose." },
      // Postres
      "Helados": { nombre: "Ice cream", descripcion: "Vanilla, Chocolate, Mascarpone, Alfajor, Ferrero." },
      "Flan casero": { nombre: "Homemade flan", descripcion: "Served with dulce de leche buttons and whipped cream." },
      "Alfajor de hojaldre": { nombre: "Puff pastry alfajor", descripcion: "Classic Argentine dessert with puff pastry layers joined with dulce de leche and chopped walnut." },
      "Martín fierro": { nombre: "Martín Fierro", descripcion: "Vanilla ice cream with flambéed strawberries." },
      "Mousse de chocolate": { nombre: "Chocolate mousse", descripcion: "Dark chocolate mousse served with red berries." },
      "Crepa Matera": { nombre: "Matera crêpe", descripcion: "With mascarpone and dulce de leche sauce." },
      "Pastel de chocolate": { nombre: "Chocolate cake", descripcion: "Sponge cake base with walnuts and dark chocolate mousse." },
      "Ate con queso": { nombre: "Ate with cheese", descripcion: "Also known as vigilante. Sweet potato ate served with gouda cheese and dulce de leche buttons." },
      "Tarta de manzana": { nombre: "Apple tart", descripcion: "Sablé crust, diced apple, cinnamon streusel and a scoop of vanilla ice cream." },
      "Camote al rescoldo": { nombre: "Ember-roasted sweet potato", descripcion: "Cooked in the grill ashes with streusel, caramel and mascarpone ice cream." },
      // Parrilla — Mar
      "Pulpo con papas españolas": { nombre: "Octopus with Spanish potatoes", descripcion: "" },
      "Salmón": { nombre: "Salmon", descripcion: "" },
      "Camarones con adobo de chiles": { nombre: "Shrimp with chili marinade", descripcion: "" },
      "Lonja de robalo": { nombre: "Sea bass fillet", descripcion: "" },
      "Calamar patagónico provenzal": { nombre: "Provençal Patagonian squid", descripcion: "" },
      // Parrilla — Granja
      "1/2 Pato laqueado con puré de manzana": { nombre: "1/2 Lacquered duck with apple purée", descripcion: "" },
      "1/2 Pollo al oreganato": { nombre: "1/2 Oreganato chicken", descripcion: "" },
      "1/2 Pollo Malazzo": { nombre: "1/2 Malazzo chicken", descripcion: "" },
      "Rack de cordero": { nombre: "Lamb rack", descripcion: "" },
      "Matambrito de cerdo": { nombre: "Pork matambrito", descripcion: "" },
      // Parrilla — Campo (cortes)
      "Bife de lomo": { nombre: "Tenderloin steak", descripcion: "Completely lean, tender cuts." },
      "Vacio": { nombre: "Flank steak", descripcion: "Juicy cut with medium marbling and firm texture." },
      "Entraña": { nombre: "Skirt steak", descripcion: "Intense flavor. Recommended with skin for a crispy texture." },
      "Asado de tira": { nombre: "Short ribs", descripcion: "Crosscut ribs, abundant marbling and great flavor." },
      "Bife de chorizo": { nombre: "Strip steak", descripcion: "Highly marbled and juicy, our most tender cuts." },
      "Especiales": { nombre: "Specials", descripcion: "Our special cuts are of limited availability." }
    }
  },
  // Selector de idioma
  lang: {
    label: "Language",
    es: "Español",
    en: "English",
    ko: "한국어",
    zh: "中文",
    ja: "日本語"
  }
};
const ko = {
  // Header nav
  nav: {
    reserva: "예약",
    carta: "메뉴",
    eventos: "이벤트",
    nosotros: "소개",
    reservar: "테이블 예약"
  },
  // Hero / Portada
  hero: {
    tagline: "좋은 친구, 좋은 와인, 좋은 시간.",
    subtitle: "친구들 사이에서 화제가 되는 따뜻한 환대와 개인화된 서비스를 경험해 보세요.",
    cta: "테이블 예약"
  },
  // Carrusel / Eventos
  carousel: {
    slide1: {
      title: "최고의 재료를 엄선합니다",
      description: "매일 최선의 주의를 기울여 재료를 선택하여, 모든 요리에서 최고의 품질을 제공합니다."
    },
    slide2: {
      title: "카사",
      subtitle: "마테라",
      description: "최고의 손길로 진행되는 당신의 이벤트. 서비스와 와인 레이블에 대해 더 알아보세요.",
      cta: "이벤트 견적 요청"
    },
    slide3: {
      title: "우리의 품질",
      subtitle: "기준",
      description: "라 마테라에서는 최고의 제품과 다양성을 제공하기 위해 노력합니다. 오늘의 특별 부위와 그 원산지에 대해 문의하세요."
    },
    slide4: {
      title: "훌륭한 와인을 사랑하는 분들을 위한",
      subtitle: "와인",
      description: "와인에 대해 배우고 싶은 분들과 전문가들이 가장 즐겨 찾는 곳 중 하나입니다. 저희 셀러에는 200개 이상의 와인 레이블이 있습니다."
    },
    slide5: {
      title: "우리 주방에서 당신의 테이블로",
      description: "넬슨 거리에 위치한 판 누에스트로 매장에서 찾을 수 있는 다양한 제품을 알아보세요.",
      cta: "더 보기"
    }
  },
  // Nosotros / We
  nosotros: {
    heading: "소개",
    ambienteTitle: "분위기",
    ambienteText: "보헤미안 분위기의 아르헨티나 레스토랑입니다. 온도와 습도가 조절되는 지하 와인 셀러에는 신구 세계의 200개 이상의 와인 레이블이 있습니다. 일관된 요리 품질, 세부 사항에 대한 특별한 주의, 그리고 편안하고 환영하는 분위기로 라 마테라는 도시의 랜드마크가 되었습니다.",
    equipoTitle: "우리 팀",
    equipoText: "2000년에 설립되어 따뜻하고 상쾌한 분위기의 푸른 나무들에 둘러싸여 있습니다."
  },
  // Footer
  footer: {
    horarios: "영업시간:",
    lunes: "월요일~토요일 오후 1:00 – 자정 12:00",
    domingo: "일요일 오후 1:00 – 오후 10:30",
    facturar: "영수증",
    derechos: "© 2024 La Matera 모든 권리 보유"
  },
  // Menú / Carta
  carta: {
    heading: "메뉴",
    subheading: "우리가 하는 일에 대한 열정",
    tabs: {
      empanadas: "엠파나다",
      entradas: "애피타이저",
      ensaladas: "샐러드",
      pizzas: "피자",
      cocina: "요리",
      postres: "디저트",
      vinos: "와인",
      parrilla: "그릴"
    },
    parrillaTabs: {
      granja: "농장",
      campo: "들판",
      mar: "바다"
    },
    campoInfo: "저희가 제공하는 부위는 최고 품질로, 자연적인 식감과 풍미를 바꾸는 마리네이드나 연육 처리가 필요하지 않습니다.",
    platos: {
      "Carne": { nombre: "소고기", descripcion: "칼로 자른 소고기 엠파나다, 올리브·파프리카·건포도·달걀 포함." },
      "Carne picante": { nombre: "매운 소고기", descripcion: "전통 엠파나다에 매운맛을 더했습니다." },
      "Espinaca": { nombre: "시금치", descripcion: "리코타 치즈, 파르미지아노, 흰 후추, 육두구." },
      "Queso y cebolla": { nombre: "치즈와 양파", descripcion: "적양파, 고다 치즈, 조미료." },
      "Humita": { nombre: "옥수수", descripcion: "단옥수수, 파, 피망, 고다 치즈. 부드럽고 맛있습니다." },
      "Roquefort": { nombre: "로크포르", descripcion: "로크포르와 모짜렐라, 셀러리 향. 강하고 균형 잡힌 맛." },
      "Siciliana": { nombre: "시칠리안", descripcion: "피자 반죽에 햄·치즈·구운 피망·그린 올리브 충전, 포모도로 소스." },
      "Bocaditos de espinaca": { nombre: "시금치 바이트", descripcion: "파르미지아노·달걀·마늘이 들어간 바삭한 시금치 바이트." },
      "Pimiento asado": { nombre: "구운 피망", descripcion: "구운 홍피망을 올리브오일과 마늘 슬라이스와 함께 차갑게." },
      "Espárragos al vapor": { nombre: "찐 아스파라거스", descripcion: "올리브오일과 파르미지아노를 곁들인 아스파라거스." },
      "Hongos al ajillo": { nombre: "마늘 버섯", descripcion: "마늘·올리브오일·파슬리·과히요 고추로 볶은 버섯, 크루통 제공." },
      "Berenjenas a la parmesana": { nombre: "가지 파르미지아나", descripcion: "모짜렐라와 포모도로 소스를 곁들인 튀긴 가지, 파르미지아노 그라탱." },
      "Chorizo argentino": { nombre: "아르헨티나 초리조", descripcion: "소고기와 돼지고기로 만든 수제 클래식 초리조." },
      "Chistorra": { nombre: "치스토라", descripcion: "100% 돼지고기로 만든 수제 스페인식 소시지." },
      "Mollejas a la parrilla": { nombre: "구운 스위트브레드", descripcion: "20분간 정성스럽게 구운 소 스위트브레드. 심장 부위 사용." },
      "Mollejas al verdeo": { nombre: "베르데오 스위트브레드", descripcion: "파와 세라노 고추로 볶은 스위트브레드, 토르티야 제공." },
      "Chinchulines a la parrilla": { nombre: "구운 곱창", descripcion: "부드러운 식감과 풍미를 살려 구운 곱창." },
      "Malfatti de espinaca": { nombre: "시금치 말파티", descripcion: "시금치와 리코타를 채운 수제 파스타, 대파 소스." },
      "Provoleta Tomate": { nombre: "토마토 프로볼레타", descripcion: "토마토와 구운 피망을 곁들인 아르헨티나 반경질 치즈." },
      "Provoleta Arúgula": { nombre: "루콜라 프로볼레타", descripcion: "세라노 햄과 루콜라를 곁들인 아르헨티나 반경질 치즈." },
      "Tártara de Rib-Eye": { nombre: "립아이 타르타르", descripcion: "칼로 자른 립아이에 안초비와 케이퍼 믹스." },
      "Carpaccio de jamón serrano": { nombre: "세라노 햄 카르파치오", descripcion: "올리브오일·발사믹, 바질과 그라나 파다노 장식." },
      "Mejillones con chistorra": { nombre: "치스토라 홍합", descripcion: "치스토라와 감자튀김을 곁들인 찜 홍합, 하우스 인기 메뉴." },
      "Ensalada Verde": { nombre: "그린 샐러드", descripcion: "엄선된 채소와 하우스 비네그레트의 신선한 샐러드." },
      "Ensalada de tomate con burrata": { nombre: "토마토 부라타 샐러드", descripcion: "토마토 믹스·적양파·크루통과 산 미겔 데 아옌데 부라타." },
      "Mykonos": { nombre: "미코노스", descripcion: "토마토와 페타 치즈, 수제 비네그레트와 신선한 허브." },
      "Corazones de lechuga asados": { nombre: "구운 상추 심장", descripcion: "수제 시저 드레싱과 그라나 파다노를 곁들인 구운 상추." },
      "Arúgula": { nombre: "루콜라", descripcion: "마늘과 레몬으로 드레싱한 신선한 루콜라." },
      "Arúgula Cherry": { nombre: "루콜라 체리", descripcion: "체리 토마토·발사믹·올리브오일·그라나 파다노를 곁들인 루콜라." },
      "Palmito con alcachofa": { nombre: "팔미토 아티초크", descripcion: "팜 하트와 아티초크, 선드라이 토마토·올리브오일·레몬·고추." },
      "Fettuccine Bolognesa": { nombre: "볼로네제 페투치네", descripcion: "수제 긴 파스타에 고기 라구 소스." },
      "Fettuccine con crema de hongos": { nombre: "버섯 크림 페투치네", descripcion: "버섯·포르토벨로 크림, 마늘과 화이트 와인." },
      "Fettuccine negro": { nombre: "블랙 페투치네", descripcion: "오징어 먹물 파스타에 오징어·화이트 와인·크림." },
      "Ravioles de espinaca al pomodoro": { nombre: "시금치 라비올리", descripcion: "시금치와 리코타를 채운 파스타 사각형." },
      "Farroto: vegetales y grana padano": { nombre: "파로토: 채소와 그라나 파다노", descripcion: "" },
      "Sorrentinos de ricota con salsa rosa": { nombre: "리코타 소렌티노 로제", descripcion: "리코타·파르미지아노·호두 충전, 로제 소스(포모도로+크림)." },
      "Lasagna bolognesa": { nombre: "볼로네제 라자냐", descripcion: "시금치·버섯 볼로네제 소스 파스타, 치즈 그라탱. 호두 포함." },
      "Hamburguesa al estilo de la matera": { nombre: "마테라 버거", descripcion: "수제 130g 패티, 그릴 스위트브레드·프로볼로네·토마토·적상추·하우스 드레싱." },
      "Milanesa de pollo": { nombre: "치킨 밀라네사", descripcion: "빵가루 튀긴 닭 가슴살(200g), 사이드 선택 가능." },
      "Milanesa de res": { nombre: "소고기 밀라네사", descripcion: "빵가루 튀긴 소고기 필레(250g), 사이드 선택 가능." },
      "Helados": { nombre: "아이스크림", descripcion: "바닐라, 초콜릿, 마스카포네, 알파호르, 페레로." },
      "Flan casero": { nombre: "수제 플란", descripcion: "둘세 데 레체와 휘핑 크림 제공." },
      "Alfajor de hojaldre": { nombre: "퍼프 페이스트리 알파호르", descripcion: "둘세 데 레체와 호두가 든 아르헨티나 전통 디저트." },
      "Martín fierro": { nombre: "마르틴 피에로", descripcion: "바닐라 아이스크림과 플람베 딸기." },
      "Mousse de chocolate": { nombre: "초콜릿 무스", descripcion: "다크 초콜릿 무스와 레드 베리." },
      "Crepa Matera": { nombre: "마테라 크레페", descripcion: "마스카포네와 둘세 데 레체 소스." },
      "Pastel de chocolate": { nombre: "초콜릿 케이크", descripcion: "호두와 다크 초콜릿 무스가 든 스펀지 케이크." },
      "Ate con queso": { nombre: "아테와 치즈", descripcion: "고구마 아테에 고다 치즈와 둘세 데 레체." },
      "Tarta de manzana": { nombre: "애플 타르트", descripcion: "사블레 크러스트, 사과, 시나몬 스트로이젤, 바닐라 아이스크림." },
      "Camote al rescoldo": { nombre: "잿불 고구마", descripcion: "그릴 재에서 구워 스트로이젤·카라멜·마스카포네 아이스크림 제공." },
      "Pulpo con papas españolas": { nombre: "스페인 감자 문어", descripcion: "" },
      "Salmón": { nombre: "연어", descripcion: "" },
      "Camarones con adobo de chiles": { nombre: "칠리 새우", descripcion: "" },
      "Lonja de robalo": { nombre: "농어 필레", descripcion: "" },
      "Calamar patagónico provenzal": { nombre: "프로방살 파타고니아 오징어", descripcion: "" },
      "1/2 Pato laqueado con puré de manzana": { nombre: "1/2 라커드 오리·사과 퓨레", descripcion: "" },
      "1/2 Pollo al oreganato": { nombre: "1/2 오레가나토 치킨", descripcion: "" },
      "1/2 Pollo Malazzo": { nombre: "1/2 말라조 치킨", descripcion: "" },
      "Rack de cordero": { nombre: "양갈비 랙", descripcion: "" },
      "Matambrito de cerdo": { nombre: "돼지 마탐브리토", descripcion: "" },
      "Bife de lomo": { nombre: "안심 스테이크", descripcion: "완전 무지방의 부드러운 부위." },
      "Vacio": { nombre: "플랭크 스테이크", descripcion: "중간 마블링의 육즙 있는 부위." },
      "Entraña": { nombre: "스커트 스테이크", descripcion: "강한 풍미. 껍질과 함께 추천." },
      "Asado de tira": { nombre: "숏 립", descripcion: "횡단 절단 갈비, 풍부한 마블링." },
      "Bife de chorizo": { nombre: "스트립 스테이크", descripcion: "마블링이 높고 육즙이 풍부한 부위." },
      "Especiales": { nombre: "스페셜", descripcion: "특별 부위는 한정 제공됩니다." }
    }
  },
  // Selector de idioma
  lang: {
    label: "언어",
    es: "Español",
    en: "English",
    ko: "한국어",
    zh: "中文",
    ja: "日本語"
  }
};
const zh = {
  // Header nav
  nav: {
    reserva: "预订",
    carta: "菜单",
    eventos: "活动",
    nosotros: "关于我们",
    reservar: "预订座位"
  },
  // Hero / Portada
  hero: {
    tagline: "好朋友，好美酒，好时光。",
    subtitle: "体验朋友之间口耳相传的温馨款待与个性化服务。",
    cta: "预订座位"
  },
  // Carrusel / Eventos
  carousel: {
    slide1: {
      title: "我们精选最优质的食材",
      description: "我们每天都以最大的用心挑选食材，为您的每一道菜提供最高品质。"
    },
    slide2: {
      title: "卡萨",
      subtitle: "马特拉",
      description: "您的活动由最好的团队承办。了解更多关于我们的服务和酒标。",
      cta: "活动报价"
    },
    slide3: {
      title: "我们的品质",
      subtitle: "标准",
      description: "在拉马特拉，我们致力于为您提供最优质的产品及其多样性。请询问今日特别切割及其产地。"
    },
    slide4: {
      title: "为美酒爱好者",
      subtitle: "精选佳酿",
      description: "这里是城市中最受推荐的品酒场所之一，也是专家们的最爱之一。我们的酒窖拥有200多个葡萄酒标。"
    },
    slide5: {
      title: "从我们的厨房到您的餐桌",
      description: "了解我们位于纳尔逊街的Pan Nuestro门店中丰富的产品种类。",
      cta: "查看更多"
    }
  },
  // Nosotros / We
  nosotros: {
    heading: "关于我们",
    ambienteTitle: "氛围",
    ambienteText: "波西米亚风格的阿根廷餐厅。地下酒窖温湿度可控，收藏了来自新旧世界200多个酒标。一贯的烹饪品质、对细节的特别关注以及简单温馨的环境，使拉马特拉成为这座城市的标志性餐厅。",
    equipoTitle: "我们的团队",
    equipoText: "创立于2000年，坐落于绿树环绕、温馨清新的环境之中。"
  },
  // Footer
  footer: {
    horarios: "营业时间：",
    lunes: "周一至周六 下午1:00 – 凌晨12:00",
    domingo: "周日 下午1:00 – 晚上10:30",
    facturar: "开发票",
    derechos: "© 2024 La Matera 版权所有"
  },
  // Menú / Carta
  carta: {
    heading: "菜单",
    subheading: "对美食的热情",
    tabs: {
      empanadas: "饺子派",
      entradas: "前菜",
      ensaladas: "沙拉",
      pizzas: "披萨",
      cocina: "厨房",
      postres: "甜点",
      vinos: "葡萄酒",
      parrilla: "烤架"
    },
    parrillaTabs: {
      granja: "农场",
      campo: "田野",
      mar: "海鲜"
    },
    campoInfo: "我们提供的部位品质极高，因此无需任何腌制或软化处理，以免改变其天然口感和/或风味。",
    platos: {
      "Carne": { nombre: "牛肉", descripcion: "刀切牛肉馅饼，含橄榄、辣椒粉、葡萄干和少许鸡蛋。" },
      "Carne picante": { nombre: "辣牛肉", descripcion: "与传统饺子派相同，但带有辣味。" },
      "Espinaca": { nombre: "菠菜", descripcion: "含瑞可塔奶酪、帕尔玛干酪、白胡椒和肉豆蔻。" },
      "Queso y cebolla": { nombre: "奶酪洋葱", descripcion: "红洋葱、高达奶酪和调味料。" },
      "Humita": { nombre: "玉米", descripcion: "甜玉米、葱、甜椒和高达奶酪，口感细腻美味。" },
      "Roquefort": { nombre: "洛克福尔", descripcion: "洛克福尔和马苏里拉奶酪馅，带有清新芹菜风味。" },
      "Siciliana": { nombre: "西西里", descripcion: "披萨面团，馅料为火腿、奶酪、烤红椒和绿橄榄，淋上番茄酱。" },
      "Bocaditos de espinaca": { nombre: "菠菜小点", descripcion: "酥脆菠菜小点，含帕尔玛干酪、鸡蛋和少许大蒜。" },
      "Pimiento asado": { nombre: "烤甜椒", descripcion: "烤红椒去皮冷食，配橄榄油和大蒜片，适合搭配肉类。" },
      "Espárragos al vapor": { nombre: "蒸芦笋", descripcion: "蒸或烤芦笋，配橄榄油和帕尔玛干酪。" },
      "Hongos al ajillo": { nombre: "蒜炒蘑菇", descripcion: "大蒜、橄榄油、欧芹和瓜希略辣椒炒蘑菇，配烤面包丁。" },
      "Berenjenas a la parmesana": { nombre: "茄子帕尔玛", descripcion: "炸茄子配马苏里拉和番茄酱，帕尔玛干酪焗烤。" },
      "Chorizo argentino": { nombre: "阿根廷香肠", descripcion: "自制经典阿根廷香肠，猪牛肉制作。" },
      "Chistorra": { nombre: "西班牙香肠", descripcion: "自制西班牙风格香肠，100%猪肉。" },
      "Mollejas a la parrilla": { nombre: "烤甜面包", descripcion: "精心烤制20分钟的牛甜面包，使用心脏部位，风味卓越。" },
      "Mollejas al verdeo": { nombre: "青葱甜面包", descripcion: "葱和塞拉诺辣椒炒甜面包，微辣，配玉米饼。" },
      "Chinchulines a la parrilla": { nombre: "烤小肠", descripcion: "烤制保留柔软口感和浓郁风味。" },
      "Malfatti de espinaca": { nombre: "菠菜马尔法蒂", descripcion: "自制菠菜瑞可塔馅面团，配韭葱酱。" },
      "Provoleta Tomate": { nombre: "番茄普罗沃拉", descripcion: "阿根廷半熟奶酪配番茄和半个烤椒。" },
      "Provoleta Arúgula": { nombre: "芝麻菜普罗沃拉", descripcion: "阿根廷半熟奶酪配塞拉诺火腿和芝麻菜。" },
      "Tártara de Rib-Eye": { nombre: "肋眼鞑靼", descripcion: "刀切肋眼拌鳀鱼和酸豆。" },
      "Carpaccio de jamón serrano": { nombre: "塞拉诺火腿薄片", descripcion: "橄榄油、香醋、罗勒和格拉娜帕达诺。" },
      "Mejillones con chistorra": { nombre: "香肠贻贝", descripcion: "西班牙香肠和薯条蒸贻贝，本店最受欢迎之一。" },
      "Ensalada Verde": { nombre: "绿色沙拉", descripcion: "精选蔬菜配本店特制油醋汁。" },
      "Ensalada de tomate con burrata": { nombre: "番茄布拉塔沙拉", descripcion: "混合番茄、红洋葱、烤面包丁和圣米格尔布拉塔奶酪。" },
      "Mykonos": { nombre: "米科诺斯", descripcion: "番茄和菲达奶酪沙拉，配自制油醋汁和新鲜香草。" },
      "Corazones de lechuga asados": { nombre: "烤生菜心", descripcion: "自制凯撒酱和格拉娜帕达诺，美味之选。" },
      "Arúgula": { nombre: "芝麻菜", descripcion: "大蒜柠檬调味的新鲜芝麻菜。" },
      "Arúgula Cherry": { nombre: "芝麻菜樱桃", descripcion: "芝麻菜配樱桃番茄、香醋、橄榄油和格拉娜帕达诺。" },
      "Palmito con alcachofa": { nombre: "棕榈心朝鲜蓟", descripcion: "棕榈心和朝鲜蓟配日晒番茄、橄榄油、柠檬和碎辣椒。" },
      "Fettuccine Bolognesa": { nombre: "波洛尼亚宽面", descripcion: "自制长面配肉酱。" },
      "Fettuccine con crema de hongos": { nombre: "蘑菇奶油宽面", descripcion: "蘑菇、波特贝勒奶油配大蒜和白葡萄酒。" },
      "Fettuccine negro": { nombre: "墨鱼汁宽面", descripcion: "墨鱼汁面配炒鱿鱼、白葡萄酒和奶油。" },
      "Ravioles de espinaca al pomodoro": { nombre: "菠菜馄饨", descripcion: "菠菜瑞可塔馅方形面食。" },
      "Farroto: vegetales y grana padano": { nombre: "蔬菜格拉娜帕达诺法罗托", descripcion: "" },
      "Sorrentinos de ricota con salsa rosa": { nombre: "瑞可塔索伦蒂诺粉红酱", descripcion: "瑞可塔、帕尔玛干酪和碎核桃馅，配粉红酱（番茄+奶油）。" },
      "Lasagna bolognesa": { nombre: "波洛尼亚千层面", descripcion: "菠菜蘑菇肉酱千层面，奶酪焗烤。含核桃。" },
      "Hamburguesa al estilo de la matera": { nombre: "马特拉汉堡", descripcion: "自制130g牛肉饼，烤甜面包配普罗沃拉奶酪、番茄、紫生菜和本店酱汁。" },
      "Milanesa de pollo": { nombre: "鸡肉米兰尼萨", descripcion: "裹粉炸鸡胸肉（200g），可选配菜。" },
      "Milanesa de res": { nombre: "牛肉米兰尼萨", descripcion: "裹粉炸牛肉片（250g），可选配菜。" },
      "Helados": { nombre: "冰淇淋", descripcion: "香草、巧克力、马斯卡彭、阿尔法霍尔、费列罗。" },
      "Flan casero": { nombre: "自制布丁", descripcion: "配焦糖奶油和打发奶油。" },
      "Alfajor de hojaldre": { nombre: "千层酥饼", descripcion: "阿根廷传统甜点，千层酥夹焦糖奶油和碎核桃。" },
      "Martín fierro": { nombre: "马丁·菲耶罗", descripcion: "香草冰淇淋配火焰草莓。" },
      "Mousse de chocolate": { nombre: "巧克力慕斯", descripcion: "黑巧克力慕斯配红果。" },
      "Crepa Matera": { nombre: "马特拉可丽饼", descripcion: "马斯卡彭和焦糖奶油酱。" },
      "Pastel de chocolate": { nombre: "巧克力蛋糕", descripcion: "核桃海绵蛋糕底和黑巧克力慕斯。" },
      "Ate con queso": { nombre: "甜薯果酱配奶酪", descripcion: "甜薯果酱配高达奶酪和焦糖奶油。" },
      "Tarta de manzana": { nombre: "苹果挞", descripcion: "沙布雷底，苹果丁，肉桂酥粒，香草冰淇淋。" },
      "Camote al rescoldo": { nombre: "炉灰烤红薯", descripcion: "烤架余烬烤制，配酥粒、焦糖和马斯卡彭冰淇淋。" },
      "Pulpo con papas españolas": { nombre: "西班牙土豆章鱼", descripcion: "" },
      "Salmón": { nombre: "三文鱼", descripcion: "" },
      "Camarones con adobo de chiles": { nombre: "辣椒腌虾", descripcion: "" },
      "Lonja de robalo": { nombre: "鲈鱼片", descripcion: "" },
      "Calamar patagónico provenzal": { nombre: "普罗旺斯巴塔哥尼亚鱿鱼", descripcion: "" },
      "1/2 Pato laqueado con puré de manzana": { nombre: "1/2 烤鸭配苹果泥", descripcion: "" },
      "1/2 Pollo al oreganato": { nombre: "1/2 牛至鸡", descripcion: "" },
      "1/2 Pollo Malazzo": { nombre: "1/2 马拉佐鸡", descripcion: "" },
      "Rack de cordero": { nombre: "羊排", descripcion: "" },
      "Matambrito de cerdo": { nombre: "猪马坦布里托", descripcion: "" },
      "Bife de lomo": { nombre: "里脊牛排", descripcion: "完全精瘦的嫩切部位。" },
      "Vacio": { nombre: "侧腹牛排", descripcion: "多汁、中等大理石纹、质地紧实。" },
      "Entraña": { nombre: "裙带牛排", descripcion: "口味浓郁，建议带皮，增加酥脆感。" },
      "Asado de tira": { nombre: "短排骨", descripcion: "横切肋骨，大理石纹丰富，风味十足。" },
      "Bife de chorizo": { nombre: "纽约客牛排", descripcion: "大理石纹丰富多汁，最嫩的部位。" },
      "Especiales": { nombre: "特选", descripcion: "特选部位供应有限。" }
    }
  },
  // Selector de idioma
  lang: {
    label: "语言",
    es: "Español",
    en: "English",
    ko: "한국어",
    zh: "中文",
    ja: "日本語"
  }
};
const ja = {
  // Header nav
  nav: {
    reserva: "予約",
    carta: "メニュー",
    eventos: "イベント",
    nosotros: "私たちについて",
    reservar: "テーブル予約"
  },
  // Hero / Portada
  hero: {
    tagline: "良い友人、良いワイン、良い時間。",
    subtitle: "友人たちの間で話題になっている温かいおもてなしと個性的なサービスをご体験ください。",
    cta: "テーブル予約"
  },
  // Carrusel / Eventos
  carousel: {
    slide1: {
      title: "最高の食材を厳選しています",
      description: "毎日、細心の注意を払って食材を選び、すべての料理に最高の品質をお届けします。"
    },
    slide2: {
      title: "カサ",
      subtitle: "マテラ",
      description: "最高のチームがお客様のイベントをお手伝いします。サービスとワインラベルについてもっと詳しく。",
      cta: "イベントの見積もり"
    },
    slide3: {
      title: "私たちの",
      subtitle: "品質基準",
      description: "ラ・マテラでは、最高の製品とその多様性をお届けするよう努めています。本日のスペシャルカットとその産地についてお気軽にお尋ねください。"
    },
    slide4: {
      title: "上質なワインを愛する方々へ",
      subtitle: "ワイン",
      description: "ワインを学びたい方にも、専門家にも最も愛される場所の一つです。セラーには200種類以上のワインラベルが揃っています。"
    },
    slide5: {
      title: "私たちのキッチンからあなたのテーブルへ",
      description: "ネルソン通りにあるパン・ヌエストロの店舗で見つかる豊富な商品をご覧ください。",
      cta: "もっと見る"
    }
  },
  // Nosotros / We
  nosotros: {
    heading: "私たちについて",
    ambienteTitle: "雰囲気",
    ambienteText: "ボヘミアンスタイルのアルゼンチンレストランです。温度と湿度が管理された地下ワインセラーには、新旧世界から200種類以上のワインラベルが揃っています。一貫した料理の品質、細部への特別なこだわり、そしてシンプルで温かみのある雰囲気により、ラ・マテラは街のランドマークとして確固たる地位を築いています。",
    equipoTitle: "チーム",
    equipoText: "2000年に設立され、温かく爽やかな雰囲気の中、緑の木々に囲まれています。"
  },
  // Footer
  footer: {
    horarios: "営業時間：",
    lunes: "月曜〜土曜 午後1:00 – 深夜12:00",
    domingo: "日曜日 午後1:00 – 午後10:30",
    facturar: "請求書",
    derechos: "© 2024 La Matera 全著作権所有"
  },
  // Menú / Carta
  carta: {
    heading: "メニュー",
    subheading: "私たちの料理への情熱",
    tabs: {
      empanadas: "エンパナーダ",
      entradas: "前菜",
      ensaladas: "サラダ",
      pizzas: "ピザ",
      cocina: "キッチン",
      postres: "デザート",
      vinos: "ワイン",
      parrilla: "グリル"
    },
    parrillaTabs: {
      granja: "農場",
      campo: "フィールド",
      mar: "海鮮"
    },
    campoInfo: "ここでお出しする部位は最高品質のため、自然な食感や風味を損なうマリネや軟化処理は不要です。",
    platos: {
      "Carne": { nombre: "牛肉", descripcion: "ナイフカットの牛肉エンパナーダ、オリーブ・パプリカ・レーズン・卵入り。" },
      "Carne picante": { nombre: "スパイシー牛肉", descripcion: "伝統的なエンパナーダにスパイスを加えたもの。" },
      "Espinaca": { nombre: "ほうれん草", descripcion: "リコッタ・パルミジャーノ・白胡椒・ナツメグ入り。" },
      "Queso y cebolla": { nombre: "チーズ＆オニオン", descripcion: "赤玉ねぎ、ゴーダチーズ、スパイス。" },
      "Humita": { nombre: "コーン", descripcion: "スイートコーン・ネギ・ピーマン・ゴーダチーズ。やさしい味わい。" },
      "Roquefort": { nombre: "ロックフォール", descripcion: "ロックフォールとモッツァレラ、セロリのさわやかな風味。" },
      "Siciliana": { nombre: "シチリアン", descripcion: "ピザ生地にハム・チーズ・ローストパプリカ・緑オリーブ、ポモドーロソース。" },
      "Bocaditos de espinaca": { nombre: "ほうれん草バイツ", descripcion: "パルミジャーノ・卵・にんにく入りのサクサクほうれん草バイツ。" },
      "Pimiento asado": { nombre: "ローストパプリカ", descripcion: "冷製ローストパプリカにオリーブオイルとにんにくスライス。肉料理に最適。" },
      "Espárragos al vapor": { nombre: "蒸しアスパラガス", descripcion: "オリーブオイルとパルミジャーノを添えた蒸しまたはグリルアスパラガス。" },
      "Hongos al ajillo": { nombre: "にんにくキノコ", descripcion: "にんにく・オリーブオイル・パセリ・グアヒーヨチリで炒めたキノコ、クルトン添え。" },
      "Berenjenas a la parmesana": { nombre: "ナスのパルミジャーナ", descripcion: "モッツァレラとポモドーロソースのナス揚げ、パルミジャーノグラタン。" },
      "Chorizo argentino": { nombre: "アルゼンチンチョリソ", descripcion: "牛肉と豚肉の自家製クラシックチョリソ。" },
      "Chistorra": { nombre: "チストラ", descripcion: "100%豚肉の自家製スペイン風ソーセージ。" },
      "Mollejas a la parrilla": { nombre: "グリルスウィートブレッド", descripcion: "20分間丁寧にグリルした牛スウィートブレッド。ハート部位使用。" },
      "Mollejas al verdeo": { nombre: "ベルデオスウィートブレッド", descripcion: "ネギとセラノチリで炒めたスウィートブレッド、微辛。トルティーヤ添え。" },
      "Chinchulines a la parrilla": { nombre: "グリルもつ", descripcion: "やわらかい食感と豊かな風味を残すグリル。" },
      "Malfatti de espinaca": { nombre: "ほうれん草マルファッティ", descripcion: "ほうれん草とリコッタの手打ちパスタ、ポロネギソース。" },
      "Provoleta Tomate": { nombre: "トマトプロボレッタ", descripcion: "トマトとローストパプリカを添えたアルゼンチンセミハードチーズ。" },
      "Provoleta Arúgula": { nombre: "ルーコラプロボレッタ", descripcion: "セラーノハムとルーコラを添えたアルゼンチンセミハードチーズ。" },
      "Tártara de Rib-Eye": { nombre: "リブアイタルタル", descripcion: "ナイフカットのリブアイにアンチョビとケッパー。" },
      "Carpaccio de jamón serrano": { nombre: "セラーノハムカルパッチョ", descripcion: "オリーブオイル・バルサミコ、バジルとグラナパダーノ。" },
      "Mejillones con chistorra": { nombre: "チストラムール貝", descripcion: "チストラとフライドポテト添え蒸しムール貝、当店人気メニュー。" },
      "Ensalada Verde": { nombre: "グリーンサラダ", descripcion: "厳選野菜と自家製ビネグレットのフレッシュサラダ。" },
      "Ensalada de tomate con burrata": { nombre: "トマトブラータサラダ", descripcion: "ミックストマト・赤玉ねぎ・クルトンとサンミゲルブラータ。" },
      "Mykonos": { nombre: "ミコノス", descripcion: "トマトとフェタチーズのサラダ、自家製ビネグレットと新鮮なハーブ。" },
      "Corazones de lechuga asados": { nombre: "グリルレタス", descripcion: "自家製シーザードレッシングとグラナパダーノ。" },
      "Arúgula": { nombre: "ルーコラ", descripcion: "にんにくとレモンで和えたフレッシュルーコラ。" },
      "Arúgula Cherry": { nombre: "ルーコラチェリー", descripcion: "チェリートマト・バルサミコ・オリーブオイル・グラナパダーノ入りルーコラ。" },
      "Palmito con alcachofa": { nombre: "パルミトアーティチョーク", descripcion: "ヤシの芽とアーティチョーク、ドライトマト・オリーブオイル・レモン・チリ。" },
      "Fettuccine Bolognesa": { nombre: "ボロネーゼフェットチーネ", descripcion: "自家製長麺に肉のラグーソース。" },
      "Fettuccine con crema de hongos": { nombre: "きのこクリームフェットチーネ", descripcion: "きのこ・ポルトベロのクリーム、にんにくと白ワイン。" },
      "Fettuccine negro": { nombre: "墨フェットチーネ", descripcion: "イカ墨パスタにイカ炒め・白ワイン・クリーム。" },
      "Ravioles de espinaca al pomodoro": { nombre: "ほうれん草ラビオリ", descripcion: "ほうれん草とリコッタのパスタ。" },
      "Farroto: vegetales y grana padano": { nombre: "野菜とグラナパダーノのファロット", descripcion: "" },
      "Sorrentinos de ricota con salsa rosa": { nombre: "リコッタソレンティーノ ロゼ", descripcion: "リコッタ・パルミジャーノ・砕いたくるみ、ロゼソース（ポモドーロ+クリーム）。" },
      "Lasagna bolognesa": { nombre: "ボロネーゼラザニア", descripcion: "ほうれん草きのこのボロネーゼ、チーズグラタン。くるみ含む。" },
      "Hamburguesa al estilo de la matera": { nombre: "マテラバーガー", descripcion: "自家製130gパティ、グリルスウィートブレッド・プロボロン・トマト・紫レタス・ハウスドレッシング。" },
      "Milanesa de pollo": { nombre: "チキンミラネサ", descripcion: "衣揚げ鶏胸肉（200g）、サイド1品選択可。" },
      "Milanesa de res": { nombre: "牛肉ミラネサ", descripcion: "衣揚げ牛ヒレ肉（250g）、サイド1品選択可。" },
      "Helados": { nombre: "アイスクリーム", descripcion: "バニラ、チョコレート、マスカルポーネ、アルファホール、フェレロ。" },
      "Flan casero": { nombre: "自家製プリン", descripcion: "ドゥルセデレチェボタンとホイップクリーム添え。" },
      "Alfajor de hojaldre": { nombre: "パイ生地アルファホール", descripcion: "ドゥルセデレチェと砕いたくるみのアルゼンチン伝統デザート。" },
      "Martín fierro": { nombre: "マルティン・フィエロ", descripcion: "バニラアイスクリームとフランベいちご。" },
      "Mousse de chocolate": { nombre: "チョコレートムース", descripcion: "ダークチョコレートムースとベリー添え。" },
      "Crepa Matera": { nombre: "マテラクレープ", descripcion: "マスカルポーネとドゥルセデレチェソース。" },
      "Pastel de chocolate": { nombre: "チョコレートケーキ", descripcion: "くるみ入りスポンジケーキとダークチョコレートムース。" },
      "Ate con queso": { nombre: "スウィートポテトジャム＆チーズ", descripcion: "さつまいものアテにゴーダチーズとドゥルセデレチェ。" },
      "Tarta de manzana": { nombre: "アップルタルト", descripcion: "サブレ生地、角切りりんご、シナモンストロイゼル、バニラアイス添え。" },
      "Camote al rescoldo": { nombre: "炭火焼きさつまいも", descripcion: "グリルの灰で焼き、ストロイゼル・キャラメル・マスカルポーネアイス添え。" },
      "Pulpo con papas españolas": { nombre: "スペイン風ポテトとタコ", descripcion: "" },
      "Salmón": { nombre: "サーモン", descripcion: "" },
      "Camarones con adobo de chiles": { nombre: "チリマリネのエビ", descripcion: "" },
      "Lonja de robalo": { nombre: "スズキのフィレ", descripcion: "" },
      "Calamar patagónico provenzal": { nombre: "プロバンス風パタゴニアイカ", descripcion: "" },
      "1/2 Pato laqueado con puré de manzana": { nombre: "1/2 ラッカードダック・アップルピューレ", descripcion: "" },
      "1/2 Pollo al oreganato": { nombre: "1/2 オレガナートチキン", descripcion: "" },
      "1/2 Pollo Malazzo": { nombre: "1/2 マラッツォチキン", descripcion: "" },
      "Rack de cordero": { nombre: "ラムラック", descripcion: "" },
      "Matambrito de cerdo": { nombre: "豚マタンブリート", descripcion: "" },
      "Bife de lomo": { nombre: "テンダーロインステーキ", descripcion: "完全赤身の柔らかい部位。" },
      "Vacio": { nombre: "フランクステーキ", descripcion: "中程度の霜降り、肉汁が多い部位。" },
      "Entraña": { nombre: "スカートステーキ", descripcion: "濃厚な風味。皮付きでサクサク感もおすすめ。" },
      "Asado de tira": { nombre: "ショートリブ", descripcion: "横断カットのリブ、豊かな霜降りと旨み。" },
      "Bife de chorizo": { nombre: "ストリップステーキ", descripcion: "霜降りが豊富でジューシーな部位。" },
      "Especiales": { nombre: "スペシャル", descripcion: "特別部位は数量限定です。" }
    }
  },
  // Selector de idioma
  lang: {
    label: "言語",
    es: "Español",
    en: "English",
    ko: "한국어",
    zh: "中文",
    ja: "日本語"
  }
};
const languages = {
  es: "ES",
  en: "EN",
  ko: "KO",
  zh: "ZH",
  ja: "JA"
};
const langNames = {
  es: "Español",
  en: "English",
  ko: "한국어",
  zh: "中文",
  ja: "日本語"
};
const translations = { es, en, ko, zh, ja };
function useTranslations(lang) {
  return translations[lang] ?? translations.es;
}
function getLangFromUrl(url) {
  const [, segment] = url.pathname.split("/");
  if (segment && segment in translations) return segment;
  return "es";
}
function getLocalizedPath(currentPath, targetLang) {
  const langPrefixes = Object.keys(translations).filter((l) => l !== "es");
  let cleanPath = currentPath;
  for (const prefix of langPrefixes) {
    if (cleanPath.startsWith(`/${prefix}/`) || cleanPath === `/${prefix}`) {
      cleanPath = cleanPath.replace(`/${prefix}`, "") || "/";
      break;
    }
  }
  if (targetLang === "es") return cleanPath || "/";
  return `/${targetLang}${cleanPath === "/" ? "" : cleanPath}` || `/${targetLang}`;
}
const $$Astro$i = createAstro();
const $$HomeReserva = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$HomeReserva;
  const { lang } = Astro2.props;
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Portada", $$Portada, { "subtitle": t.hero.subtitle, "tagline": t.hero.tagline, "color": "white", "id": "home" }, { "background": ($$result2) => renderTemplate`${maybeRenderHead()}<video class="hidden md:block object-center object-cover h-screen w-full" autoplay muted loop src="/video.mp4"></video>`, "footer": ($$result2) => renderTemplate`<div> <a class="border-[2px] border-red-900 bg-white/5 backdrop-blur-sm text-sm rounded font-boldes text-white px-12 py-2 inline-block hover:bg-red-800 hover:text-white transition-colors lg:text-xl" href="https://api.whatsapp.com/send/?phone=523313557728&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"> ${t.hero.cta}</a> </div>` })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/HomeReserva.astro", void 0);
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="
#home"><img class="sm:block h-16 w-12 -ml-6 md:h-36 md:w-16 md:mt-24 md:ml-12 lg:h-[200px] lg:w-44 lg:ml-1 lg:top-4 top-3 transition-colors duration-500 hover:cursor-pointer fixed" src="https://www.lamatera.mx/wp-content/themes/bmx-lamatera/assets/img-logotipo.svg" alt="logo de la matera en sm "> </a>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Logo.astro", void 0);
const $$Astro$h = createAstro();
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`<!-- USER --><!-- <svg {...Astro.props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-user"
  ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
    d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path
    d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg
> --><!-- HAMBURGER  -->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/icons/User.astro", void 0);
const $$Logo2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img class="h-[54px] w-[54px] hover:cursor-pointer  " src="https://www.lamatera.mx/wp-content/themes/bmx-lamatera/assets/img-logotipo.svg" alt="logo de la matera en el header">`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Logo2.astro", void 0);
const $$Astro$g = createAstro();
const $$GlobeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$GlobeIcon;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")} aria-hidden="true"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M3.6 9h16.8"></path> <path d="M3.6 15h16.8"></path> <path d="M11.5 3a17 17 0 0 0 0 18"></path> <path d="M12.5 3a17 17 0 0 1 0 18"></path> </svg>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/icons/GlobeIcon.astro", void 0);
const $$Astro$f = createAstro();
const $$LangSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LangSelector;
  const { currentLang, currentPath } = Astro2.props;
  const langEntries = Object.entries(languages);
  return renderTemplate`${maybeRenderHead()}<div id="lang-selector" class="relative"> <!-- Botón trigger --> <button id="lang-btn" aria-label="Seleccionar idioma" aria-expanded="false" aria-haspopup="listbox" class="flex items-center gap-1.5 border-[2px] border-white/30 bg-white/5 backdrop-blur-sm rounded px-2.5 py-1.5 text-white/80 hover:border-red-900 hover:text-white transition-colors text-xs font-medium"> ${renderComponent($$result, "GlobeIcon", $$GlobeIcon, { "class": "size-4 shrink-0" })} <span class="tracking-wider">${languages[currentLang]}</span> <!-- Chevron --> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" id="lang-chevron" class="transition-transform duration-200" aria-hidden="true"> <path d="M6 9l6 6l6 -6"></path> </svg> </button> <!-- Dropdown --> <ul id="lang-dropdown" role="listbox" aria-label="Idiomas disponibles" class="hidden absolute right-0 top-full mt-2 min-w-[130px] bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-[100]"> ${langEntries.map(([lang]) => {
    const href = getLocalizedPath(currentPath, lang);
    const isActive = lang === currentLang;
    return renderTemplate`<li role="option"${addAttribute(isActive, "aria-selected")}> <a${addAttribute(href, "href")}${addAttribute([
      "flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors",
      isActive ? "text-white bg-red-900/40 font-medium" : "text-white/70 hover:text-white hover:bg-white/10"
    ], "class:list")}> <span>${langNames[lang]}</span> <span class="text-xs font-bold tracking-wider text-white/40">${languages[lang]}</span> </a> </li>`;
  })} </ul> </div> ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LangSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LangSelector.astro", void 0);
const $$Astro$e = createAstro();
const $$LandingHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LandingHeader;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header id="landing-header" class="py-5 md:py-3 lg:py-3 px-10 flex items-center fixed top-0 w-full justify-between z-[70] text-white/65 bg-black/25 rounded-b-3xl"> <div id="logo1" class="flex flex-grow basis-0 md:pointer-events-none"> <img>${renderComponent($$result, "Logo", $$Logo, {})} </div> <div id="logo2" class="opacity-0 md:flex absolute"> <img>${renderComponent($$result, "Logo2", $$Logo2, {})} </div> <nav class="hidden md:block"> <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-boldes [&>li>a]:text-xl [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <li> <a class="hover:text-red-800" href="#home"${addAttribute(t.nav.reserva, "aria-label")}>${t.nav.reserva}</a> </li> <li> <a class="hover:text-red-800" href="#carta"${addAttribute(t.nav.carta, "aria-label")}>${t.nav.carta}</a> </li> <li><a class="hover:text-red-800" href="#eventos">${t.nav.eventos}</a></li> <li> <a class="hover:text-red-800" href="#nosotros"${addAttribute(t.nav.nosotros, "aria-label")}>${t.nav.nosotros}</a> </li> </ul> </nav> <!-- Derecha: selector de idioma + icono usuario móvil --> <nav class="flex flex-grow justify-end basis-0 items-center gap-3"> <!-- Selector de idioma: visible siempre, separado del icono usuario --> ${renderComponent($$result, "LangSelector", $$LangSelector, { "currentLang": lang, "currentPath": currentPath })} <ul class="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"> <!-- <li class="hidden md:block font-boldes text-xl hover:text-red-800">
        <a href="#">Usuario</a>
      </li> --> <li id="user-border" class="md:hidden border-[3px] border-red-900 bg-white/5 backdrop-blur-sm text-xl rounded font-medium text-white inline-block hover:bg-red-900 hover:text-white transition-colors"> ${renderComponent($$result, "User", $$User, { "id": "menu-btn", "class": "m-2 hover:cursor-pointer" })} </li> </ul> </nav> <!-- Menú modal móvil (pantalla completa) --> <nav id="modal-menu" class="hidden lg:hidden flex flex-col bg-orange-50 fixed top-0 left-0 right-0 bottom-0"> <button id="close-btn" class="w-screen flex justify-end p-5"> <img class="text-black h-6" src="/close-icon.svg" alt="close image"> </button> <ul class="flex flex-col mt-4 [&>li]:m-3 [&>li>a]:flex [&>li>a]:justify-between [&>li>a]:duration-200 [&>li>a]:text-black [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-6 [&>li>a]:py-3 [&>li>a]:rounded-md [&>li>a]:w-full"> <li> <a class="hover:bg-slate-300 hover:text-red-500" href="#home"> ${t.nav.reservar} <img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a> </li> <li> <a class="hover:bg-slate-300 hover:text-red-500" href="#carta">${t.nav.carta}<img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a> </li> <li> <a class="hover:bg-slate-300 hover:text-red-500" href="#nosotros">${t.nav.nosotros}<img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a> </li> <li> <a class="hover:bg-slate-300 hover:text-red-500" href="#eventos">${t.nav.eventos}<img class="h-5" alt="arrow icon" src="/arrow-icon.svg"></a> </li> </ul> <!-- boton de usuario  --> <!-- <SignedOut>
      <SignInButton
       class="mt-12 p-2  bg-slate-200 backdrop-blur-sm flex justify-center items-center border-2  border-slate-300 shadow-md hover:cursor-pointer transition hover:scale-110 font-medium  rounded-xl mx-auto"
       mode="modal"

     >
       <img class="font-bold text-lg" />
       <p class="flex justify-center mx-auto text-black  text-xs">Iniciar sesión</p> 
     </SignInButton>
    </SignedOut>
    <SignedIn>
      <div class="flex  items-center">
        <a href="/Dropbox"  rel="noopener noreferrer" class="flex flex-col justify-center items-center mx-auto k mt-1 text-lg text-[#09f] font-semibold hover:scale-110">DropBox 
        <Book class="size-8 text-black stroke-[#09f]" />
      </a>
      </div>
    </SignedIn> --> </nav> <div id="menu-backdrop"${addAttribute(` 
      absolute bg-white/10 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-400
      ease-in-out opacity-1 -z-10
    `, "class")}></div> ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LandingHeader.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LandingHeader.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LandingHeader.astro?astro&type=script&index=2&lang.ts")} ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LandingHeader.astro?astro&type=script&index=3&lang.ts")} </header>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LandingHeader.astro", void 0);
const $$Astro$d = createAstro();
const $$CutCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CutCard;
  const { id, titulo, info, items, cols = 2, esBife = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="flex justify-center mx-auto border-[2px] border-[#B56C09]/60 bg-black/70 backdrop-blur-sm text-sm rounded-xl text-white content-center m-2 md:rounded-xl md:border-none md:w-screen md:bg-black/30"> <div class="flex items-center mx-6 mt-3 md:justify-between md:w-screen md:px-8"> <p class="opacity-0 flex">........</p> <p class="text-white font-boldes text-xl flex w-full justify-center opacity-80 md:text-red-800"> ${titulo} </p> <button id="botonCerrar" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-[#B56C09] dark:hover:text-white" data-modal-hide="top-left-modal"${addAttribute(`Cerrar ${titulo}`, "aria-label")}> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> </button> </div> <div class="flex flex-col justify-center items-center"> <img class="size-28 mx-auto"${addAttribute(info.src, "src")}${addAttribute(info.name, "alt")}> <p class="text-sm mb-4 top-0 w-[280px] text-center text-wrap opacity-80"> ${info.description} </p> </div> <div${addAttribute(`grid grid-cols-${cols} m-4 justify-center gap-8 md:gap-2 text-center`, "class")}> ${esBife ? items.map((bife) => renderTemplate`<div class="justify-between flex flex-col text-sm leading-none items-center text-center gap-y-1"> <p class="font-boldes mb-2">${bife.name}</p> <div class="flex gap-2"> <p class="font-bold text-xs text-red-600/80">${bife.quality}</p> </div> ${bife.quality2 && renderTemplate`<div class="flex gap-2"> <p class="font-bold text-xs text-red-600/80">${bife.quality2}</p> </div>`} <p class="text-sm opacity-50">${bife.size}</p> </div>`) : items.map((item) => renderTemplate`<div class="justify-between flex flex-col text-sm leading-none items-center text-center gap-y-1"> <p class="font-boldes">${item.name}</p> <p class="text-sm opacity-50">${item.size}</p> </div>`)} </div> </div>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/CutCard.astro", void 0);
const empanadas = [
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Carne",
    description: "Empanada de carne cortada a cuchillo, contiene aceitunas, paprica, pasas de uva y un toque de huevo"
    // price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Carne picante",
    description: "Igual que nuestra empanada tradicional pero con un toque de picante"
    // price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Espinaca",
    description: "Con queso ricotta, parmesano, pimienta blanca y nuez moscada"
    // price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Queso y cebolla",
    description: "Cebolla morada, queso gouda y condimentos"
    // price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Humita",
    description: "Empanada con elote dulce, cebolla cambray, pimiento morrón, y queso gouda. Sabor suave y delicioso en cada bocado."
    // price: "$60",
  },
  {
    src: "/imagenes/carta/empanadaCarne.webp",
    name: "Roquefort",
    description: "Rellena de queso roquefort y mozzarella, con un toque fresco de apio. Sabor intenso y equilibrado."
    // price: "$70",
  },
  {
    src: "/imagenes/carta/empanadas/siciliana.webp",
    name: "Siciliana",
    description: "Hecha con masa de pizza, rellena de jamón, quesos, pimiento rojo asado y aceituna verde, bañada en una rica salsa pomodoro."
    // price: "$140",
  }
];
const pizzas = [
  {
    src: "/imagenes/carta/pizzas/pizzaMargarita.webp",
    name: "Margarita",
    description: "Clásica combinación de mozzarella derretida, salsa de tomate y albahaca fresca"
    // price: "$170",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaHongos.webp",
    name: "Hongos",
    description: "Mozzarella, salsa de tomate y champiñones salteados enteros, llenos de sabor."
    // price: "$180",
  },
  {
    src: "/imagenes/carta/pizzas/4quesos.webp",
    name: "4 Quesos",
    description: "Mezcla de mozzarella, provolone, parmesano y roquefort, un clásico equilibrio."
    // price: "$170",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaAnchoas.webp",
    name: "Tomate con anchoas",
    description: "Una opción sabrosa y sin queso. Rebanadas frescas de tomate, anchoas, aceitunas y ajo, rociadas con aceite de oliva."
    // price: "$260",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaBurrata.webp",
    name: "Jamón con burrata",
    description: "Base de salsa blanca, jamón hecho en casa, burrata fresca de San Miguel de Allende, y un toque de oliva y pistache hace de esta pizza una delicia."
    // price: "$280",
  },
  {
    src: "/imagenes/carta/pizzas/pizzaPancceta.webp",
    name: "Panceta y provolone",
    description: "Salsa de tomate, mozzarella y provolone, coronada con panceta casera crujiente. Un deleite irresistible para los amantes de los sabores intensos."
    // price: "$60",
  }
];
const entradas = [
  {
    src: "/imagenes/carta/entradas/bocaditos.webp",
    name: "Bocaditos de espinaca",
    description: "Bocaditos crujientes de espinaca con queso parmesano, huevo batido y un toque de ajo."
    // price: "$185",
  },
  {
    src: "/imagenes/carta/entradas/pimientoAsado.webp",
    name: "Pimiento asado",
    description: "Pimiento rojo asado, pelado y servido frío con aceite de oliva y lajas de ajo. Perfecto para acompañar cortes de carne."
    // price: "$130",
  },
  {
    src: "/imagenes/carta/entradas/esparragos.webp",
    name: "Espárragos al vapor",
    description: "Espárragos al vapor o a la parrilla, servidos con aceite de oliva y queso parmesano."
    // price: "$155",
  },
  {
    src: "/imagenes/carta/entradas/hongos.webp",
    name: "Hongos al ajillo",
    description: "Hongos al ajillo salteados con ajo, aceite de oliva, perejil y chile guajillo. Acompañados de crutones."
    // price: "$170",
  },
  {
    src: "/imagenes/carta/entradas/berenjenas.webp",
    name: "Berenjenas a la parmesana",
    description: "Berenjenas fritas con mozzarella, bañadas en salsa pomodoro y gratinadas con parmesano."
    // price: "$185",
  },
  {
    src: "/imagenes/carta/entradas/chorizoArgentino.webp",
    name: "Chorizo argentino",
    description: "Elaborado en casa, el embutido clásico de las parrilladas argentinas hecho con carne de res y cerdo."
    // price: "$110",
  },
  {
    src: "/imagenes/carta/entradas/chistorra.webp",
    name: "Chistorra",
    description: "Elaborada en casa, embutido estilo español, la carne es 100% de cerdo."
    // price: "$135",
  },
  {
    src: "/imagenes/carta/entradas/mollejaParrilla.webp",
    name: "Mollejas a la parrilla",
    description: "Mollejas de res a la parrilla, cocinadas con cuidado durante 20 minutos. Utilizamos la parte del corazón para un sabor excepcional."
    // price: "$310",
  },
  {
    src: "/imagenes/carta/entradas/mollejasVerdeo.webp",
    name: "Mollejas al verdeo",
    description: "Mollejas salteadas con cebolla cambray y chile serrano, ligeramente picantes. Se sirven con tortillas."
    // price: "$290",
  },
  {
    src: "/imagenes/carta/entradas/chinchulines.webp",
    name: "Chinchulines a la parrilla",
    description: "Parrillados para conservar su textura suave y gran sabor."
    // price: "$210",
  },
  {
    src: "/imagenes/carta/entradas/malfatis.webp",
    name: "Malfatti de espinaca",
    description: "La pasta es hecha en casa, rellena de espinaca y queso ricotta, bañada en salsa de poro."
    // price: "$250",
  },
  {
    src: "/imagenes/carta/entradas/provoletaTomate.webp",
    name: "Provoleta Tomate",
    description: "Queso semi maduro de origen argentino, con tomate y medio pimiento asado."
    // price: "$220",
  },
  {
    src: "/imagenes/carta/entradas/provoletaSerrano.webp",
    name: "Provoleta Arúgula",
    description: "Queso semi maduro de origen argentino, servida con jamón serrano y arúgula."
    // price: "$260",
  },
  {
    src: "/imagenes/carta/entradas/tartara.webp",
    name: "Tártara de Rib-Eye",
    description: "Carne de rib eye cortada a cuchillo, mezclada con anchoas y alcaparras."
    // price: "$250",
  },
  {
    src: "/imagenes/carta/entradas/carpaccioJamon.webp",
    name: "Carpaccio de jamón serrano",
    description: "Con un toque de aceite de oliva y vinagre balsámico, acompañado de albahaca y grana padano."
    // price: "$260",
  },
  {
    src: "/imagenes/carta/entradas/mejillones.webp",
    name: "Mejillones con chistorra",
    description: "Cocinados al vapor con chistorra y papas a la francesa, uno de los favoritos de la casa."
    // price: "$335",
  }
];
const ensaladas = [
  {
    src: "/imagenes/carta/ensaladas/ensaladaVerde.webp",
    name: "Ensalada Verde",
    description: "Ensalada fresca con una cuidada selección de vegetales y vinagreta especial de la casa."
    // price: "$170",
  },
  {
    src: "/imagenes/carta/ensaladas/tomateBurrata.webp",
    name: "Ensalada de tomate con burrata",
    description: "Mix de tomates, cebolla morada, crutones y burrata de San Miguel de Allende."
    // price: "$280",
  },
  {
    src: "/imagenes/carta/ensaladas/mikonos.webp",
    name: "Mykonos",
    description: "Fresca ensalada de tomate y queso feta, acompañada de una vinagreta casera y hierbas frescas."
    // price: "$180",
  },
  {
    src: "/imagenes/carta//ensaladas/corazones.webp",
    name: "Corazones de lechuga asados",
    description: "Bañados de un aderezo César casero, con un toque de queso Grana Padano. Una opción deliciosa."
    // price: "$210",
  },
  {
    src: "/imagenes/carta/ensaladas/arugula.webp",
    name: "Arúgula",
    description: "Fresca mezcla de arúgula aderezada con ajo y limón."
    // price: "$155",
  },
  {
    src: "/imagenes/carta/ensaladas/arugulaCherry.webp",
    name: "Arúgula Cherry",
    description: "Fresca mezcla de arúgula con jitomates cherry, un toque de balsámico, aceite de oliva y láminas de queso Grana Padano."
    // price: "$170",
  },
  {
    src: "/imagenes/carta/ensaladas/palmitos.webp",
    name: "Palmito con alcachofa",
    description: "Suaves palmitos y corazones de alcachofas, acompañados de jitomate deshidratado, aceite de oliva, limón y un toque de chile quebrado."
    // price: "$250",
  }
];
const cocina = [
  {
    src: "/imagenes/carta/cocina/fetuBolognesa.webp",
    name: "Fettuccine Bolognesa",
    description: "Pasta larga hecha en casa servida con salsa bolognesa que consiste en un ragú de carne."
    // price: "$230",
  },
  {
    src: "/imagenes/carta/cocina/fetucciniHongos.webp",
    name: "Fettuccine con crema de hongos",
    description: "Crema de hongos, setas y portobelo con un toque de ajo y vino blanco."
    // price: "$195",
  },
  {
    src: "/imagenes/carta/cocina/fetuNegro.webp",
    name: "Fettuccine negro",
    description: "Pasta elaborada con tinta de calamar, se sirve con calamares salteados en su tinta, vino blanco y crema."
    // price: "$275",
  },
  {
    src: "/imagenes/carta/cocina/ravioles.webp",
    name: "Ravioles de espinaca al pomodoro",
    description: "Cuadritos de pasta, rellenos de espinacas y queso ricota."
    // price: "$230",
  },
  {
    src: "/imagenes/empanadas.webp",
    name: "Farroto: vegetales y grana padano",
    description: ""
    // price: "$210",
  },
  {
    src: "/imagenes/carta/cocina/sorrentinos.webp",
    name: "Sorrentinos de ricota con salsa rosa",
    description: "Rellenos de queso ricota, parmesano y nuez troceada. Se sirven en salsa rosa (pomodoro y crema)."
    // price: "$250",
  },
  {
    src: "/imagenes/carta/cocina/lasagna.webp",
    name: "Lasagna bolognesa",
    description: "Pasta en salsa boloñesa con espinacas y champiñón, gratinada con queso. También contiene nuez."
    // price: "$250",
  },
  {
    src: "/imagenes/carta/cocina/hamburguesaMatera.webp",
    name: "Hamburguesa al estilo de la matera",
    description: "Preparada en casa: 130 g de carne, molleja asada en la parrilla con queso provolone, jitomate, lechuga morada y aderezo de la casa."
    // price: "$250",
  },
  {
    src: "/imagenes/carta/cocina/milaPollo.webp",
    name: "Milanesa de pollo",
    description: "Pechuga de pollo empanizada y frita (200 g), una guarnición a elegir."
    // price: "$220",
  },
  {
    src: "/imagenes/carta/cocina/milaRes.webp",
    name: "Milanesa de res",
    description: "Hecha con filete de res empanizado y frito (250 g), una guarnición a elegir."
    // price: "$320",
  }
];
const postres = [
  {
    src: "/imagenes/carta/postres/helados.webp",
    name: "Helados",
    description: "Vainilla, Chocolate, Mascarpone, Alfajor, Ferrero."
    // price: "$40",
  },
  {
    src: "/imagenes/carta/postres/flanCasero.webp",
    name: "Flan casero",
    description: "Acompañado con botones de dulce de leche y crema batida."
    // price: "$125",
  },
  {
    src: "/imagenes/carta/postres/alfajor.webp",
    name: "Alfajor de hojaldre",
    description: "Postre típico argentino con capas de hojaldre unidas con dulce de leche y nuez troceada."
    // price: "$175",
  },
  {
    src: "/imagenes/carta/postres/martinFierro.webp",
    name: "Martín fierro",
    description: "Helado de vainilla con fresas flameadas."
    // price: "$155",
  },
  {
    src: "/imagenes/carta/postres/musse.webp",
    name: "Mousse de chocolate",
    description: "Espuma de chocolate semiamargo acompañado con frutos rojos."
    // price: "$125",
  },
  {
    src: "/imagenes/carta/postres/crepa.webp",
    name: "Crepa Matera",
    description: "Con mascarpone y salsa de dulce de leche."
    // price: "$165",
  },
  {
    src: "/imagenes/carta/postres/pastelChocolate.webp",
    name: "Pastel de chocolate",
    description: "Base de bizcocho con nueces y mousse de chocolate semiamargo."
    // price: "$115",
  },
  {
    src: "/imagenes/carta/postres/ate.webp",
    name: "Ate con queso",
    description: "También conocido como vigilante, el ate es de camote acompañado con queso gouda y botones de dulce de leche."
    // price: "$125",
  },
  {
    src: "/imagenes/carta/postres/tartaManzana.webp",
    name: "Tarta de manzana",
    description: "Base de masa sablé, manzana en cubos pequeños, streusel de canela y acompañado con una bola de helado de vainilla."
    // price: "$175",
  },
  {
    src: "/imagenes/carta/postres/camoteRescoldo.webp",
    name: "Camote al rescoldo",
    description: "Cocinado con las cenizas de la parrilla, un poco de streusel, caramelo y un helado de mascarpone."
    // price: "$145",
  }
];
const campoData = [
  {
    src: "/imagenes/carta/parrilla/campo/filetes.webp",
    name: "Bife de lomo",
    description: "Cortes suaves totalmente magros"
  },
  {
    src: "/imagenes/carta/parrilla/campo/vacios.webp",
    name: "Vacio",
    description: "Corte jugoso, con marmoleo intermedio y textura firme"
  },
  {
    src: "/imagenes/carta/parrilla/campo/entrana.webp",
    name: "Entraña",
    description: "Corte con sabor intenso, se recomienda con piel que le aporta una textura crocante"
  },
  {
    src: "/imagenes/carta/parrilla/campo/asado.webp",
    name: "Asado de tira",
    description: "Costillas cortadas transversalmente, abundante marmoleo y mucho sabor"
  },
  {
    src: "/imagenes/carta/parrilla/campo/bifedechorizo.webp",
    name: "Bife de chorizo",
    description: "Muy marmoleados y jugosos, nuestros cortes más suaves."
  },
  {
    src: "/imagenes/carta/parrilla/campo/tomahak.webp",
    name: "Especiales",
    description: "Nuestros cortes especiales son de disponibilidad limitada."
  }
];
const campoMapaData = [
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaFilete.webp",
    name: "Bife de lomo",
    description: "Cortes suaves totalmente magros"
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaVacio.webp",
    name: "Vacio",
    description: "Corte jugoso, con marmoleo intermedio y textura firme"
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaEntrana.webp",
    name: "Entraña",
    description: "Corte con sabor intenso, se recomienda con piel que le aporta una textura crocante"
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaAsado.webp",
    name: "Asado de tira",
    description: "Costillas cortadas transversalmente, abundante marmoleo y mucho sabor"
  },
  {
    src: "/imagenes/carta/parrilla/campo/mapas/mapaBife.webp",
    name: "Bife de chorizo",
    description: "Muy marmoleados y jugosos, nuestros cortes más suaves."
  },
  {
    src: "/imagenes/carta/parrilla/campo/tomahak.webp",
    name: "Especiales",
    description: "Nuestros cortes especiales son de disponibilidad limitada."
  }
];
const marData = [
  {
    src: "/imagenes/carta/parrilla/mar/pulpo.webp",
    name: "Pulpo con papas españolas",
    gramaje: "350gr / 12oz"
    // price: "$490",
  },
  {
    src: "/imagenes/carta/parrilla/mar/salmon.webp",
    name: "Salmón",
    gramaje: "260gr / 9oz"
    // price: "$360",
  },
  {
    src: "/imagenes/carta/parrilla/mar/camarones.webp",
    name: "Camarones con adobo de chiles",
    gramaje: "300gr / 12oz"
    // price: "$320",
  },
  {
    src: "/imagenes/carta/parrilla/mar/robalo.webp",
    name: "Lonja de robalo",
    gramaje: "350gr / 12oz"
    // price: "$550",
  },
  {
    src: "/imagenes/carta/parrilla/mar/calamar.webp",
    name: "Calamar patagónico provenzal",
    gramaje: "350gr / 12oz",
    // price: "$450",
    boton: "."
  }
];
const granjaData = [
  {
    src: "/imagenes/carta/parrilla/granja/patoLaqueado.webp",
    name: "1/2 Pato laqueado con puré de manzana",
    gramaje: "350gr / 12oz"
    // price: "$550",
  },
  {
    src: "/imagenes/carta/parrilla/granja/polloOreganato.webp",
    name: "1/2 Pollo al oreganato",
    gramaje: "260gr / 9oz"
    // price: "$250",
  },
  {
    src: "/imagenes/carta/parrilla/granja/polloMalazo.webp",
    name: "1/2 Pollo Malazzo",
    gramaje: "300gr / 12oz"
    // price: "$285",
  },
  {
    src: "/imagenes/carta/parrilla/granja/rack.webp",
    name: "Rack de cordero",
    gramaje: "500gr / 17oz"
    // price: "$950",
  },
  {
    src: "/imagenes/carta/parrilla/granja/matambrito.webp",
    name: "Matambrito de cerdo",
    gramaje: "350gr / 12oz",
    // price: "$450",
    boton: "."
  }
];
const filetes = [
  // { name: "Lomito",               size: "300gr / 11oz",   price: "$338"  },
  // { name: "Bife de lomo",         size: "400gr / 14oz",   price: "$450"  },
  // { name: "Bife de lomo en caña", size: "800gr / 28oz",   price: "$900"  },
  // { name: "Bife de lomo en caña", size: "1,200gr / 42oz", price: "$1350" },
];
const vacios = [
  // { name: "Vacío", size: "400gr / 14oz",   price: "$500"  },
  // { name: "Vacío", size: "650gr / 23oz",   price: "$830"  },
  // { name: "Vacío", size: "1,300gr / 46oz", price: "$1650" },
];
const entranas = [
  // { name: "Entraña", size: "500gr / 18oz", price: "$670"  },
  // { name: "Entraña", size: "850gr / 30oz", price: "$1100" },
];
const asados = [
  // { name: "Asado de tira",    size: "350gr / 12.3oz",  price: "$470"      },
  // { name: "Asado completo",   size: "3,400gr / 120oz", price: "$950(kg)"  },
];
const bifes = [
  {
    name: "Corazón de bife",
    quality: "Prime:",
    // pricePrime: "$840",
    size: "300gr / 11oz"
  },
  {
    name: "Bife de chorizo Baby",
    quality: "Prime:",
    quality2: "High Choice:",
    // pricePrime: "$990",
    // priceHighChoice: "$660",
    size: "450gr / 16oz"
  },
  {
    name: "Bife de chorizo",
    quality: "Prime:",
    quality2: "High Choice:",
    // pricePrime: "$1350",
    // priceHighChoice: "$870",
    size: "600gr / 21oz"
  },
  {
    name: "Bife de chorizo Mariposa",
    quality: "Prime:",
    quality2: "High Choice:",
    // pricePrime: "$2100",
    // priceHighChoice: "$1450",
    size: "1000gr / 35oz"
  }
];
const $$Astro$c = createAstro();
const $$ParrillaSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ParrillaSection;
  const { lang: langProp } = Astro2.props;
  const lang = langProp ?? getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const tc = t.carta;
  function pNombre(nombre) {
    const plato = tc.platos[nombre];
    if (!plato) return void 0;
    const n = plato.nombre;
    return n && lang !== "es" ? n : void 0;
  }
  return renderTemplate`${maybeRenderHead()}<div id="divParrilla" class="w-full justify-center text-white mt-4 mb-8"> <!-- Sub-nav: Granja / Campo / Mar --> <ul class="flex justify-center gap-6 mb-4"> <li> <button id="botonGranja" class="hover:cursor-pointer text-white"> <img class="size-20 p-2 mx-auto" src="/imagenes/carta/parrilla/cerdo.webp" alt="Granja"> <h2 class="flex justify-center font-boldes text-xl">${tc.parrillaTabs.granja}</h2> </button> </li> <li> <button id="botonCampo" class="hover:cursor-pointer text-white"> <img class="size-20 p-2 mx-auto" src="/imagenes/carta/parrilla/vaca.webp" alt="Campo"> <h2 class="flex justify-center font-boldes text-xl">${tc.parrillaTabs.campo}</h2> </button> </li> <li> <button id="botonMar" class="hover:cursor-pointer text-white"> <img class="size-20 p-2 mx-auto" src="/imagenes/carta/parrilla/camaron.webp" alt="Mar"> <h2 class="flex justify-center font-boldes text-xl">${tc.parrillaTabs.mar}</h2> </button> </li> </ul> <!-- Campo: mapa de cortes --> <div id="divCampo" class="hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 m-4 text-center"> ${campoMapaData.map((item, index) => renderTemplate`<div${addAttribute(`divCortes-${index}`, "id")} class="flex flex-col justify-center items-center"> <img${addAttribute(item.src, "id")} class="size-32 md:size-48 hover:cursor-pointer"${addAttribute(item.src, "src")}${addAttribute(item.name, "alt")}> <p class="text-sm font-boldes">${item.name}</p> ${pNombre(item.name) && renderTemplate`<p class="text-[10px] text-white/45 italic">${pNombre(item.name)}</p>`} <p class="text-[10px]">${item.description}</p> </div>`)} <div class="col-span-2 sm:col-span-3 md:col-span-6 bg-white/15 border-2 border-red-600 rounded-xl m-2"> <p class="text-sm m-3 p-2"> ${tc.campoInfo} </p> </div> </div> <!-- CutCards de campo --> ${renderComponent($$result, "CutCard", $$CutCard, { "id": "divFiletes", "titulo": "Bifes de lomo", "info": campoData[0], "items": filetes, "cols": 2 })} ${renderComponent($$result, "CutCard", $$CutCard, { "id": "divVacios", "titulo": "Vacios", "info": campoData[1], "items": vacios, "cols": 3 })} ${renderComponent($$result, "CutCard", $$CutCard, { "id": "divEntrañas", "titulo": "Entrañas", "info": campoData[2], "items": entranas, "cols": 2 })} ${renderComponent($$result, "CutCard", $$CutCard, { "id": "divAsados", "titulo": "Asados de tira", "info": campoData[3], "items": asados, "cols": 2 })} ${renderComponent($$result, "CutCard", $$CutCard, { "id": "divRibEye", "titulo": "Bifes de chorizo", "info": campoData[4], "items": bifes, "cols": 2, "esBife": true })} <!-- Mar --> <div id="divMar" class="hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center text-center text-white rounded-xl p-4 m-2"> ${marData.map((item) => renderTemplate`<div class="flex justify-center flex-col relative mx-auto"> <img class="h-32 w-32 object-cover mx-auto"${addAttribute(item.src, "src")}${addAttribute(item.name, "alt")}> <p class="mt-2 font-boldes text-center text-pretty text-sm"> ${item.name} </p> ${pNombre(item.name) && renderTemplate`<p class="mt-0.5 text-[10px] text-white/40 italic text-center">${pNombre(item.name)}</p>`} <p class="mt-1 font-light text-center text-pretty text-xs"> ${item.gramaje} </p> ${item.boton && renderTemplate`<div class="absolute top-[75px] left-[100px]"> <a id="pulser-calamar" href="/pageCalamar" class="bg-white h-3 w-3 rounded-full absolute inset-0"></a> </div>`} </div>`)} </div> <!-- Granja --> <div id="divGranja" class="hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center text-center text-white rounded-xl p-4 m-2"> ${granjaData.map((item) => renderTemplate`<div class="flex justify-center flex-col py-3 px-2 relative m-1"> <img class="h-32 w-32 object-cover mx-auto"${addAttribute(item.src, "src")}${addAttribute(item.name, "alt")}> <p class="mt-2 font-boldes text-sm text-center text-pretty"> ${item.name} </p> ${pNombre(item.name) && renderTemplate`<p class="mt-0.5 text-[10px] text-white/40 italic text-center">${pNombre(item.name)}</p>`} <p class="mt-1 font-light text-center text-pretty text-xs"> ${item.gramaje} </p> ${item.boton && renderTemplate`<div class="absolute left-24 top-28"> <a id="pulser-matambrito" href="/pageMatambrito" class="bg-white h-3 w-3 rounded-full absolute inset-0"></a> </div>`} </div>`)} </div> </div>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/menu/ParrillaSection.astro", void 0);
const $$Astro$b = createAstro();
const $$CardsComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CardsComponent;
  const { src, name, description, price, nameTranslation, descripTranslation } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col items-center justify-center gap-y-1 transition-all duration-500 border-b h-[260px] w-full border-red-800/60 rounded-2xl group px-4 before:w-full before:h-full before:rounded-2xl before:backdrop-blur-sm before:z-10 before:absolute overflow-hidden"> <div class="relative h-auto opacity-10 w-max z-50 blur-sm transition-all duration-500 group-hover:blur-none group-hover:-translate-y-1 translate-y-10 group-hover:opacity-100"> <img class="h-24 w-24 object-cover mx-auto drop-shadow-[2px_4px_6px_black]"${addAttribute(src, "src")} alt="imagen del producto"> </div> <p class="text-center font-boldes text-base text-white/55 transition-all duration-500 z-[60] group-hover:text-white/85"> ${name} </p> ${nameTranslation && renderTemplate`<p class="text-center text-xs text-white/35 italic mt-0.5 z-[60] transition-all duration-500 group-hover:text-white/60"> ${nameTranslation} </p>`} <p class="text-center text-xs text-white/35 transition-all duration-500 z-[60] group-hover:text-white/75 group-hover:translate-y-1/4"> ${descripTranslation || description} </p> <p class="text-center text-xs font-boldes text-white/65 transition-all duration-500 z-[60] group-hover:translate-y-6 group-hover:text-sm group-hover:scale-125 group-hover:text-white/85"> ${price} </p> </div>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/CardsComponent.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$a = createAstro();
const $$PruebaCartaContenedor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PruebaCartaContenedor;
  const { id, lang: langProp } = Astro2.props;
  const lang = langProp ?? getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const tc = t.carta;
  function platNombre(nombre) {
    const plato = tc.platos[nombre];
    if (!plato) return void 0;
    const n = plato.nombre;
    return n && lang !== "es" ? n : void 0;
  }
  function platDescripcion(nombre) {
    const plato = tc.platos[nombre];
    if (!plato) return void 0;
    const d = plato.descripcion;
    return d && lang !== "es" ? d : void 0;
  }
  const categories = [
    { id: "Empanadas", name: tc.tabs.empanadas, items: empanadas },
    { id: "Entradas", name: tc.tabs.entradas, items: entradas },
    { id: "Ensaladas", name: tc.tabs.ensaladas, items: ensaladas },
    { id: "Pizzas", name: tc.tabs.pizzas, items: pizzas },
    { id: "Cocina", name: tc.tabs.cocina, items: cocina },
    { id: "Postres", name: tc.tabs.postres, items: postres }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section class="landing-section h-full w-screen overflow-hidden"', '> <nav id="navegacion-carta" class="flex flex-col items-center"> <!-- Header --> <header class="text-center mt-12 mb-6 text-white"> <p class="text-5xl md:text-7xl font-boldes">', '</p> <h3 class="text-3xl md:text-5xl font-boldes opacity-55"> ', ' </h3> </header> <!-- Tabs de categorías --> <div class="flex justify-center flex-wrap gap-x-6 gap-y-2 px-4 opacity-90"> ', ' <a href="https://cavamatera.online" aria-label="cavamatera" target="_blank" rel="noopener noreferrer" class="hover:cursor-pointer font-boldes text-2xl md:text-3xl text-white"> ', ' </a> <button id="btnParrilla" class="menu-tab hover:cursor-pointer font-boldes text-2xl md:text-3xl text-white transition-colors duration-200"> ', " </button> </div> <!-- Paneles de categorías --> ", ' <!-- Panel Parrilla --> <div id="divParrillaPanel" class="menu-panel hidden w-full"> ', " </div> </nav> </section> <script>(function(){", '\n  document.addEventListener("DOMContentLoaded", () => {\n    // ── Tabs del menú principal ──\n    const tabIds = [\n      "Empanadas", "Entradas", "Ensaladas", "Pizzas", "Cocina", "Postres", "Parrilla",\n    ];\n\n    const pairs = tabIds\n      .map((name) => ({\n        btn: document.getElementById(`btn${name}`),\n        panel: document.getElementById(name === "Parrilla" ? "divParrillaPanel" : `div${name}`),\n        isGrid: name !== "Parrilla",\n      }))\n      .filter((p) => p.btn && p.panel);\n\n    function hideAll() {\n      pairs.forEach(({ btn, panel }) => {\n        btn.classList.remove("text-red-600");\n        btn.classList.add("text-white");\n        panel.classList.add("hidden");\n        panel.classList.remove("grid", "block");\n      });\n    }\n\n    pairs.forEach(({ btn, panel, isGrid }) => {\n      btn.addEventListener("click", () => {\n        const alreadyOpen = !panel.classList.contains("hidden");\n        hideAll();\n        if (!alreadyOpen) {\n          btn.classList.remove("text-white");\n          btn.classList.add("text-red-600");\n          panel.classList.remove("hidden");\n          panel.classList.add(isGrid ? "grid" : "block");\n        }\n      });\n    });\n\n    // Open Entradas by default\n    const entradasPair = pairs.find((p) => p.btn?.id === "btnEntradas");\n    if (entradasPair) {\n      entradasPair.btn.classList.remove("text-white");\n      entradasPair.btn.classList.add("text-red-600");\n      entradasPair.panel.classList.remove("hidden");\n      entradasPair.panel.classList.add("grid");\n    }\n\n    // ── Parrilla sub-nav ──\n    const botonCampo  = document.getElementById("botonCampo");\n    const botonMar    = document.getElementById("botonMar");\n    const botonGranja = document.getElementById("botonGranja");\n    const divCampo    = document.getElementById("divCampo");\n    const divMar      = document.getElementById("divMar");\n    const divGranja   = document.getElementById("divGranja");\n\n    if (!botonCampo || !botonMar || !botonGranja || !divCampo || !divMar || !divGranja) return;\n\n    const corteDivIds = ["divFiletes", "divVacios", "divEntrañas", "divAsados", "divRibEye"];\n    const divsCortes = corteDivIds.map((id) => document.getElementById(id)).filter(Boolean);\n\n    // Hide all cut-detail cards initially\n    divsCortes.forEach((div) => div.classList.add("hidden"));\n\n    const parrillaSubDivs = [divCampo, divMar, divGranja];\n    const parrillaSubBtns = [botonCampo, botonMar, botonGranja];\n\n    function hideAllParrilla() {\n      parrillaSubDivs.forEach((div) => {\n        div.classList.add("hidden");\n        div.classList.remove("grid");\n      });\n      divsCortes.forEach((div) => {\n        div.classList.add("hidden");\n        div.classList.remove("grid");\n      });\n    }\n\n    function showParrillaDiv(div) {\n      div.classList.remove("hidden");\n      div.classList.add("grid");\n    }\n\n    function setActiveParrillaBtn(activeBtn) {\n      parrillaSubBtns.forEach((b) => {\n        b.classList.remove("text-red-600");\n        b.classList.add("text-white");\n      });\n      activeBtn.classList.remove("text-white");\n      activeBtn.classList.add("text-red-600");\n    }\n\n    botonCampo.addEventListener("click", () => {\n      hideAllParrilla();\n      showParrillaDiv(divCampo);\n      setActiveParrillaBtn(botonCampo);\n    });\n    botonMar.addEventListener("click", () => {\n      hideAllParrilla();\n      showParrillaDiv(divMar);\n      setActiveParrillaBtn(botonMar);\n    });\n    botonGranja.addEventListener("click", () => {\n      hideAllParrilla();\n      showParrillaDiv(divGranja);\n      setActiveParrillaBtn(botonGranja);\n    });\n\n    // Click on a campo cut image → show its CutCard\n    campoMapaData.forEach((item, index) => {\n      const img = document.getElementById(item.src);\n      if (!img) return;\n      img.addEventListener("click", () => {\n        const divCarne = divsCortes[index];\n        if (!divCarne) return;\n\n        const isHidden = divCarne.classList.contains("hidden");\n        // Toggle: if open, close and show map; if closed, open and hide map\n        if (isHidden) {\n          divCarne.classList.remove("hidden");\n          divCarne.classList.add("grid");\n          divCampo.classList.add("hidden");\n          divCampo.classList.remove("grid");\n        } else {\n          divCarne.classList.add("hidden");\n          divCarne.classList.remove("grid");\n          // If no other corte is open, bring back the map\n          const anyOpen = divsCortes.some((d) => !d.classList.contains("hidden"));\n          if (!anyOpen) {\n            divCampo.classList.remove("hidden");\n            divCampo.classList.add("grid");\n          }\n        }\n      });\n    });\n\n    // Close buttons inside CutCards → return to campo map\n    document.querySelectorAll("#divParrilla #botonCerrar").forEach((btn) => {\n      btn.addEventListener("click", () => {\n        divsCortes.forEach((div) => {\n          div.classList.add("hidden");\n          div.classList.remove("grid");\n        });\n        divCampo.classList.remove("hidden");\n        divCampo.classList.add("grid");\n      });\n    });\n  });\n})();<\/script>'], ["", '<section class="landing-section h-full w-screen overflow-hidden"', '> <nav id="navegacion-carta" class="flex flex-col items-center"> <!-- Header --> <header class="text-center mt-12 mb-6 text-white"> <p class="text-5xl md:text-7xl font-boldes">', '</p> <h3 class="text-3xl md:text-5xl font-boldes opacity-55"> ', ' </h3> </header> <!-- Tabs de categorías --> <div class="flex justify-center flex-wrap gap-x-6 gap-y-2 px-4 opacity-90"> ', ' <a href="https://cavamatera.online" aria-label="cavamatera" target="_blank" rel="noopener noreferrer" class="hover:cursor-pointer font-boldes text-2xl md:text-3xl text-white"> ', ' </a> <button id="btnParrilla" class="menu-tab hover:cursor-pointer font-boldes text-2xl md:text-3xl text-white transition-colors duration-200"> ', " </button> </div> <!-- Paneles de categorías --> ", ' <!-- Panel Parrilla --> <div id="divParrillaPanel" class="menu-panel hidden w-full"> ', " </div> </nav> </section> <script>(function(){", '\n  document.addEventListener("DOMContentLoaded", () => {\n    // ── Tabs del menú principal ──\n    const tabIds = [\n      "Empanadas", "Entradas", "Ensaladas", "Pizzas", "Cocina", "Postres", "Parrilla",\n    ];\n\n    const pairs = tabIds\n      .map((name) => ({\n        btn: document.getElementById(\\`btn\\${name}\\`),\n        panel: document.getElementById(name === "Parrilla" ? "divParrillaPanel" : \\`div\\${name}\\`),\n        isGrid: name !== "Parrilla",\n      }))\n      .filter((p) => p.btn && p.panel);\n\n    function hideAll() {\n      pairs.forEach(({ btn, panel }) => {\n        btn.classList.remove("text-red-600");\n        btn.classList.add("text-white");\n        panel.classList.add("hidden");\n        panel.classList.remove("grid", "block");\n      });\n    }\n\n    pairs.forEach(({ btn, panel, isGrid }) => {\n      btn.addEventListener("click", () => {\n        const alreadyOpen = !panel.classList.contains("hidden");\n        hideAll();\n        if (!alreadyOpen) {\n          btn.classList.remove("text-white");\n          btn.classList.add("text-red-600");\n          panel.classList.remove("hidden");\n          panel.classList.add(isGrid ? "grid" : "block");\n        }\n      });\n    });\n\n    // Open Entradas by default\n    const entradasPair = pairs.find((p) => p.btn?.id === "btnEntradas");\n    if (entradasPair) {\n      entradasPair.btn.classList.remove("text-white");\n      entradasPair.btn.classList.add("text-red-600");\n      entradasPair.panel.classList.remove("hidden");\n      entradasPair.panel.classList.add("grid");\n    }\n\n    // ── Parrilla sub-nav ──\n    const botonCampo  = document.getElementById("botonCampo");\n    const botonMar    = document.getElementById("botonMar");\n    const botonGranja = document.getElementById("botonGranja");\n    const divCampo    = document.getElementById("divCampo");\n    const divMar      = document.getElementById("divMar");\n    const divGranja   = document.getElementById("divGranja");\n\n    if (!botonCampo || !botonMar || !botonGranja || !divCampo || !divMar || !divGranja) return;\n\n    const corteDivIds = ["divFiletes", "divVacios", "divEntrañas", "divAsados", "divRibEye"];\n    const divsCortes = corteDivIds.map((id) => document.getElementById(id)).filter(Boolean);\n\n    // Hide all cut-detail cards initially\n    divsCortes.forEach((div) => div.classList.add("hidden"));\n\n    const parrillaSubDivs = [divCampo, divMar, divGranja];\n    const parrillaSubBtns = [botonCampo, botonMar, botonGranja];\n\n    function hideAllParrilla() {\n      parrillaSubDivs.forEach((div) => {\n        div.classList.add("hidden");\n        div.classList.remove("grid");\n      });\n      divsCortes.forEach((div) => {\n        div.classList.add("hidden");\n        div.classList.remove("grid");\n      });\n    }\n\n    function showParrillaDiv(div) {\n      div.classList.remove("hidden");\n      div.classList.add("grid");\n    }\n\n    function setActiveParrillaBtn(activeBtn) {\n      parrillaSubBtns.forEach((b) => {\n        b.classList.remove("text-red-600");\n        b.classList.add("text-white");\n      });\n      activeBtn.classList.remove("text-white");\n      activeBtn.classList.add("text-red-600");\n    }\n\n    botonCampo.addEventListener("click", () => {\n      hideAllParrilla();\n      showParrillaDiv(divCampo);\n      setActiveParrillaBtn(botonCampo);\n    });\n    botonMar.addEventListener("click", () => {\n      hideAllParrilla();\n      showParrillaDiv(divMar);\n      setActiveParrillaBtn(botonMar);\n    });\n    botonGranja.addEventListener("click", () => {\n      hideAllParrilla();\n      showParrillaDiv(divGranja);\n      setActiveParrillaBtn(botonGranja);\n    });\n\n    // Click on a campo cut image → show its CutCard\n    campoMapaData.forEach((item, index) => {\n      const img = document.getElementById(item.src);\n      if (!img) return;\n      img.addEventListener("click", () => {\n        const divCarne = divsCortes[index];\n        if (!divCarne) return;\n\n        const isHidden = divCarne.classList.contains("hidden");\n        // Toggle: if open, close and show map; if closed, open and hide map\n        if (isHidden) {\n          divCarne.classList.remove("hidden");\n          divCarne.classList.add("grid");\n          divCampo.classList.add("hidden");\n          divCampo.classList.remove("grid");\n        } else {\n          divCarne.classList.add("hidden");\n          divCarne.classList.remove("grid");\n          // If no other corte is open, bring back the map\n          const anyOpen = divsCortes.some((d) => !d.classList.contains("hidden"));\n          if (!anyOpen) {\n            divCampo.classList.remove("hidden");\n            divCampo.classList.add("grid");\n          }\n        }\n      });\n    });\n\n    // Close buttons inside CutCards → return to campo map\n    document.querySelectorAll("#divParrilla #botonCerrar").forEach((btn) => {\n      btn.addEventListener("click", () => {\n        divsCortes.forEach((div) => {\n          div.classList.add("hidden");\n          div.classList.remove("grid");\n        });\n        divCampo.classList.remove("hidden");\n        divCampo.classList.add("grid");\n      });\n    });\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(id, "id"), tc.heading, tc.subheading, categories.map((cat) => renderTemplate`<button${addAttribute(`btn${cat.id}`, "id")} class="menu-tab hover:cursor-pointer font-bold text-2xl md:text-3xl text-white transition-colors duration-200"> ${cat.name} </button>`), tc.tabs.vinos, tc.tabs.parrilla, categories.map((cat) => renderTemplate`<div${addAttribute(`div${cat.id}`, "id")} class="menu-panel hidden w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6 mb-16"> ${cat.items.map((item) => renderTemplate`${renderComponent($$result, "CardsComponent", $$CardsComponent, { "src": item.src, "name": item.name, "description": item.description, "price": item.price, "nameTranslation": platNombre(item.name), "descripTranslation": platDescripcion(item.name) })}`)} </div>`), renderComponent($$result, "ParrillaSection", $$ParrillaSection, { "lang": lang }), defineScriptVars({ campoData, campoMapaData }));
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/pruebaCartaContenedor.astro", void 0);
const $$Astro$9 = createAstro();
const $$Carta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Carta;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "PruebaCartaContenedor", $$PruebaCartaContenedor, { "id": "carta", "lang": lang })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Carta.astro", void 0);
const $$Astro$8 = createAstro();
const $$Caurosel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Caurosel;
  const { id, lang } = Astro2.props;
  const t = useTranslations(lang);
  const slides = [
    {
      img: "/imagenes/seleccion.webp",
      title: t.carousel.slide1.title,
      subtitle: "",
      description: t.carousel.slide1.description
    },
    {
      img: "/imagenes/champagne.webp",
      title: t.carousel.slide2.title,
      subtitle: t.carousel.slide2.subtitle,
      description: t.carousel.slide2.description,
      contacto: "Casamatera@grupolamatera.mx",
      ctaText: t.carousel.slide2.cta
    },
    {
      img: "/imagenes/productosCalidad2.webp",
      title: t.carousel.slide3.title,
      subtitle: t.carousel.slide3.subtitle,
      description: t.carousel.slide3.description
    },
    {
      img: "/imagenes/ambiente.webp",
      title: t.carousel.slide4.title,
      subtitle: t.carousel.slide4.subtitle,
      description: t.carousel.slide4.description
    },
    {
      img: "/imagenes/panNuestro.webp",
      title: t.carousel.slide5.title,
      subtitle: "",
      description: t.carousel.slide5.description,
      href: "https://www.instagram.com/pannuestrogdl/?hl=es",
      ctaText: t.carousel.slide5.cta
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full h-full overflow-hidden"${addAttribute(id ?? "carrusel", "id")} data-carrusel> <!-- Slides de fondo (full-screen) --> ${slides.map((slide, i) => renderTemplate`<div${addAttribute([
    "carrusel-bg absolute inset-0 transition-opacity duration-700 ease-in-out",
    i === 0 ? "opacity-100 z-[1]" : "opacity-0 z-0"
  ], "class:list")}${addAttribute(i, "data-slide-bg")}> <img${addAttribute(slide.img, "src")}${addAttribute(slide.title, "alt")} class="w-full h-full object-cover"${addAttribute(i === 0 ? "eager" : "lazy", "loading")}${addAttribute(i === 0 ? "sync" : "async", "decoding")}>  <div${addAttribute([
    "carrusel-content absolute inset-0 flex items-center transition-all duration-500 ease-out",
    i === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  ], "class:list")}${addAttribute(i, "data-slide-content")}> <div class="px-5 md:px-12 max-w-[320px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[800px]"> <h3 class="font-boldes text-[32px] md:text-[4rem] 2xl:text-[6rem] leading-tight uppercase text-white/90 drop-shadow-lg"> ${slide.title} ${slide.subtitle && renderTemplate`<span class="text-red-900">${slide.subtitle}</span>`} </h3> <p class="mt-2 mb-5 text-xs md:text-lg 2xl:text-xl text-gray-300 leading-relaxed"> ${slide.description} </p> ${slide.contacto && renderTemplate`<a${addAttribute(`mailto:${slide.contacto}`, "href")} class="inline-flex items-center justify-center px-4 py-2 text-xs lg:text-sm text-white font-bold bg-red-900 border-2 border-[#B56C09] rounded-xl hover:scale-105 transition-transform"> ${slide.ctaText} </a>`} ${slide.href && !slide.contacto && renderTemplate`<a${addAttribute(slide.href, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-4 py-2 text-xs lg:text-sm text-white font-bold bg-red-900/90 border-2 border-[#B56C09] rounded-xl hover:scale-105 transition-transform"> ${slide.ctaText} </a>`} </div> </div> </div>`)} <!-- Miniaturas (thumbnails) en la esquina inferior derecha --> <div class="absolute z-10 bottom-28 md:bottom-32 right-3 sm:right-6 md:right-10 flex gap-2 md:gap-3" id="carrusel-thumbs"> ${slides.map((slide, i) => renderTemplate`<button${addAttribute([
    "carrusel-thumb relative w-[52px] h-[36px] md:w-[72px] md:h-[50px] lg:w-[90px] lg:h-[62px] rounded-lg overflow-hidden shadow-xl ring-2 transition-all duration-300 cursor-pointer",
    i === 0 ? "ring-[#B56C09] scale-110" : "ring-transparent opacity-70 hover:opacity-100"
  ], "class:list")}${addAttribute(i, "data-thumb")}${addAttribute(`Ir al slide ${i + 1}: ${slide.title}`, "aria-label")}> <img${addAttribute(slide.img, "src")} alt="" class="w-full h-full object-cover" loading="lazy" decoding="async"> </button>`)} </div> <!-- Botones prev / next --> <div class="absolute z-10 bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-3 md:gap-5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"> <button class="carrusel-prev flex items-center justify-center w-10 h-10 md:w-14 md:h-10 lg:w-20 lg:h-10 text-white border-2 border-[#B56C09] rounded-xl bg-red-900 hover:scale-110 transition-transform cursor-pointer" aria-label="Slide anterior"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6l6 6"></path></svg> </button> <button class="carrusel-next flex items-center justify-center w-10 h-10 md:w-14 md:h-10 lg:w-20 lg:h-10 text-white border-2 border-[#B56C09] rounded-xl bg-red-900 hover:scale-110 transition-transform cursor-pointer" aria-label="Slide siguiente"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6l-6 6"></path></svg> </button> </div> </div> ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Caurosel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Caurosel.astro", void 0);
const $$Astro$7 = createAstro();
const $$Eventos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Eventos;
  const { id, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="landing-section w-screen h-screen text-center overflow-hidden"${addAttribute(id, "id")}> ${renderComponent($$result, "Caurosel", $$Caurosel, { "id": "eventos", "lang": lang })} </section>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Eventos.astro", void 0);
const $$SmokeEffect = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="smoke-bkg" class="fixed  top-0  h-full w-full -z-10 opacity-25 "></div> ${renderScript($$result, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/SmokeEffect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/SmokeEffect.astro", void 0);
const $$Astro$6 = createAstro();
const $$InstagramIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path fill="#fff" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"></path></svg>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/icons/InstagramIcon.astro", void 0);
const $$Astro$5 = createAstro();
const $$TripadivisorIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TripadivisorIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tripadvisor"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M17.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5z"></path><path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5z"></path><path d="M10.5 15.5l1.5 2l1.5 -2"></path><path d="M9 6.75c2 -.667 4 -.667 6 0"></path></svg>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/icons/TripadivisorIcon.astro", void 0);
const $$Astro$4 = createAstro();
const $$FacebookIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FacebookIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/icons/FacebookIcon.astro", void 0);
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="flex justify-center items-center [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-2 opacity-80"> <li> <a href="https://www.tripadvisor.com.mx/Restaurant_Review-g150798-d786318-Reviews-La_Matera-Guadalajara_Guadalajara_Metropolitan_Area.html" aria-label="tripadvisor" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "TripadivisorIcon", $$TripadivisorIcon, { "class": "size-8" })} </a> </li> <li> <a href="https://www.instagram.com/lamateragdl/?hl=es" aria-label="instagram" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "InstagramIcon", $$InstagramIcon, { "class": "size-6" })} </a> </li> <li> <a href="https://www.facebook.com/LaMateraGDL?locale=es_LA" aria-label="facebook" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "FacebookIcon", $$FacebookIcon, { "class": "size-7" })} </a> </li> </ul>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/SocialLinks.astro", void 0);
const $$Astro$3 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "es" } = Astro2.props;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="text-white/80 text-xs md:text-sm p-2 mt-44 opacity-70"> <!-- Logo + address --> <div class="flex flex-col md:flex-row md:items-start md:justify-between md:mx-14 md:mb-2"> <div class="flex flex-col"> <img class="h-16 md:h-20 mb-2" src="https://www.lamatera.mx/wp-content/themes/bmx-lamatera/assets/img-logotipo-rojo.svg" alt="logo de la matera"> <p class="font-boldes">Av. México 2895</p> <p>Col. Vallarta Norte C.P 44690</p> <p>Guadalajara, Jalisco, México</p> </div> <!-- Hours + WhatsApp --> <div class="flex flex-row items-center gap-3 md:gap-16 mt-4 md:mt-0 justify-center md:justify-start"> <div class="flex flex-col"> <p class="font-bold">${t.footer.horarios}</p> <p>${t.footer.lunes}</p> <p>${t.footer.domingo}</p> </div> <div class="flex items-center"> <img class="h-5 md:h-6 mx-2" src="https://www.lamatera.mx/wp-content/themes/bmx-lamatera/assets/img-whatsapplogo.svg" alt="icono whatsapp"> <button class="border-2 border-red-900 hover:scale-75 rounded-lg p-2"> <a class="font-boldes hover:cursor-pointer" href="https://api.whatsapp.com/send/?phone=523318457029&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">${t.footer.facturar}</a> </button> </div> </div> </div> <!-- Social + copyright --> <nav class="md:flex md:items-center md:justify-between md:mx-14 md:mb-4"> ${renderComponent($$result, "SocialLinks", $$SocialLinks, {})} <p class="mt-1 md:mt-0 md:mr-8 md:opacity-50">${t.footer.derechos}</p> </nav> </footer>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Footer.astro", void 0);
const $$Astro$2 = createAstro();
const $$We = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$We;
  const { title, id, lang } = Astro2.props;
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="bg-black/75 text-white flex flex-col items-center justify-center gap-y-12"${addAttribute(id, "id")}${addAttribute(title, "title")}> <div class="flex justify-center mt-28"> <p class="text-5xl text-white font-boldes">${t.nosotros.heading}</p> </div> <article class="flex flex-col items-center justify-center mx-8 md:flex-row mb-2 gap-x-8 lg:mt-4"> <img src="/imagenes/nosotros/nosotros2.webp" alt="foto del restaurante " class="nosotros-img md:w-[500px] lg:w-[500px] xl:w-[700px] mb-12 lg:mb-0 md:order-2 object-cover rounded-3xl md:mx-auto"> <div class="md:order-1 md:w-1/3 lg:w-2-3 xl:w-3/6"> <h1 class="text-3xl font-boldes mb-4 lg:text-6xl">${t.nosotros.ambienteTitle}</h1> <p class="text-md"> ${t.nosotros.ambienteText} </p> </div> </article> <article class="flex flex-col items-center justify-center mx-8 md:flex-row mb-2 gap-x-8 mt-4 lg:mx-24"> <img src="/imagenes/nosotros/nosotros1.webp" alt="foto de nosotros " class="nosotros-img2 h-[350px] md:h-[500px] mb-12 lg:mb-12 object-cover rounded-3xl shadow-slate-100/20 md:mx-auto"> <div class="mb-2 md:m-2"> <p class="text-3xl font-bold mb-4 lg:text-6xl">${t.nosotros.equipoTitle}</p> <p class="text-md"> ${t.nosotros.equipoText} </p> </div> </article> ${renderComponent($$result, "Footer", $$Footer, { "lang": lang })} </section>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/We.astro", void 0);
const $$Astro$1 = createAstro();
const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nosotros;
  const { id, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="landing-section w-screen h-screen text-center"> ${renderComponent($$result, "We", $$We, { "title": "nosotros", "id": "nosotros", "lang": lang })} </section>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/Nosotros.astro", void 0);
const $$Astro = createAstro();
const $$HomePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomePage;
  const { lang, title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingHeader", $$LandingHeader, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "SmokeEffect", $$SmokeEffect, {})} ${renderComponent($$result2, "HomeReserva", $$HomeReserva, { "lang": lang })} ${renderComponent($$result2, "Carta", $$Carta, {})} ${renderComponent($$result2, "Eventos", $$Eventos, { "lang": lang })} ${renderComponent($$result2, "Nosotros", $$Nosotros, { "lang": lang })} </main> ` })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/HomePage.astro", void 0);
export {
  $$HomePage as $
};
