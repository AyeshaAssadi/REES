function loadComponent(id, file){
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("hero", "components/hero.html");
loadComponent("about", "components/about.html");
loadComponent("factory", "components/factory.html");
loadComponent("paperImpact", "components/paperImpact.html");
loadComponent("products", "components/products.html");
loadComponent("footer", "components/footer.html");
