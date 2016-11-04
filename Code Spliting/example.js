
//Require.ensure sólo carga los módulos, no los evalúa.

//CommonJs: 
require.ensure(["module-a", "module-b"], function(require) {
    var a = require("module-a");
    // ...
});

// AMD: require

require(["module-a", "module-b"], function(a, b) {
    // ...
});

// ES6
require.ensure([], function(require) {
  let contacts = require('./contacts')
})


//ejemplo
var webpack = require("webpack");
module.exports = {
    entry: { a: "./a", b: "./b" },
    output: { filename: "[name].js" },
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
}

//scripts en html
<script src="init.js"></script>
<script src="a.js"></script>
<script src="b.js"></script>