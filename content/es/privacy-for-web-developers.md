---
title: 'Tú sitio es probablemente ilegal'
date: 'Febrero 4, 2022'
description: 'Mucha gente piensa que la analítica de sitios web es un complemento más. Pero es mucho más complejo que eso. Aprende a hacer que la analítica proteja la privacidad de tus usuarios y aprende a hacerlo fácilmente.'
tags: ['Analytics', 'Splitbee']
banner: 'https://s2.loli.net/2022/02/05/JzlbKSC2ZfEyLYp.jpg'
---

<details> 
  <summary>Tabla de contenidos</summary>

[[toc]]

</details>

La privacidad en internet es un tema serio, como desarrolladores tenemos la responsabilidad de respetarla, esto incluye cosas como el uso de protocolos de comunicación seguros como HTTPS, así como la forma y el lugar donde se almacena la información de los usuarios.

Pero algo en lo que muchos no pensamos son las analíticas, que en cierta parte son información sensible de nuestros usuarios y alrededor del mundo hay leyes que la regulan, en este artículo hablaremos un poco de por qué las analíticas pueden hacer que tu sitio rompa la ley, qué alternativas tenemos, y cómo podemos implementar analíticas seguras en tu sitio web.

## ¿Por qué la analítica puede hacer que su sitio infrinja la ley?

Las analíticas son una gran manera de mejorar su sitio web, mediante el seguimiento de las páginas vistas, los visitantes únicos, y otras estadísticas se puede obtener una mejor comprensión de cómo su sitio está siendo utilizado y hacer los cambios necesarios.

