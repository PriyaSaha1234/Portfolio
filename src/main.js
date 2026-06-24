
window.addEventListener("load", () => {

    document.querySelectorAll(".stack-track").forEach((track, index) => {

        const items = Array.from(track.children);

        // duplicate once
        items.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });

        let position = 0;
        const speed = [0.5, 0.7, 0.4][index]; // per column speed

        const halfHeight = track.scrollHeight / 2;

        function animate() {
            position -= speed;

            if (Math.abs(position) >= halfHeight) {
                position = 0; // reset smoothly (no jump due to duplication)
            }

            track.style.transform = `translateY(${position}px)`;

            requestAnimationFrame(animate);
        }

        animate();
    });

});
import gsap from "gsap";

const section = document.querySelector(".contact-section");
const overlay = document.querySelector(".contact-overlay");

section.addEventListener("mousemove", (e)=>{

    const rect = section.getBoundingClientRect();

    const x = ((e.clientX - rect.left)/rect.width)*100;
    const y = ((e.clientY - rect.top)/rect.height)*100;

    gsap.to(overlay,{
        '--x':`${x}%`,
        '--y':`${y}%`,
        duration:.3,
        ease:'sine.out'
    });

});