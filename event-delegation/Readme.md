# Event delegation

##=========Event delegation =======

Evita agregar eventos a elementos específicos; en vez de eso, el evento se agrega a un elemento padre. Ese event listener analiza los elementos elevados (bubbling) para hacer "match" con elementos hijos.


##========= °o°o° Event Bubbling °o°o° =======

El evento comienza en el elemento más específico y se eleva hasta llegar al document. Este tipo de evento tiene gran soporte en los navegadores 


[ver imagen sobre bubbling](https://webpack.github.io/docs/list-of-loaders.html)

###Paso 2:

Una vez tengas todo instalado puedes ir al archivo `webpack.config.js` y empezar a configaurar webpack para que use babel y los loaders para cargar `css`.

###Paso 3:

Agrega el archivo `.babelrc` con la configuracion necesaria para que que compile tanto ES6 como JSX.

###Paso 4:

Compila todos los archivos con el comando de webpack que ya conoces en la terminal. Y luego abre el archivo `index.html` en el navegador, deberias ver tanto el componente de React funcionando como los estilos de CSS aplicados.
