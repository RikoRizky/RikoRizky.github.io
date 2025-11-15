// (function ($) {
//     // Kode utama
//     $(".carousel").slick({
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         arrows: false,
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1367,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     });

//     // Kode tambahan
//     document.addEventListener("DOMContentLoaded", function () {
//         const form = document.getElementById("saranForm");
//         const toast = new bootstrap.Toast(document.getElementById("pesanNotifikasi"));

//         form.addEventListener("submit", function (e) {
//             e.preventDefault();
//             // Simulasi pengiriman pesan (Anda dapat menggantinya dengan kode pengiriman sesungguhnya)
//             setTimeout(function () {
//                 toast.show();
//                 form.reset(); // Untuk mereset formulir setelah pesan terkirim
//             }, 1000);
//         });

//         var nav = document.querySelector('nav');
//         window.addEventListener('scroll', function () {
//             if (window.pageYOffset > 100) {
//                 nav.classList.add('bg-dark', 'shadow');
//             } else {
//                 nav.classList.remove('bg-dark');
//             }
//         });

//         var text = "Selamat Datang";
//         var index = 0;

//         function typeWriter() {
//             if (index < text.length) {
//                 $('#welcome-text').append(text.charAt(index));
//                 index++;
//                 setTimeout(typeWriter, 100); // Ganti angka ini untuk mengatur kecepatan ketik
//             }
//         }

//         typeWriter();
//     });
// })(jQuery);