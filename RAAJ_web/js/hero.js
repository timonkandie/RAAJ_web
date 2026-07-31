const heroState = {

    currentService: [],

    currentProject: [],

    autoplay: true,

    interval: null

};

/*=== caching ===*/

const heroElements = {

    tabs: document.querySelector(".service-tabs"),

    image: document.querySelector(".project-image img"),

    title: document.querySelector(".project-meta h2"),

    category: document.querySelector(".project-meta p"),

    notes: document.querySelector(".designer-notes"),

    software: document.querySelector(".software-used"),

    action: document.querySelector(".project-action a")

};

function RenderPipeline.render(project);{
  heroElements.image.src = project.images.hero;

  heroElements.title.textContent = project.title;

  heroElements.category.textContent = project.category;

  heroElements.notes.innerHTML = `

<h4>Challenge</h4>

<p>${project.challenge}</p>

<h4>Solution</h4>

<p>${project.solution}</p>

`;

  heroElements.action.href = `portfolio/${project.slug}.html`;

}

const softwareHTML = project.software

.map(tool => `<span>${tool}</span>`)

.join("");

heroElements.software.innerHTML = softwareHTML;

function loadService(service){

    heroState.currentService = service;

    heroState.currentProject = 0;

    const featured = getFeaturedProject(service);

    renderProject(featured);

}

document .querySelectorAll(".service-tab") .forEach(tab=>{

tab.addEventListener("click",()=>{

loadService(

tab.dataset.service

);

});

});

function startAutoplay(){

heroState.interval = setInterval(()=>{

nextProject();

},5000);

}

function nextProject(){

const projects = getProjects(

heroState.currentService

);

heroState.currentProject++;

if( heroState.currentProject>=projects.length

){

heroState.currentProject=0;

}

renderProject(

projects[heroState.currentProject]

);

}

heroState.currentProject--;

if(heroState.currentProject<0){

heroState.currentProject=

projects.length-1;

}

function initializeHero(){

loadService(

heroState.currentService

);

startAutoplay();

}

/*=== new code ===*/

async function renderProject(project){

    await closeWorkspace();

    updateWorkspace(project);

    await openWorkspace();

}