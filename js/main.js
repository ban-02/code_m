const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));

particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#a2ff00" }, /* Tu verde HSL 90 */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#a2ff00",
                    "opacity": 0.3,
                    "width": 1
                },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 200, "line_linked": { "opacity": 0.8 } }
                }
            },
            "retina_detect": true
        });


