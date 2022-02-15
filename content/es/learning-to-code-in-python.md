---
title: 'Aprende a programar en Python'
date: 'Marzo 30, 2021'
description: 'Aprende a programar en Python, un lenguaje de alto nivel, interpretado y multiparadigma utilizado para la Web con Flask y Django, la Inteligencia Artificial y la Ciencia de Datos.'
tags: ['Python', 'Programación']
banner: 'https://s2.loli.net/2021/12/23/U1RKaZXQxS4eAqc.png'
---

<details> 
  <summary>Tabla de contenidos</summary>

[[toc]]

</details>

## Acerca de Python

Python es un lenguaje de programación de alto nivel, interpretado, orientado a objetos y con semántica dinámica, ampliamente utilizado para la programación de propósito general. Fue creado por Guido van Rossum, y publicado por primera vez el 20 de febrero de 1991.

### ¿Por qué Python?

- Es fácil de aprender - el tiempo necesario para aprender Python es más corto que para muchos otros lenguajes; esto significa que es posible comenzar la programación real más rápidamente.

- Es fácil de enseñar - la carga de trabajo de la enseñanza es menor que la necesaria para otros lenguajes; esto significa que el profesor puede poner más énfasis en las técnicas de programación generales (independientes del lenguaje), sin desperdiciar energía en trucos exóticos, excepciones extrañas y reglas incomprensibles.

- Es fácil de usar para escribir nuevo software - a menudo es posible escribir código más rápido cuando se usa Python.
- Es fácil de entender - a menudo también es más fácil entender el código de otra persona más rápidamente si está escrito en Python.
- Es fácil de obtener, instalar y desplegar - Python es gratuito, abierto y multiplataforma; no todos los lenguajes pueden presumir de ello.

### ¿Para qué se utiliza Python?

- Desarrollo web y de Internet (por ejemplo, los frameworks Django y Pyramid, los microframeworks Flask y Bottle).

- Computación científica y numérica (por ejemplo, SciPy - una colección de paquetes para fines matemáticos, científicos y de ingeniería; Ipython - un shell interactivo que permite editar y grabar sesiones de trabajo).

- Educación (¡es un lenguaje brillante para enseñar a programar!).

- Interfaces gráficas de escritorio (por ejemplo, wxWidgets, Kivy, Qt).

- Desarrollo de software (control de construcción, gestión y pruebas - Scons, Buildbot, Apache Gump, Roundup, Trac)

- Aplicaciones empresariales (sistemas ERP y de comercio electrónico - Odoo, Tryton)

