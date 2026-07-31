const services = {

logoDesign:{

name:"Logo Design",

icon:"🎨",

color:"#1E88E5"

},

posters:{

name:"Poster Design",

icon:"🖼️",

color:"#5E35B1"

},

flyers:{

name:"Flyer Design",

icon:"📄",

color:"#43A047"

},

packaging:{

name:"Packaging",

icon:"📦",

color:"#FB8C00"

},

businessCards:{

name:"Business Cards",

icon:"📇",

color:"#00897B"

}

};

const portfolio = {

  logoDesign: [
    {

    id:1,

    title:"",

    client:"",

    category:"",

    description:"",

    challenge:"",

    solution:"",

    completionDate:"",

    duration:"",

    software:[],

    tags:[],

    featured:true,

    images:{

        hero:"",

        gallery:[]

    }

    }
  ],
  posters: [
    {

    id:1,

    title:"",

    client:"",

    category:"",

    description:"",

    challenge:"",

    solution:"",

    completionDate:"",

    duration:"",

    software:[],

    tags:[],

    featured:true,

    images:{

        hero:"",

        gallery:[]

    }

    }
  ],
  flyers: [
    {

    id:1,

    title:"",

    client:"",

    category:"",

    description:"",

    challenge:"",

    solution:"",

    completionDate:"",

    duration:"",

    software:[],

    tags:[],

    featured:true,

    images:{

        hero:"",

        gallery:[]

    }

    }
  ],
  packaging: [
    {

    id:1,

    title:"",

    client:"",

    category:"",

    description:"",

    challenge:"",

    solution:"",

    completionDate:"",

    duration:"",

    software:[],

    tags:[],

    featured:true,

    images:{

        hero:"",

        gallery:[]

    }

    }
  ],
  businessCards: [
    {

    id:1,

    title:"",

    client:"",

    category:"",

    description:"",

    challenge:"",

    solution:"",

    completionDate:"",

    duration:"",

    software:[],

    tags:[],

    featured:true,

    images:{

        hero:"",

        gallery:[]

    }

    }
  ],

};

function getProjects(category){

    return portfolio[category];

}

function getFeaturedProject(category){

    return portfolio[category].find(

        project => project.featured

    );

}



const project = getFeaturedProject("logoDesign");

function getRandomProjects(category,count){

    const projects=[...portfolio[category]];

    return projects

        .sort(()=>Math.random()-0.5)

        .slice(0,count);

}



function searchProjects(keyword){

    const allProjects = Object.values(portfolio).flat();

    return allProjects.filter(project =>

        project.title.toLowerCase().includes(keyword.toLowerCase()) ||

        project.client.toLowerCase().includes(keyword.toLowerCase()) ||

        project.tags.some(tag =>

            tag.toLowerCase().includes(keyword.toLowerCase())

        )

    );

}