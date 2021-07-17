const mix = require('laravel-mix');

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

mix.js('resources/js/components/Form/index.jsx', 'public/js/components/Form/')
    .js('resources/js/components/Chart/index.jsx', 'public/js/components/Chart/')
    .sass('resources/css/index.scss', 'public/css').react();