- Juegos (por ejemplo, la serie Battlefield, Sid Meier\'s Civilization IV...)

- Sitios web y servicios (por ejemplo, Dropbox, UBER, Pinterest, BuzzFeed...)

**Texto de [Python Institute](https://pythoninstitute.org/what-is-python/).**

## Lo básico

Antes de empezar hay que aclarar que este es un tutorial básico, Python es un lenguaje muy extenso, por ejemplo hay infinidad de métodos en los tipos de datos o una cantidad abrumadora de cosas que podemos hacer en la Programación Orientada a Objetos pero en este tutorial no lo veremos, sino que traeré más tutoriales con cosas más complejas.

Para empezar a programar tenemos que empezar por lo básico, instalaremos Python, un editor de código y aprenderemos las cosas más básicas de Python.

### Instalando Python

Lo primero que debemos hacer es ir a la web de Python en [https://python.org](https://python.org)

Pinchamos en la sección de descargas y bajamos la versión compatible con nuestro ordenador.

![Sitio de Python](https://s2.loli.net/2021/12/23/F3YozktaiApIBhV.png) **Sección de descargas**

Cuando lo hayas descargado, sólo tienes que ejecutar el archivo, ANTES DE INSTALAR ASEGÚRATE DE QUE LA OPCIÓN QUE DICE _ADD TO PATH_ ESTÁ ACTIVADA.

Luego solo presiona continuar hasta que se instale.

### Instalación de un editor de código

Después de instalar Python busca Sublime Text en Google y selecciona la opción de descargar.

Cuando estés en el menú de descarga sólo tienes que seleccionar la opción compatible con tu sistema operativo, cuando se haya descargado lo instalas.

![sublime text](https://s2.loli.net/2021/12/24/AUIiYhNbLEk3DcH.png) **Menú de descarga de Sublime**

### REPL

El REPL es una interfaz de consola donde se pueden introducir instrucciones escritas en Python, En este caso solo os voy a mostrar el REPL para empezar pero no lo vamos a utilizar más después de esto.

Lo primero que debemos hacer es abrir nuestra terminal.

En Windows sólo tenemos que pulsar `Win + R` y nos aparecerá un menú emergente, sólo hay que escribir `cmd` y pulsar enter.

Para abrirlo en macOS podemos abrir la carpeta Aplicaciones, luego Utilidades y hacer doble clic en Terminal.

Y en Ubuntu pulsa Alt+F2 y escribe "gnome-terminal" y luego enter.

Si tu sistema operativo no está aquí, busca en Internet cómo abrirlo.

Cuando tengas el terminal abierto sólo tienes que escribir `python` en Windows, O en MacOS o Linux `python3`.

Si obtienes un error en MacOS o Linux prueba a escribir simplemente `python`.

Si obtienes un error en cualquier sistema operativo intenta reinstalar Python.

Deberias ver algo así:

```console
C:\Users\SciDroid>python Python 3.10.1 (tags/v3.10.1:2cd268a, Dec 6 2021, 19:10:37)
[MSC v.1929 64 bit (AMD64)] on win32 Type "help", "copyright" "credits" or "license" for more information.

>>>
```

Aquí sólo tienes que escribir esto y algo mágico sucederá.

```python
print("Hola mundo")
```

Y si lo hiciste correctamente en la terminal deberías obtener el texto _Hola mundo_.

Enhorabuena ya has escrito tu primera línea de código, pero esto no es nada ahora vamos a hacer el código de verdad.

### Creando un ejecutable de Python

Antes de empezar debemos activar la vista del nombre del archivo.

En Windows debemos ir al explorador de archivos en la sección de vista y activar la opción llamada Extensión del nombre del archivo.

![Explorador de archivos de Windows](https://s2.loli.net/2021/12/23/DCAfIyhzgVcFXSB.png)

Para crear nuestro ejecutable abrimos Sublime Text, pulsamos `Ctrl + N` y luego `Ctrl + S`, aquí nombras el archivo seguido de la extensión `.py` y guardas el archivo en una ruta que recuerdes para luego poder entrar en esa ruta desde la terminal.

Cuando hayas guardado el archivo, abre la terminal y muévete al directorio con el comando `cd`.

por ejemplo si tu archivo está en el directorio `C:/Usuarios/usuario/descargas/index.py` y teniendo en cuenta que por defecto Windows nos deja en la carpeta del usuario para entrar en la carpeta del archivo deberíamos escribir

```console
cd descargas

```

Ahora escribimos en nuestro editor de código el comando que escribimos en el REPL que es

```python
print("Hola Mundo")
```

Guardamos los cambios con Ctrl+S y en nuestra terminal escribimos `python {nombre del archivo}` debes sustituir la palabra file por el nombre de tu archivo y pulsar enter.

Y si todo ha ido correctamente deberías obtener el texto "Hola Mundo" en la terminal.

### Comentarios

En Python un comentario es un texto que no se ejecuta y se inicializa con el símbolo `#`.

Esto nos sirve por ejemplo para explicar lo que hace nuestro código, te lo muestro con un ejemplo.

```python
# Programa que muestra el texto "Hola Mundo" en la terminal
print("Hola Mundo")
```

En este caso utilizamos el comentario para explicar la función de un programa, pero puedes escribir cualquier cosa dentro de un comentario.

Comentar tu código es siempre una buena práctica, hazlo siempre que sea posible, más adelante hablaremos de documentar tu código.

### Variables

Una variable es un espacio en la memoria RAM donde se pueden guardar datos para su uso posterior.

Esto nos permite guardar datos muy importantes para el funcionamiento de un programa, por ejemplo, el nombre de alguien, cuántas vidas tiene un personaje, etc.

Para definir una variable en Python tenemos la siguiente sintaxis.

```python
número_de_vidas = 5
```

Como vemos en este ejemplo ponemos un nombre a la variable luego un signo = y asignamos un valor.

Ahora las variables tienen ciertas reglas, una de ellas son los nombres, las variables no pueden empezar por número y no se pueden poner como nombre palabras reservadas del lenguaje.

al nombrar las variables es muy buena práctica ponerles un nombre autodescriptivo, por ejemplo si quieres referirte al número de intentos que tiene una persona puedes poner `número_de_intentos` en lugar de `número`.

Si eres observador te habrás dado cuenta de que el nombre de la variable está escrito de tal manera que cada palabra está separada por un `_`, esto se llama Snake Case y es una buena práctica para usarla cuando tienes más de una palabra como nombre de variable en python.

Y ahora tienes un superpoder puedes guardar valores en variables y con la función `print()` pasarlo por la pantalla, vamos a probar.

Vamos a definir una variable y luego imprimirla para ello debemos usar `print(variable)` cambiando variable por el nombre de la variable que asignamos, luego vamos a escribirlo en código.

```python
nombre = "Jhon"
print(nombre)
```

y si lo ejecutamos dará como resultado lo siguiente

```console
Jhon
```

### Recibiendo texto

Ahora, ¿qué pasa si queremos pedirle datos al usuario?

En Python existe una función llamada `input()` para ello.

Hagamos un ejemplo.

```python
nombre = input("¿Cuál es tu nombre?: ")
```

En este código estamos pidiendo al usuario que escriba su nombre, y como vemos es una variable a la que le decimos que su valor es lo que el usuario introduzca.

### Ejercicio

Ok ahora vamos a hacer un ejercicio para poner en práctica todo lo que aprendimos, es bastante sencillo, lo que debes hacer es pedirle a un usuario su edad y luego debes pasarlo por la pantalla, pero el código debe tener comentarios que expliquen lo que hace cada cosa.

**ATENCIÓN: NO VAYAS AL RESULTADO SI NO HAS HECHO EL EJERCICIO, LA ÚNICA FORMA DE APRENDER ES PRACTICANDO.**

Si quieres ver cómo se resuelve ve al final.

## Tipos de datos

Ahora vamos a hablar de los tipos de datos en Python, cada uno tiene propiedades únicas así que vamos a verlos todos.

### Cadenas

Las cadenas son variables de texto libre, en ellas podemos hacer cualquier cosa, y hay que tener cuidado con eso porque no importa lo que sea un número si está en una cadena, será tratado como si fuera texto.

```python
string = "Esto es una cadena".
```

Todas las cadenas van entre comillas, pueden ser comillas dobles (") o simples (').

En las cadenas tenemos una propiedad especial, podemos crear cadenas que se van a mostrar tal cual, contando los saltos de línea, esto nos sirve por ejemplo para colocar arte ASCII en nuestros scripts, para ello debemos colocar 3 comillas dobles (`"""`) al principio y al final.

Vamos a ver un ejemplo.

```python
katana = """,_._._._._._._._._|__________________________________________________________,
|_|_|_|_|_|_|_|_|_|_________________________________________________________/
                  ! """
print(katana)
```

si ejecutamos este código este será el resultado.

```python
  ,_._._._._._._._._|__________________________________________________________,
  |_|_|_|_|_|_|_|_|_|_________________________________________________________/
  !
```

### Números enteros

Los números enteros son números que, como su nombre indica, son enteros, es decir, no tienen decimales. Veamos un ejemplo.

```python
entero = 5
```

### Flotantes

Los flotadores son muy similares a los enteros, la única diferencia es que siempre tienen un decimal.

```python
flotante = 4.53
```

Hay que tener en cuenta que tanto los enteros como los flotantes aceptan números positivos y negativos.

### Booleanos

Los booleanos son tipos de datos muy interesantes ya que solo existen 2 `True` y `False`, y como su nombre lo dice significa verdadero y falso, y estos se escriben como salen aquí con la primera letra en mayúscula, este tipo de datos nos servirá cuando hablemos de control de flujo.

Veamos un ejemplo en código.

```python
out_of_a_loop = True
```

### Transformación de tipos de datos

Ahora que pasa si tenemos un tipo de datos y queremos transformarlo en otros, para ello tenemos las siguientes funciones representadas en las tablas.

| Función |                    lo que hace |
| :------ | -----------------------------: |
| int()   | transforma en un número entero |
| float() |         transforma en un float |
| str()   |    se transforma en una cadena |

Estos funcionan exactamente igual cuando les pasas una variable y la transformas en otro tipo de datos y esto es especialmente útil cuando usamos cosas como `input()`, que debes tener en cuenta que cualquier cosa puede ser transformada en una cadena, pero sólo los números dentro de una cadena pueden ser convertidos a float o integer.

Hagamos un ejemplo de cómo podemos usar esto.

```python
vidas = "5" int(vidas)
```

En este pequeño script lo que hacemos es tomar la variable llamada "vidas" que es un número
en forma de cadena y transformarlo en un tipo entero.

## Operadores

Los operadores son útiles para muchas cosas en Python, por ejemplo puedes usarlos para comparar, hacer operaciones matemáticas o hacer relaciones, existen de diferentes tipos y vamos a verlos.

### Operadores de asignación

| operador |                                                       uso |
| :------- | --------------------------------------------------------: |
| =        |                            asigna el valor a una variable |
| +=       |                              añade el valor a la variable |
| -=       |                             resta el valor de la variable |
| \*=      |                        multiplica el valor de la variable |
| /=       |                             divide el valor a la variable |
| \*\*=    |             calcula el exponente del valor de la variable |
| //=      |       calcula la división entera del valor de la variable |
| %=       | devuelve el resto de la división del valor de la variable |

Pongamos un ejemplo en el que queremos hacer un script en el que puedas colocar un año y tu año de nacimiento y obtengas la edad que tendrás en ese año.

```python
# Pediremos el año de nacimiento y el año en el que quieres calcular tu edad.
año_de_nacimiento = int(input("¿En qué año naciste?: "))
año_a_calcular = int(input("¿En qué año quieres saber tu edad?: "))
# Ahora mostramos el resultado
print(f "en {año_a_calcular} tu edad será {año_a_calcular - año_nacimiento}")
```

Antes de que te preocupes por ver el `print(f"{var}")` te lo voy a explicar, esto es lo que se llama en python una f-print, en esta entre las llaves podemos poner variables u operaciones y el resultado de las mismas se imprimirá en la pantalla, esto nos ahorra trabajo y complicaciones.

Y para terminar esta primera parte os reto a que hagáis un script sencillo en Python y lo dejéis en los comentarios, los iré revisando.

## Respuestas a los ejercicios

**ADVERTENCIA: SI NO HAS HECHO LOS EJERCICIOS VUELVE A SUBIR Y HAZLOS, SI NO LOS HACES ESTE TUTORIAL NO SERVIRÁ DE NADA.**

### Ejercicio Uno

```python
# este código pide la edad del usuario y luego la muestra en la pantalla.

# Pedimos la edad y la almacenamos en una variable.
edad = input("Introduce tu edad: ")

# Pasamos por pantalla el valor de la variable edad.
print(edad)

```
