# Code Spliting en webpack 

##========= Funcionalidad =======
 ´Code Spliting´ es una función de Webpack que se utiliza para dividir su base de código en "trozos" que se cargan según la necesidad. Algunos otros bundlers los llaman "layers", "rollups".


##========= Split Points =======
Con ´Code Spliting´ se pueden definir puntos de división ´split points´ en los bloques de código. Webpack se encarga de las dependencias, archivos de salida y tiempo de ejecución.


 La división de código no consiste simplemente en extraer código  La característica principal de ´Code Spliting´ es que el  código en un fragmentado es cargado cuando es solicitado. Esto puede mantener la descarga inicial pequeña y descarga el código bajo demanda cuando lo solicite la aplicación.



##========= Definir split point =======

-CommonJs: require.ensure
´require.ensure(dependencies, callback)´  require.ensure se asegura que cada dependencia sea sincronizada cuando se llama el callback.

-AMD: require: ´require(dependencies, callback)´ este require se define como asincrónico, cuando reuire es llamado todas las dependencias se cargan y el callback es llamado junto con los exports.

ES6 Modules:  ´['lodash', 'backbone'].forEach(name => import name )´


##========= Commons chunk =========
The CommonsChunkPlugin puede mover módulos  que se producen en bloques de entrada múltiple a un nuevo fragmento de entrada (el fragmento commons). El tiempo de ejecución también se mueve al fragmento común. Esto significa que los trozos de entrada antiguos son trozos iniciales ahora.


fuente
[documentación de webpack](https://webpack.github.io/docs/code-splitting.html)
