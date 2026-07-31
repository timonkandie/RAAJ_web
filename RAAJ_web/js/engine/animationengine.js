const Animation = {

    config:{

      fast:150,

      normal:300,

      slow:600,

      page:800,
      
      easing:{

        standard:"ease",

        enter:"ease-out",

        exit:"ease-in",

        smooth:"ease-in-out"

      }

  animate(element,properties){

  return new Promise (resolve =>{

    element.style.transition = `opacity ${duration}ms ${easing},

transform ${duration}ms ${easing}`;

    if(opacity !== undefined){

      element.style.opacity = opacity;

    }

    if(transform){

      element.style.transform = transform;

    }

    setTimeout(()=>{

      resolve();

    },duration);
    
  });

  const {

    duration = this.config.normal,

    easing = this.config.easing.smooth,

    opacity,

    transform

  } = properties;
  
  }


  fadeIn(element){

    return this.animate(element,{

        opacity:1

    });

  }

  fadeOut(element){

    return this.animate(element,{

        opacity:0

    });

  }

  slideUp(element){

    return this.animate(element,{

        opacity:1,

        transform:"translateY(0px)"

    });

  }

  slideDown(element){

    return this.animate(element,{

        opacity:0,

        transform:"translateY(40px)"

    });

  }

  scaleIn(element){

    return this.animate(element,{

        transform:"scale(1)",

        opacity:1

    });

  }

  scaleOut(element){

    return this.animate(element,{

        transform:"scale(.9)",

        opacity:0

    });

  }

  rotate(element,degrees){

    element.style.transform=

    `rotate(${degrees}deg)`;

}
  float(element){

    element.classList.add("floating");

  }


countUp(element,target){

}

workspaceOpen(){

}

workspaceClose(){

}
};


async timeline(steps){

  for(const step of steps){
    await step();

}

}

async workspaceTransition(workspace, update){

    await this.timeline([

        () => this.workspaceClose(workspace),

        async () => update(),

        () => this.workspaceOpen(workspace)

    ]);

}
}


