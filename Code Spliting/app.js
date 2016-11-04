// Hacer un Split de la aplicación 

//se parte la aplicación en 2 archivos app.js y vendor.js y se puede hacer un require en el archivo vendor.js

var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./app.js",
    vendor: ["jquery", "underscore", ...],
  },
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};
//esto removera todos los modulos en el vendedor