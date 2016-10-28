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

[Ejemplos de navegación](https://github.com/diegozwolf/talks/blob/master/shouldComponentUpdate/example.js)


##======= Fuentes =======

[Documentación: Navigation  react-native](https://facebook.github.io/react-native/docs/navigation.html)

[Documentación: Navigator  react-native](https://facebook.github.io/react-native/docs/navigator.html)

[Tutorial de Navigator](https://facebook.github.io/react-native/docs/using-navigators.html)





