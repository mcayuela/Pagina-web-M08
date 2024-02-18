document.addEventListener('DOMContentLoaded', function() {
    var toggleNeon = document.getElementById('toggleNeon');
    var sections = document.querySelectorAll('.contenidor section');
    var button = document.querySelector('.boto-apagar-neon');
    var h1 = document.querySelector('h1');

    if (localStorage.getItem('neonState') === 'on') {
        toggleNeon.checked = true;
        sections.forEach(function(section) {
            section.classList.add('apagar-neon');
        });
        button.classList.add('apagar-neon');
        h1.classList.add('apagar-neon');
    }

    toggleNeon.addEventListener('change', function() {
        sections.forEach(function(section) {
            section.classList.toggle('apagar-neon');
        });

        button.classList.toggle('apagar-neon');
        h1.classList.toggle('apagar-neon');

        if (toggleNeon.checked) {
            localStorage.setItem('neonState', 'on');
        } else {
            localStorage.setItem('neonState', 'off');
        }
    });
});
