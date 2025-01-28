export const Animation = () => ({
  whileTap: {
    scale: 2,
    rotate: 180,
  },
  transition: {
    duration: 0.7,
  },
});

export const Animation2 = () => ({
  initial: {
    x: -60,
  },

  animate: {
    x: -7,
  },
  transition: {
    duration: 0.8,
  },
});

export const HomePageAnimation = () => ({
  initial: {
    scale: 1.8,
  },

  animate: {
    scale: 1,
  },
  transition: {
    duration: 1,
  },
  
});



export const HomePageAnimation2 = () => ({

  initial: { opacity: 0, scale: 0.8 },

  whileInView: { opacity: 1, scale: 1 },
  
  transition: { duration: .7 },
  
});


export const SkinImprove1 = () => ({

  initial: { x: -200},

  whileInView: { x: 1 } ,
    
  transition: { duration: 1.3 },

    
});

export const SkinImprove2 = () => ({

  
  initial: { opacity: 0, scale: 0 },

  whileInView: { opacity: 1, scale: 1 },
  
  transition: { duration: 1.1 },

    
});


      export const SkinImprove3 = () => ({

  
        animate:{ rotate: 360 },
        transition:{
        duration: 7, 
        repeat: Infinity,
        ease: "linear", 
      }

      
          
 });

 export const SkinImprove4 = () => ({

  initial: { y: 140 },

  whileInView: { y:0 },
  
  transition: { duration: 1 },
  
});


export const Headeranimation = () => ({

  initial : { x: -300},
  whileInView : {x: 0 },
  transition: { duration: 1 },
  
});

export const CategoryBar = () => ({
  initial: {
    y: -18,
  },

  animate: {
    y: 0,
  },
  transition: {
    duration: 0.002,
    ease: "linear",
  },
});

export const Category = () => ({
  initial: {
    scale: 1.6,
  },

  animate: {
    scale: 1,
  },
  transition: {
    duration: 0.4,
  },
  
});

export const About = () => ({
  initial: { x: 300},

  whileInView: { x: 1 } ,
    
  transition: { duration: 1.3 },
  
});

export const About2 = () => ({
  initial: { x: -300},

  whileInView: { x: 1 } ,
    
  transition: { duration: 1.3 },
  
});