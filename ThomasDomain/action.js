"use strict"

const boutons =
    document.querySelectorAll('button');
 
const TIME_ANIMATE = 300;
 
boutons.forEach( bouton => {
 
    bouton.addEventListener('click', function( event ) {
        event.preventDefault(); 
        this.classList.add('trans');
        setTimeout( () => {
            console.log("Complete");

            const href = this.href="easter.html"; 
            document.location = href; 
        }, TIME_ANIMATE );
    });
});