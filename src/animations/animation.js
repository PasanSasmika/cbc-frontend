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
    duration: 1.3,
  },
  
});



export const HomePageAnimation2 = () => ({

  initial: { opacity: 0, scale: 0 },

  whileInView: { opacity: 1, scale: 1 },
  
  transition: { duration: 1.3 },
  
});
