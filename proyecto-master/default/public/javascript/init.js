/*
 Ion by TEMPLATED
 templated.co @templatedco
 Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
 */

/* global skel */

// Cambiar las rutas absolutas de los distintos css; a la url del servidor donde se vaya a alojar
// Ejemplo: https:// ó http://sexianuncios.com/default/public/css/sexianuncios/??????????.css

(function ($) {

    skel.init({
        reset: 'full',
        breakpoints: {

            // Global.
            global: {
                range: '*',
                href: 'http://localhost/AnunciosREPO/proyecto-master/default/public/css/sexianuncioscss/style.css',
                containers: 1400,
                grid: {
                    gutters: {
                        vertical: '4em',
                        horizontal: 0
                    }
                }
            },

            

            // XLarge.
            xlarge: {
                range: '-1680',
                href: 'http://localhost/AnunciosREPO/proyecto-master/default/public/css/sexianuncioscss/style-xlarge.css',
                containers: 1200
            },

            // Large.
            large: {
                range: '-1280',
                href: 'http://localhost/AnunciosREPO/proyecto-master/default/public/css/sexianuncioscss/style-large.css',
                containers: 960,
                grid: {
                    gutters: {
                        vertical: '2.5em'
                    }
                },
                viewport: {
                    scalable: false
                }
            },

            // Medium.
            medium: {
                range: '-980',
                href: 'http://localhost/AnunciosREPO/proyecto-master/default/public/css/sexianuncioscss/style-medium.css',
                containers: '90%',
                grid: {
                    collapse: 1
                }
            },

            // Small.
            small: {
                range: '-736',

                href: 'http://localhost/AnunciosREPO/proyecto-master/default/public/css/sexianuncioscss/style-small.css',
                containers: '90%',
                grid: {
                    gutters: {
                        vertical: '1.25em'
                    }
                }
            },

            // XSmall.
            xsmall: {
                range: '-480',
                href: 'http://localhost/AnunciosREPO/proyecto-master/default/public/css/sexianuncioscss/style-xsmall.css',
                grid: {
                    collapse: 2
                }
            }

        },
        plugins: {
            layers: {

                // Config.
                config: {
                    transform: true
                },

                // Navigation Panel.
                navPanel: {
                    animation: 'pushX',
                    breakpoints: 'medium',
                    clickToHide: true,
                    height: '100%',
                    hidden: true,
                    html: '<div data-action="moveElement" data-args="nav"></div>',
                    orientation: 'vertical',
                    position: 'top-left',
                    side: 'left',
                    width: 250
                },

                // Navigation Button.
                navButton: {
                    breakpoints: 'medium',
                    height: '4em',
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
                    position: 'top-left',
                    side: 'top',
                    width: '6em'
                }

            }
        }
    });

    $(function () {

        // jQuery ready stuff.

    });

})(jQuery);