Pero aunque las analíticas son una gran herramienta, también pueden utilizarse para rastrear y espiar a los usuarios, lo que puede suponer un problema de privacidad. Por ello, muchos países tienen leyes que regulan el uso de las analíticas, en la Unión Europea el [Reglamento General de Protección de Datos (RGPD)](https://ec.europa.eu/info/law/law-topic/data-protection) es una ley que regula el uso de las analíticas y otras formas de recogida de datos.

### ¿Cuáles son los requisitos del GDPR?

La GDPR exige que los sitios web obtengan el consentimiento del usuario antes de recopilar cualquier dato, lo que incluye cosas como las cookies, los análisis y los botones de las redes sociales. El consentimiento del usuario debe ser explícito, lo que significa que el usuario tiene que aceptar activamente que se recojan sus datos, no puede ser implícito o asumido.

Los servicios ampliamente utilizados, como Google Analytics, no cumplen con estas leyes, por lo que en nuestros sitios debemos añadir cosas como banners de cookies y en [algunos países estos servicios llegan a ser ilegales](https://noyb.eu/en/austrian-dsb-eu-us-data-transfers-google-analytics-illegal).

![Ejemplo de banner de cookies](https://s2.loli.net/2022/02/05/MxoVzg4Y1a5ePfj.png)

Y los datos de los usuarios deben estar protegidos, deben ser almacenados de forma segura y ser accesibles sólo por personal autorizado. Si un sitio web no cumple con el GDPR puede ser multado con hasta el 4% de sus ingresos anuales globales o 20 millones de euros (lo que sea mayor), por lo que es importante entender y cumplir con los requisitos de la GDPR.

## ¿Qué alternativas tenemos?

Si quiere recopilar datos analíticos pero no quiere infringir la ley, hay algunas alternativas que puede utilizar.

Una alternativa es utilizar un proveedor de analítica de terceros, estos proveedores cumplen con el GDPR y se asegurarán de que sus datos se recogen y almacenan de forma segura.

### Splitbee

![Splitbee](https://s2.loli.net/2022/02/05/Tj32fSqM6dPGunl.png)

Splitbee es mi servicio de analítica favorito y el que utiliza esta web, no solo es respetuoso con la privacidad y cumple con el GDPR, también te permite crear embudos de conversión, obtener analíticas en tiempo real, gestionar eventos fácilmente, hacer tests A/B y crear automatizaciones como el envío de emails cada vez que se ejecuta una acción (que es lo que yo uso en mi formulario de contacto).

Además te permite hacer todo esto en su capa gratuita con 2.500 eventos lo que también lo hace ideal para blogs y sitios pequeños, y si tu sitio mueve más tráfico puedes actualizar a un plan de pago que te permite tener mucha más información sobre tus visitantes.

En este blog también aprenderemos a integrarlo en tu sitio Next.js para que puedas utilizarlo rápidamente.

Puedes [visitar su sitio aquí](https://splitbee.io).

### Fathom

![Fathom screenshot](https://s2.loli.net/2022/02/05/ZsYo5GqUu7NTLnw.png)

Fathom no tiene una versión gratuita, pero sigue siendo una opción muy sólida ya que pagando 14 dólares puedes registrar hasta 100.000 vistas. Tiene una interfaz sencilla, pero no incluye automatizaciones, experimentos, perfiles de usuario y más que Splitbee si hace, recomiendo este servicio si quieres algo lo más sencillo posible.

Puedes [probarlo aquí con 10 dólares de crédito gratis](https://usefathom.com/ref/8C8RPY).

### Simple Analytics

![Simple Analytics dashboard](https://s2.loli.net/2022/02/05/WEnyloexdTPNAUc.png)

Simple Analytics es otra alternativa, esta es un poco más cara que fathom con un plan básico a partir de 19 dólares, pero esta te permite tener analíticas en todos los sitios que quieras, además tiene algunas características interesantes como saber de qué tweets vienen tus visitas. por lo demás es muy similar a Fathom.

Puedes [probarlo aquí](https://simpleanalytics.com/).

---

Otra alternativa es utilizar una herramienta con analítica del lado del servidor como [Netlify Analytics](https://www.netlify.com/products/analytics/), esta herramienta te permite recoger datos de analítica sin utilizar cookies u otras tecnologías de seguimiento.

Y por último, también puedes utilizar una herramienta como [Matomo](https://matomo.org/), que es una herramienta de analítica de código abierto que puedes alojar en tu propio servidor y configuraciones.

## Implementando Splitbee en un sitio Next.js

Ahora vamos a hacer un pequeño ejemplo de Splitbee en Next.js.

Antes de empezar sólo tenemos que crear una cuenta, puedes hacerlo directamente haciendo [clic aquí](https://app.splitbee.io/).

![Splitbee login](https://s2.loli.net/2022/02/05/Q6mtiKJ81y7Ppf2.png)

Cuando nos hayamos registrado debemos crear un nuevo proyecto, sólo hay que poner un nombre y una url, y ya tendríamos todo listo en esta parte.

![New project page](https://s2.loli.net/2022/02/05/rTSPmA3g81lxKYn.png)

Ya que tenemos un proyecto empecemos con el código.

---

Primero debemos instalar los paquetes que necesitamos.

```bash
yarn add @splitbee/web

// or

npm install @splitbee/web
```

Ahora utilizaremos una de las funciones de Next que nos permitirá hacer una especie de proxy al permitirnos hacer rutas en nuestro sitio que redirijan a otra parte, en este caso lo haremos para almacenar el script y el endpoint de la API en nuestro propio sitio.

```javascript
// next.config.js

const rewrites = async () => {
  return [
    {
      source: '/sb.js',
      destination: 'https://cdn.splitbee.io/sb.js'
    },
    {
      source: '/_hive/:slug',
      destination: 'https://hive.splitbee.io/:slug'
    }
  ];
};

modules.exports = {
  rewrites
};
```

Ahora crearemos un archivo especial de Next que nos permitirá añadir el script de Splitbee a todas las páginas de nuestro sitio.

```jsx
// pages/_app.js

import { useEffect } from 'react';
import splitbee from '@splitbee/web';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init({
      scriptUrl: '/sb.js',
      apiUrl: '/_hive'
    });
  });

  return <Component {...pageProps} />;
};

export default App;
```

Y ahora ya lo tenemos todo listo, y con esto podemos tener estadísticas de los visitantes de nuestra web, incluyendo los países desde los que nos visitan, el número de visualizaciones, incluso desde qué web vinieron nuestros usuarios.

Y si visitamos nuestro panel de Splitbee podremos ver algo así.

![Splitbee panel](https://s2.loli.net/2022/02/05/cfRAsdvrUZSOHzl.png)

---

### Otras features

Splitbee además de todo lo mencionado anteriormente nos permite manejar eventos y almacenar datos del usuario, ahora aprenderemos a utilizarlos.

Primero haremos una función que nos permitirá manejar eventos, que no es más que un indicador de que se realizó una acción, a la que podemos darle un nombre y otros valores adicionales.

En la segunda función podremos añadir parámetros a los usuarios, por ejemplo en la página de analítica podremos identificar las acciones de nuestros usuarios al poder relacionarlas con sus nombres, como en el ejemplo siguiente.

![User Example](https://s2.loli.net/2022/02/05/LBCNz47hIRMyind.png)

```javascript
// utils/analytics.js

import splitbee from '@splitbee/web';

// Eventos
const trackEvent = (event, details) => splitbee.track(event, details);

// Guardar datos del usuario
const setUser = (name, email) =>
  splitbee.user.set({
    name,
    email
  });
```

Y esto se puede implementar de diferentes maneras, aquí hay algunos ejemplos:

#### Grabación de evento al pulsar un botón

```jsx
import { trackEvent } from 'utils/analytics';

const ButtonWithEvent = ({ name, children }) => {
  return (
    <button onClick={(() => trackEvent('Button clicked'), { id: name })}>
      {children}
    </button>
  );
};
```

#### Definir el usuario al rellenar un formulario

```jsx
import { setUser } from 'utils/analytics';

const SignUpForm = () => {
  return (
    <form onSubmit={() => setUser(name, email)}>
      <input type='text' name='name' />
      <input type='email' name='email' />
      <input type='submit' />
    </form>
  );
};
```

Al final, mezclando los eventos y fijando los datos del usuario podemos tener unas estadísticas de navegación muy completas como se ve a continuación.

![Splitbee user dashboard](https://s2.loli.net/2022/02/05/qhogI2cW8i1bYfH.png)
