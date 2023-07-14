export const menuvariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration:0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration:0.3,
    },
  },
};

export const slidevariants = {
  initial: {
    x: "100vw",
  },
  final: {
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.6,
    },
  },
};

export const wishlistvariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const msgVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const faqAnswerVariants = {
  initial: {
    opacity: 0.3,
    height: 0,
    overflow: "hidden",
  },
  final: {
    opacity: 1,
    height: "auto",
    transition: {
      type : "linear",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      type : "linear",
    },
  },
};
export const reasonVariants = {
  initial: {
    opacity: 0.3,
    scale: 0.9,
  },
  final: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

// about us page

export const behindVariants = {
  initial: {
    opacity: 0.3,
    x: "-300px",
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 300,
    },
  },
};

export const welcomeTextVariants = {
  initial: {
    opacity: 0.3,
    x: "-100px",
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  farLeft: {
    opacity: 0.3,
    x: "-100px",
  },
  farRight: {
    opacity: 0.3,
    x: "100px",
  },
};

export const switchEleVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
};
