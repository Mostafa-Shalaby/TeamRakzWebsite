// Initializes Navigation Menu
$(document).ready(function () {
    $('.loader').fadeOut('slow');
    $("#respMenu").aceResponsiveMenu({resizeWidth: "780" });
    //Navigation Menu Background Changer
    window.addEventListener('scroll', function() {
        if (this.window.scrollY > 15) {
            this.document.querySelector('nav').style.backgroundColor= 'rgba(51,51,51,1)';
        } else {
            this.document.querySelector('nav').style.backgroundColor= 'rgba(0,0,0,0)';
        }
    })
});



