const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('dist');

mix.sass('src/sass/app.scss', 'dist/app.css');
mix.js('src/js/app.js', 'dist/app.js');
mix.copy('src/index.html', 'dist');
mix.copy('src/assets/', 'dist/assets');

mix.autoload({
    jquery: ['$', 'jQuery']
});

mix.options({
	hmrOptions: {
        host: '0.0.0.0',
        port: 8000,
    },
});

mix.webpackConfig({
	devServer: {
		allowedHosts: [
			'spacephotos.local',
		],
	},
});
