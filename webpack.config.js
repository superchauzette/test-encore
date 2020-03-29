/* eslint-disable */
const Encore = require("@symfony/webpack-encore");
const fs = require("fs");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("build/") // directory where compiled assets will be stored
  .setPublicPath("/front/") // public path used by the web server to access the output path
  .setManifestKeyPrefix("build/"); // only needed for CDN's or sub-directory deploy

const filenames = fs.readdirSync("front/pages");
filenames.forEach((filename) => {
  Encore.addEntry(filename.replace(".tsx", ""), "./front/pages/" + filename);
});

Encore
  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()
  // .splitEntryChunks() // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  //.enableVersioning(Encore.isProduction())  // enables hashed filenames (e.g. app.abc123.css)
  .addLoader({
    test: /\.(js|jsx)$/,
    loader: "eslint-loader",
    exclude: [/node_modules/],
    enforce: "pre",
    options: {
      configFile: "./.eslintrc",
      emitWarning: true,
    },
  })
  // enables @babel/preset-env polyfills
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = "entry";
    config.corejs = 3;
  })
  //.enableSassLoader()   // enables Sass/SCSS support
  .enableTypeScriptLoader()
  .enableReactPreset();
// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())
//.autoProvidejQuery() // uncomment if you're having problems with a jQuery plugin
//.addEntry('admin', './assets/js/admin.js') // uncomment if you use API Platform Admin (composer require api-admin)

module.exports = Encore.getWebpackConfig();
