const homePic = document.querySelector('.homeAnim');
const catText = document.querySelectorAll('.category_description');
const catType = document.querySelectorAll('.categories_section');
const wow = document.querySelectorAll('.wow');



wow.forEach(element => {
    window.addEventListener('scroll', () => {
        const topToAnim = element.getBoundingClientRect().top;
        console.log(topToAnim);
        if (topToAnim <= "300") {
            // const TL = gsap.timeline({ paused: true });
            TL.from(wow, 3, { opacity: 0, top: 90, ease: "Expo.easeInOut" },)
        } else {
            const TL = gsap.timeline({ paused: false });
        }
    })
});


window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });

    TL.from(homePic, 2, { top: 150, opacity: 0, ease: "power2.out" }, 0.3)
        .staggerFrom(catText, 1, { opacity: 0, top: 30, ease: "power2.out" })
        .staggerFrom(catType, 1, { opacity: 0, top: 20, ease: "power2.out" }, 0.3, '-=3')
    // .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2');
    TL.play();
})

