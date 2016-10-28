
   //////////////////////////////////logo header
$(document).ready(function () {
// on recupere la hauteur de notre header pour centrer notre element titre au centre
    $('.titre').css({
        right: ($('#header-content').width() - $('.titre').outerWidth()) / 2,
        top: ($('#header-content').height() - $('.titre').outerHeight()) / 2
    });

// au changement de dimension de la fenetre, on re calcul notre element pour etre centrer
    $(window).resize(function () {
        $('.titre').css({
            right: ($('#header-content').width() - $('.titre').outerWidth()) / 2,
            top: ($('#header-content').height() - $('.titre').outerHeight()) / 2
        });
    });


   //////////////////////////////////Scroll Menu

        // je declare une variable pour definir la hauteur de ma section header
        var homeHeight = $('#header-content').height();
	$('#header-content').css('height',homeHeight);
	
        // une fois passé section header j'ajoute la class pour fixer la barre de  nav
    
$(window).on('scroll', function(){
	if( $(window).scrollTop()>homeHeight){
		$('.menu-nav').addClass('navbar-fixed-top');
                $('.menu-nav').addClass('navbar-nav-min');
                $('.connexion').css( { paddingTop : "0",paddingBottom : "10px", transition :"0.4s" } );
                $('.navbar-brand').css( { paddingTop : "5px", transition :"0.4s" } );
                
       // sinon je l'enleve        
	} else {
		$('.menu-nav').removeClass('navbar-fixed-top');
                $('.connexion').css( { paddingTop : "0",paddingBottom : "0px", transition :"0.4s" } );
                $('.navbar-brand').css( { paddingTop : "15px", transition :"0.4s" } );
	}

    });
    
    
       //////////////////////////////////effet au chargement de la page
       //
       //
    //j'applique sur le body la propriete fadeIn ainsi que la durée au chargement de la page
    $('body').css('display', 'none');
    $('body').fadeIn(1600);


    
});



