// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // 1. Clone marquee children for seamless infinite scroll
    const marquees = document.querySelectorAll('.marquee-content');
    marquees.forEach(marquee => {
        const children = Array.from(marquee.children);
        children.forEach(child => {
            const clone = child.cloneNode(true);
            marquee.appendChild(clone);
        });
    });



    // 2. Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("translate-y-0", "opacity-100");
                entry.target.classList.remove("translate-y-10", "opacity-0");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'translate-y-10', 'opacity-0');
        observer.observe(el);
    });





    // Typewritter effect in hero section 
    const words = ["Full Stack Developer. ", "Backend Developer. ", "Devops Engineer. ", "Coder. "];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
        currentWord = words[i];
        if (isDeleting) {
            document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
            j--;
            if (j == 0) {
                isDeleting = false;
                i++;
                if (i == words.length) {
                    i = 0;
                }
            }
        } else {
            document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
            j++;
            if (j == currentWord.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, 100);
    }

    type();




    // footer - Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mouse follow orb effect
    document.addEventListener('mousemove', (e) => {
        const orb = document.querySelector('.orb');
        orb.style.left = `${e.clientX}px`;
        orb.style.top = `${e.clientY}px`;
    });






});
