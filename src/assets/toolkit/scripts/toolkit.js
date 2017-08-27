/**
 * Toolkit JavaScript
 */
global.jQuery = require("jquery");
var sprockets = require("bootstrap-sass/assets/javascripts/bootstrap-sprockets");
var bootstrap = require("bootstrap");
var carousel = require("owl.carousel");

/*  ------------------
    Remove Preloader
    ------------------  */
jQuery(document).ready(function() {
    jQuery('#preloader').delay(350).fadeOut('slow', function() {
        //jQuery('.profile-page, .portfolio-page, .service-page, .contact-page').hide();
		jQuery('.close-btn').css({
          visibility: 'hidden'
        });
    });
});

jQuery(document).ready(function() {
    /*  ---------------------
         Homepage Responsive
        ---------------------  */

    function homepageResponsive() {
        // Homepage Main Portions Responsive
        var windowsWidth = jQuery(window).width(),
            windowsHeight = jQuery(window).height();

        if (windowsWidth > 767) {
            jQuery('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });
        } else {
            jQuery('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });
        }

        // Homepage Profile Image Responsive

        var introWidth = jQuery('.introduction').width(),
            introHeight = jQuery('.introduction').height(),
            bgImage = jQuery('.introduction').find('img'),
            menuBgImages = jQuery('.menu > div img');

        if (introWidth > introHeight) {
            bgImage.css({
                width: '100%',
                height: 'auto'
            });
            menuBgImages.css({
                width: '100%',
                height: 'auto'
            });
        } else {
            bgImage.css({
                width: 'auto',
                height: '100%'
            });
            menuBgImages.css({
                width: 'auto',
                height: '100%'
            });
        }
    }

    jQuery(window).on('load resize', homepageResponsive);

    /*  --------------
         Menu Settings
        --------------  */

    // Hide Menu

    jQuery('.menu > div').on('click', function () {

        var introWidth = jQuery('.introduction').width(),
            menuWidth = jQuery('.menu').width();

        jQuery('.introduction').animate({
            left: '-' + introWidth
        }, 1000);
        jQuery('.menu').animate({
            left: menuWidth
        }, 1000, function () {
            jQuery('.home-page').css({
                visibility: 'hidden'
            });
        });

    });	
	
    // Close Button, Hide Menu

    jQuery('.close-btn').on('click', function() {
        jQuery('.home-page').css({
          visibility: 'visible'
        });
        jQuery('.introduction, .menu').animate({
           left: 0
        }, 1000);
        jQuery('.profile-page, .portfolio-page, .service-page, .contact-page').fadeOut(800);
		jQuery(location).attr('href','#/');
    });

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    jQuery('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    jQuery('.contact-details .social-media [data-toggle="tooltip"]').tooltip();



    /*----------------------script for owl carousel sponsors---------------------*/

    jQuery("#sponsor-list").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        stopOnHover: true,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 2],
        itemsTabletSmall: [625, 2],
        itemsMobile: [479, 1]
    });
});