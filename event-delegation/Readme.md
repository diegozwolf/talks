# Event delegation

##========= Event delegation =======

Evita agregar eventos a elementos específicos; en vez de eso, el evento se agrega a un elemento padre. Ese event listener analiza los elementos elevados (bubbling) para hacer "match" con elementos hijos.

##========= Uso ==========
.-asigna eventos a elementos dinámicos

-Event delegation evita que tengamos que poner event listeners a cada elemento


##========= °o°o° Event Bubbling °o°o° =======

El evento comienza en el elemento más específico y se eleva hasta llegar al document.

[ver imagen sobre Event Bubbling](https://github.com/diegozwolf/talks/blob/master/event-delegation/event%20bubbling.JPG)


##========= ↓↓↓↓↓ Event Capturing ↓↓↓↓↓ =======

El evento comienza en el document y fluye hacia abajo hasta el elemento más específico

[ver imagen sobre Event Capturing](https://github.com/diegozwolf/talks/blob/master/event-delegation/event%20capturing.JPG)


