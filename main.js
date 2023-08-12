window.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const box = document.querySelector('.box');
    const links = box.querySelectorAll('a');

    setTimeout(() => {
        h1.classList.add('show');
        setTimeout(() => {
            h2.classList.add('show');
            setTimeout(() => {
                box.classList.add('show');
                setTimeout(() => {
                    links.forEach((link, index) => {
                        setTimeout(() => {
                            link.classList.add('show');
                        }, index * 500); // Verzögerung für das Anzeigen der Links
                    });

                    // Unterstreichung der Links nacheinander
                    links.forEach((link, index) => {
                        setTimeout(() => {
                            link.classList.add('show-underline');
                        }, links.length * 500 + index * 500); // Startet nachdem alle Links angezeigt wurden
                    });
                }, 500); // Verzögerung, um sicherzustellen, dass die .box vollständig sichtbar ist, bevor die Links angezeigt werden
            }, 500); // Verzögerung für das h2-Element
        }, 500); // Verzögerung für das h1-Element
    }, 500); // Startverzögerung
});
