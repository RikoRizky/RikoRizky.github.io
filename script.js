
        $(document).ready(function(){
            var $carousel = $('.card-animation-cont');
            
            $carousel.slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                pauseOnFocus: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0'
                        }
                    }
                ]
            });

            // Pause carousel when clicking on a card
            $('.card').on('click', function(e) {
                e.preventDefault();
                $carousel.slick('slickPause');
                $(this).addClass('active');
            });

            // Resume autoplay when clicking outside of cards
            $(document).on('click', function(e) {
                if (!$(e.target).closest('.card').length) {
                    $carousel.slick('slickPlay');
                    $('.card').removeClass('active');
                }
            });
        });