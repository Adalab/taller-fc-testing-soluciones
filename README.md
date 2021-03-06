# Soluciones de los ejercicios del taller de testing

Este repo contiene las soluciones del taller de testing impartido en la formación continua de [Adalab](http://adalab.es/).

Durante este taller la idea es aprender de tests a la vez que se profundiza en los conocimientos de ES6 realizando las katas que hay en la web [ES6Katas](http://es6katas.org/).

Todos los resultados que se recogen aquí se han realizado a partir de esos ejercicios.


## Instalación

Abrimos la terminal y, con el comando que aparece a continuación, clonamos el repositorio en nuestro ordenador:

```
git clone https://github.com/adalab/taller-fc-testing-soluciones
```

Una vez clonado el repositorio nos situamos dentro de él y ejecutamos `npm install` para instalar las dependecias necesarias

```
cd nombreDeTuProyecto
npm install
```


## Uso

Una vez hayas clonado el repositorio e instalado las dependencias solo tienes que ejecutar el comando `npm test` para ejecutar los tests y ver si pasan. Si quieres que los tests se ejecuten cada vez que haces un cambio en un archivo, puedes utilizar `npm run test:watch`.

Si ejecutas el comando `npm run test:watch` y quieres pararlo en algún momento, puedes hacerlo pulsando `control + C`.

Cuando estamos trabajando en un ejercicio, lo normal es que solo queramos ejecutar los tests de ese ejercicio. Para eso podemos hacer `npm test ruta-al-fichero.js` para ejecutar solo los que nos interesan.

**IMPORTANTE:** Al ejecutar el comando de `npm test` o `npm run test:watch` solo se ejecutarán los tests que estén dentro de la carpeta `/test`. Puedes añadir tantos archivos como quieras a la carpeta test (o subcarpetas dentro de esta) y todos se ejecutarán pero es importante que estén situados todos dentro de esa carpeta.


## Falta algo?

Echas de menos que el kit haga algo en concreto? Pídelo sin problema a través de los Issues o si te animas a mejorarlo mándanos un PR :)


## Licencia

[ISC](https://github.com/adalab/boilerplate-testing-es6-mocha/blob/master/LICENSE)
