//require('dotenv').config();

const apiUrl = 'http://localhost:3005/';
//const apiUrl = process.env.API_URL
const newWindowButton = document.getElementById('new-window-button');


$(document).ready( function () {

    $(".itemMenu").click(function() {
        $(".itemMenu").removeClass("active");
        $(this).addClass('active');
        const view = $(this).text();
        const container = document.querySelector('.container-right');

        fetch('views/'+view+'.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
    
            const js = document.createElement('script');
            js.src = 'scripts/'+view+'.js';
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

    
  
