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
    // Smooth Scrolling
    $('a.page-scroll').on('click', function(event) {
      if(this.hash !=='') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 58
          }, 800
        );
      }
    });
});
// netlifyIdentity Login 
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
}