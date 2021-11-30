const mix = require('laravel-mix');

mix.setPublicPath('dist/')
mix.setResourceRoot('../')
mix.postCss('resources/styles/app.css', 'dist/css')
