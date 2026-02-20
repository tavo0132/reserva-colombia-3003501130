/*=============================================================
    URI del autor: www.binarytheme.com
    Licencia: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Para uso personal y comercial.
    A CAMBIO SOLO DANOS CRÉDITOS Y CUÉNTALE A TUS AMIGOS SOBRE NOSOTROS
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
          
       
            // FUNCIÓN PRETTYPHOTO 
            // Inicializa el plugin prettyPhoto para mostrar imágenes en lightbox
            $("a.preview").prettyPhoto({
                social_tools: false
            });

          
            /*====================================
               ESCRIBE TUS SCRIPTS ABAJO 
           ======================================*/
           // Aquí puedes agregar tus scripts personalizados para la página


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Inicialización ///
    // Cuando el documento esté listo, ejecuta la función principal
    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



