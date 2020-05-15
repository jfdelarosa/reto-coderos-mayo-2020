# reto-coderos-mayo-2020

El reto Coderos de Mayo consiste en realizar un formulario de suscripción a un Newsletter ficticio utilizando el framework [HybridJS](https://hybrids.js.org/).

Cabe mencionar que a propósito se utilizaron malas prácticas (al menos para mi) para construír esta demo:

- No se usan bundlers
- Se carga FontAwesome sólo para mostrar un icono, en vez de cargar un SVG
- Todos los estilos se escribieron en un solo archivo, en vez de que cada componente tenga sus estilos

### Concideraciones

Este proyecto sólo funciona en navegadores actuales porque en vez de utilizar herramientas para empaquetar los scripts, como webpack o Rollup, utiliza los [Módulos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) de JavaScript.

Los componentes `Myfigure.js` y `MyStyles.js` están creados para separar los estilos de los componentes pricipales, y de esta forma mejorar su lectura.

En el archivo `helpers.js` se iportan los métodos necesarios desde el CDN de Hybrids y de igual forma se vuelven a exportar, con el fin de no importar desde el CDN cada que se requiera usar un método.

### Demo:

https://jfdelarosa.github.io/reto-coderos-mayo-2020/
