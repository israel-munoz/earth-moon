/*! From Earth to the Moon. A CSS variables exercise
 *  Israel Muñoz
 *  https://github.com/israel-munoz/earth-moon
 
 *  This JavaScript file only controls the buttons and language change functionality.

 *  Este archivo de JavaScript solo es para controlar la funcionalidad de los botones y cambio de idioma
 */

(function () {
    var title = {
        en: 'From Earth to the Moon',
        es: 'De la Tierra a la Luna'
    };

    function start() {
        var body = document.querySelector('body'),
            front = body.querySelector('.front').style.display = 'none';
        body.classList.remove('play');
        setTimeout(function () {
            body.classList.add('play');
        }, 0);
    }
    function langChange(evt) {
        var lang = evt.target.value;
        document.querySelector('html').lang = lang;
        document.querySelectorAll('.lang input[value=' + lang + ']').forEach(function (i) {
            i.checked = true;
        });
        document.title = title[lang];
    }
    function togglePlay() {
        var body = document.querySelector('body');
        if (this.classList.contains('pause')) {
            body.classList.remove('pause');
            this.classList.remove('pause');
        } else {
            body.classList.add('pause');
            this.classList.add('pause');
        }
    }
    function init() {
        var langs = document.querySelectorAll('.lang input'),
            playButtons = document.querySelectorAll('.start, .replay');
        langs.forEach(function (i) {
            i.addEventListener('change', langChange);
        });
        playButtons.forEach(function (b) {
            b.addEventListener('click', start);
        });
        document.querySelector('.system menu button').addEventListener('click', togglePlay);
    }

    init();
})();