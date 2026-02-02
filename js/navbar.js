document.addEventListener("DOMContentLoaded", ()=> {
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".navbar-nav a");

    navLinks.forEach(link =>{
        link.addEventListener("click", ()=>{
            if(window.innerWidth<992){
                const Menu = bootstrap.Collapse.getInstance(navMenu);
                if(Menu){
                    Menu.hide();
                }
            }
        });
    });
});