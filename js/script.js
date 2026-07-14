// ===============================
// STICKY HEADER ON SCROLL
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#0B3D2E";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.2)";

    }else{

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// FADE IN ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card,.project,.about-image,.about-content,.cta,.contact-grid").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});

// ===============================
// HERO PARALLAX
// ===============================

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";

});

// ===============================
// BUTTON HOVER EFFECT
// ===============================

document.querySelectorAll(".btn,.btn2,.nav-btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});

// ===============================
// IMAGE ZOOM EFFECT
// ===============================

document.querySelectorAll(".project img").forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.08)";
        image.style.transition=".5s";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});

// ===============================
// LOADER
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
