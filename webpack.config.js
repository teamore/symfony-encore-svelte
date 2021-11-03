const Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    .addLoader({
        test: /\.svelte$/,
        loader: 'svelte-loader',
    })
    .enableSingleRuntimeChunk()

    .addEntry('app', './assets/js/index.js')

// ...
;


module.exports = Encore.getWebpackConfig();