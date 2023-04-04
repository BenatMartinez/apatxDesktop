require('dotenv').config();
require( 'datatables.net-dt' )();

const apiUrl = process.env.API_URL;
const newWindowButton = document.getElementById('new-window-button');

function getView(view) {
    const container = document.querySelector('.container-right');

    fetch('views/'+view+'.html')
    .then(response => response.text())
    .then(html => {
        container.innerHTML = html;

        const js = document.createElement('script');
        js.src = 'javascript/'+view+'.js';
        document.head.appendChild(js);

        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.type = 'text/css';
        css.href = 'styles/'+view+'.css';
        document.head.appendChild(css);
    })
    .catch(error => {
        console.error(error);
    });

    //<link rel="stylesheet" href="styles/barrios.css"></link>
    //<script src="javascript/barrios.js"></script>
}


$(document).ready( function () {

    $(".itemMenu").click(function() {
        $(".itemMenu").removeClass("active");
        $(this).addClass('active');
        const itemText = $(this).text();
        $(".container-right").load("views/"+itemText+".html", function() {
            $('head').append('<link rel="stylesheet" href="styles/clases.css" type="text/css" />');
            $.getScript("scripts/"+itemText+".js", function() {
                // Script loaded successfully
            }).fail(function() {
                console.log("Error while loading script"); 
            });
        });
    });
    
    fetch(apiUrl+'clase/6426c98e61f60cccaf12e18d')
        .then(response => response.text())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            // handle any errors here
            console.error(error);
        });


    

} );

    
  
