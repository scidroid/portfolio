const header = {
  feedback: "Dame feedback",
  contact: "Contactame",
};

const footer = {
  cta: "¿Listo para hacer algo increíble?",
  ctabtn: "Empecemos a hablar.",
  copyrigth: "© Desarrollado por Juan Almanza bajo licencia GPL V3",
};

const hero = {
  titlecolor: "Desarrollo productos ",
  title: "que deleitan y transforman comunidades.",
  subtitle:
    "Soy Juan, un desarrollador web fullstack colombiano de 14 años y programador competitivo, desarrollando aplicaciones premiadas de clase mundial.",
  contact: "Ponte en contacto",
  cv: "obtén mi CV",
};

const blog = {
  title: "Mis artículos en inglés",
  cta: "Lee este artículo",
  locale: "es",
};

const contact = {
  title: "Contactame",
  subtitle:
    "¿Tiene un proyecto en mente? ¿Quieres asociarte o trabajar juntos? Ponte en contacto conmigo a través del formulario y te responderé lo antes posible.",
  submit: "Enviar",
  name: "Nombre",
  name_placeholder: "Tu nombre",
  email: "Email",
  email_placeholder: "Tu email",
  message: "Mensaje",
  message_placeholder: "Tu mensaje",
  attemps_exceeded:
    "Has excedido el número de intentos. Por favor, inténtalo de nuevo más tarde.",
  sucessful_message: "Tu mensaje ha sido enviado correctamente.",
  error_message:
    "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
  saving: "Guardando...",
};

const awards = {
  title: "PREMIOS",
  awards: [
    {
      url: "http://oc.uan.edu.co/olimpiada-colombiana-de-computacion",
      name: "Segundo lugar",
      subtitle: "Olimpiadas Colombianas de Computación",
    },
    {
      url: "https://devpost.com/software/medicaid-3f2er5",
      name: "Segundo lugar",
      subtitle: "Hack the valley",
    },
    {
      url: "https://devpost.com/software/collegeloans",
      name: "Segundo lugar y mejor proyecto financiero",
      subtitle: "Data day grind 2.0",
    },
    {
      url: "https://devpost.com/software/gastroworld",
      name: "Segundo lugar",
      subtitle: "Bon Hacketit 2.0",
    },
    {
      url: "https://devpost.com/software/easytravel-iscyl0",
      name: "Tercer lugar",
      subtitle: "Hack around the world",
    },
    {
      url: "https://devpost.com/software/awarelms",
      name: "Mejor proyecto pre-universitario",
      subtitle: "Garuda Hacks v2.0",
    },
  ],
};

const logos = {
  title: "Destacado en",
};

const projects = {
  title: "PROYECTOS",
  subtitle: "Desarrollo aplicaciones premiadas",
  try: "Pruébalo",
  github: "Mira el GitHub",
  learn: "Más información",
  projects: [
    {
      image: "/kindlymap.png",
      title: "KindlyMap",
      description: `Mapa para buscar causas que necesitan ayuda en todo el mundo, permitiéndote conocer más, donar y añadir tus propias causas, utilizando Next.js, Deta y PayPal.`,
      tryit: "https://map.scidroid.co/",
      info: "https://devpost.com/software/kindlymap",
      github: "https://github.com/scidroid/maphacks",
    },
    {
      image: "/medisearch.png",
      title: "MediSearch",
      description: `Un preciso motor de búsqueda de enfermedades basado en una gran cantidad de datos médicos y una potente inteligencia artificial, utilizando React.js, Mantine e Infermedica.`,
      tryit: "https://medisearch.scidroid.co/",
      info: "https://devpost.com/software/medisearch/",
      github: "https://github.com/scidroid/medisearch",
    },
    {
      image: "/collegeloans.png",
      title: "CollegeLoans",
      description: `Collegeloans es una plataforma que permite buscar universidades y planificar cómo pagarlas en función de tus resultados del SAT, utilizando React.js, Tailwind y CollegeAI.`,
      tryit: "https://collegeloan.us/",
      info: "https://devpost.com/software/collegeloans/",
      github: "https://github.com/pumasteam/collegeloans",
    },
  ],
};

const services = {
  title: "SERVICIOS",
  subtitle: "Productos que resuelven problemas, una aplicación a la vez",
  services: [
    {
      image: "/s1.svg",
      title: "Lo que puedo hacer por ti",
      subtitle:
        "Productos más rápidos y mejores que sus usuarios adoran. Aquí están todos los servicios que proporciono:",
      list: [
        "Desarrollo Front-end",
        "Desarrollo Back-end",
        "Consultoría de Software",
      ],
    },
    {
      image: "/s2.svg",
      title: "lenguajes que domino",
      subtitle:
        "Todo desarrollador necesita las herramientas adecuadas para hacer un trabajo perfecto:",
      list: ["Javascript / React.js", "Python", "C++"],
    },
    {
      image: "/s3.svg",
      title: "Lo que puede esperar",
      subtitle:
        "Hago productos que son más que bonitos. Los hago enviables y utilizables",
      list: [
        "Limpio y funcional",
        "Fácil de usar en todo dispositivos",
        "Eficaz y sostenible",
      ],
    },
  ],
};

const stack = {
  title: "STACK",
  subtitle: "Lo que uso para hacer un trabajo perfecto",
};

const about = {
  title: "ACERCA DE MÍ",
  content:
    "A los 9 años tuve mi primer acercamiento a la programación, en un recreo del colegio entré en uno de los ordenadores de la biblioteca y descubrí una web llamada Khan Academy, donde programé mis primeras líneas de javascript. En ese momento para mí eran sólo dibujos, sin saber que iba a ser mi hobby para los próximos años. En diciembre de 2020 retomé la programación y se convirtió en mi pasión.",
  list: [
    "Me encanta probar cosas raras todo el tiempo.",
    "Siempre estoy dispuesto a aprender cosas nuevas.",
    "He participado en olimpiadas de matemáticas, física, ciencias y astronomía.",
    "Sí, tengo 14 años.",
  ],
};

export {
  header,
  footer,
  hero,
  blog,
  contact,
  awards,
  logos,
  projects,
  services,
  stack,
  about,
};
