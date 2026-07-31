async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

async function initializePage() {

    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("footer", "components/footer.html");

    initializeNavigation();

}

initializePage();