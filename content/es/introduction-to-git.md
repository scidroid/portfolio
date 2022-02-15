---
title: Una introducción a Git
date: Junio 9, 2021
description: Git nos permite gestionar, distribuir y colaborar en nuestro código
  para que esté organizado y haya un flujo de trabajo eficiente al programar con
  varias personas, también nos ayudará a hacer cosas como volver a versiones
  anteriores de nuestro proyecto.
tags:
  - Git
  - Programación
banner: https://s2.loli.net/2021/12/23/ftEzv1gDspqQmcU.png
draft: "false"
type: blog
---
<details> 
  <summary>Tabla de contenidos</summary>
  
  \[[toc]]
</details>

## ¿Qué es Git?

Git es un sistema de control de versiones creado inicialmente por Linus Torvalds, el mismo creador del kernel de Linux. Git nació cuando el kernel de Linux utilizaba un sistema de control de versiones llamado BitKeeper, pero éste era privativo (o de código cerrado) y cuando los colaboradores del kernel decidieron buscar otros sistemas se dieron cuenta de que ninguna de las alternativas que había en ese momento era suficiente.

![Linus Trovalds](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2kulqu1vmzdkaj6h11ua.jpg)

Git nos permite gestionar, distribuir y colaborar en nuestro código para que esté organizado y haya un flujo de trabajo eficiente cuando se programa con varias personas, también nos ayudará a hacer cosas como volver a versiones anteriores de nuestro proyecto, o ver lo que han programado las otras personas que colaboran en nuestro proyecto.

## Instalación de Git

Puedes instalar Git en tu ordenador de varias maneras, la más fácil es si tienes un gestor de paquetes, como aptitude, [brew](https://brew.sh/) o [chocolatey](https://chocolatey.org/).
si tienes alguno de estos sólo tienes que ejecutar esta línea en tu terminal, si estás en linux o MacOS y no funciona correctamente puedes ejecutarlo con la instrucción `sudo` al principio del comando.

```bash
{apt | brew | choco} install git
```

Si no tienes instalado el gestor de paquetes puedes instalarlo usando la distribución oficial en la [web](https://git-scm.com/):

![Descargar git](https://s2.loli.net/2021/12/23/mdMEAuhbl2PwWfn.png)

## Empecemos con Git

Para empezar vamos a crear una carpeta, y abrir esa carpeta en la terminal, luego debemos inicializar nuestro repositorio, para ello ejecutamos el comando `git init` y debería decir que el repositorio ha sido inicializado y ahora podemos empezar a gestionar versiones en nuestro código.
Para empezar a ejecutar los comandos vamos a crear un código de ejemplo, en este caso un documento HTML donde vamos a crear una lista de deseos navideños.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Lista de deseos</title>
  </head>
  <body>
    <h1>Lista de deseos para navidad</h1>
    <ul>
      <li>Ser un superhéroe</li>
      <li>Comprar una mansión con mi sueldo de junior</li>
      <li>Visitar el <a href="https://scidroid.me">sitio de SciDroid</a></li>
    </ul>
  </body>
</html>
```

Cuando guardamos este archivo podemos hacer un commit, que nos permitirá guardar los cambios en este archivo. veamos el ejemplo.
Lo primero que haremos es añadir el archivo a git, para ello haremos el siguiente comando.

```bash
git add index.html
```

Este comando hará que git empiece a comprobar los cambios en nuestro archivo, y el último paso antes de hacer nuestros primeros commits es ejecutar estos comandos para identificarnos.

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com`}
```

Sólo cambia el nombre y el correo electrónico por tu nombre y dirección de correo electrónico.

Ahora la última parte es hacer un commit, simplemente ejecuta el siguiente comando y cambia el mensaje por el que quieras.

```bash
git commit -m "mensaje"
```

Y si todo ha ido bien, enhorabuena has hecho tu primer commit, ahora sigue aprendiendo porque git es una herramienta esencial en el desarrollo.

Gracias por leer.