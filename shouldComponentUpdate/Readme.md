# shouldComponentUpdate

##========= Ciclo de vida del componente =======


Los componentes poseen diferentes estados y métodos: 

- `componentWillMount` se ejecuta antes de la representación, tanto en el lado del servidor y el cliente.

- `componentDidMount` se ejecuta después del la primer render sólo en el lado del cliente. 

- `componentWillReceiveProps` se invoca tan pronto como los apoyos se actualizan antes de que otro se llama render.


- `componentWillUpdate` se llama justo antes de la representación.

- `componentDidUpdate` se llama justo después de la representación.

- `componentWillUnmount` se llama después de que el componente se desmonta del DOM. Estamos de desmontar nuestro componente en main.js.


##============ shouldComponentUpdate ============
Es un método que nos permite sobreescribir en este estado se permite indicar si es necesario que el componente se tiene que volver a renderizar o no.

##==================== Uso ====================
 Nos puede permitir  evitar y filtrar ciertos renderizados.

##==================== Ubicación ====================
 Lógicamente se ejecuta antes que el método render y obviamente no se ejecuta cuando se inicializa un componente. Siempre debemos devolver un booleano indicando si el componente tiene que actualizarse o no.

##============ Boleano cómo requisito ============ 

`shouldComponentUpdate` debe devolver el valor verdadero o falso. Esto determinará si el componente se actualizará o no. Se establece en true de forma predeterminada. Si está seguro de que el componente no es necesario que muestre la representación tras estatal o apoyos se actualizan, se puede devolver el valor falso.


##==================== Ejemplo ====================

En este ejemplo solo nos renderiza el componente cuando this.props.val dividido entre dos, el cociente sea 0, para este ejemplo hacemos uso del evento onClick de React js.

[ver ejemplo](https://github.com/diegozwolf/talks/blob/master/shouldComponentUpdate/example.js)







