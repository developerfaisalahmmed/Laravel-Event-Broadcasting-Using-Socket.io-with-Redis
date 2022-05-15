

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const mix = require('laravel-mix');

mix.js('resources/assets/js/laravel-echo-setup.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
