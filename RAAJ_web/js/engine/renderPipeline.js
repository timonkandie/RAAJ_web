const RenderPipeline = {
  async render (project){},
  
  async close (){},
  
  update (project){},
  
  async open(){},
  
};

async render(project){

    await this.close();

    this.update(project);

    await this.open();

}

async close(){

    const workspace =

    document.querySelector(

        ".creative-workspace"

    );

    await Animation.fadeOut(workspace);

}

update(project){

    console.log(

        "Updating workspace...",

        project.title

    );

}

async open(){

    const workspace =

    document.querySelector(

        ".creative-workspace"

    );

    await Animation.fadeIn(workspace);

}