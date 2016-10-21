# CSS :before and :after 

##========= ¿Qué son ?=======

Pseudolementos que permiten hacer selecciones en css

##========= Uso ==========
-Éstas permiten generar contenido alrededor del elemento seleccionado. (antes o después),
sin necesidad de escribirlo en el html.

##========= Sintaxis ==========
Elemento::after { propiedades}

Elemento::after {
	propiedades
	content: "elementos a agregar como hola";
}

##========= Valores que se puede generar ==========

Strings:  `content: "elementos a agregar como hola";`

Imágenes: `content: url(http://baby-animals.net/wp-content/gallery/Baby-crocodile-wallpapers/Baby-crocodile-wallpaper-2.jpg);`




##======= Compatibilidad =======
IE8+
Firefox
Chrome
Safari
Opera


##========= Visualización en el DOM ==========
Cuando se usa `::after` o `::before` El resultado final no estara en realidad en el DOM,
Lo que realmete se puede ver en el DOM puede ser algo muy similar a:
`<p>
	My name is Donald
	::after
</p>`

