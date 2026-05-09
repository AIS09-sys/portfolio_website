const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
    document.body.classList.toggle("darker-theme");
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector('.navbar a[href*=' + id + ']').classList.add("active");
            });
        }
    });
};
