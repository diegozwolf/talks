# ¿Qué Navigator usar con react-native?

##========= ¿Qué hace navigator? =======

Navigator maneja la transición entre las diferentes escenas en su aplicación. Se implementa en JavaScript y está disponible tanto para iOS y Android. 

Para configurar el navegador se debe proporcionar uno o más objetos llamados rutas que identifican a cada escena. También proporciona una función renderScene que hace que la escena para cada objeto de ruta.

##============ Navegación ============


la documentación de `React-Native` se proponen 3 maneras de realizar un componente de navegación:

`Navigator`: el modo básico, sugerido para las personas que estan iniciando

`NavigatorIOS`: enfocado al desarrollo nativo en iOS 

`NavigationExperimental`: búsqueda de mayor control sobre el flujo de la navegación y es optimo para hacer pruebas

##============ Navigator ============
Navigator proporciona una implementación de JavaScript de una componente de navegación, por lo que funciona en ambos iOS y Android y es fácil de personalizar.


Navigator se puede adaptar para renderizar  diferentes componentes basados enla función `renderScene`. La transición delas  nuevas escenas en la pantalla  se haran deslizando desde la derecha de forma predeterminada, esto se puede controlar usando la función configureScene. 

##============ NavigatorIOS ============
También usa rutas para representar escenas, el componente actual que se va a renderizar, puede ser especificado utilizando `key` del componente en la ruta, y los props deben ser especificados en `passProps`. El óbjeto `navigator` es pasado automaticamente comi prop del componente permitiendo llamar push y pop



##======= NavigationExperimental =======
permite que cualquier `View` pueda actuar como vista de navegación y usa `reducers` para manipular el etado

[Ejemplos de navegación](https://github.com/diegozwolf/talks/blob/master/Navigator/example.jscom/clearfix.html)


##======= Fuentes =======

[Documentación: Navigation  react-native](https://facebook.github.io/react-native/docs/navigation.html)

[Documentación: Navigator  react-native](https://facebook.github.io/react-native/docs/navigator.html)

[Tutorial de Navigator](https://facebook.github.io/react-native/docs/using-navigators.html)






##============ shouldComponentUpdate ============
Es un método que nos permite sobreescribir en este estado se permite indicar si es necesario que el componente se tiene que volver a renderizar o no.

##==================== Uso ====================
 Nos puede permitir  evitar y filtrar ciertos renderizados.

##==================== Sintaxis ====================
 shouldComponentUpdate(nextProps, nextState)


##==================== Ubicación ====================
 Lógicamente se ejecuta antes que el método render y obviamente no se ejecuta cuando se inicializa un componente. Siempre debemos devolver un booleano indicando si el componente tiene que actualizarse o no.

##============ Boleano cómo requisito ============ 

`shouldComponentUpdate` debe devolver el valor verdadero o falso. Esto determinará si el componente se actualizará o no. Se establece en true de forma predeterminada. Si está seguro de que el componente no es necesario que muestre la representación tras estatal o apoyos se actualizan, se puede devolver el valor falso.


##==================== Ejemplo ====================

En este ejemplo solo nos renderiza el componente cuando this.props.val dividido entre dos, el cociente sea 0, para este ejemplo hacemos uso del evento onClick de React js.

[ver ejemplo](https://github.com/diegozwolf/talks/blob/master/shouldComponentUpdate/example.js)
