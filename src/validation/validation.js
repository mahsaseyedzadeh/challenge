
const validation = {
  name: {
    presence: {
      allowEmpty: false,
      message: "please enter your name^",
    },
    length: {
      minimum: 2,
      message: "^At least 2 characters",
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "please enter your email^",
    },
    email: {
      message: "^ invalid email",
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "please enter your password",
    },
    format: {
      pattern: /(?=.*\d)(?=.*[a-z-A-Z]).{8,}/,
      message: "^8 characters minimum, containing letters and numbers",
    },
  },
  terms: {
    presence: {
      allowEmpty: false,
      message: "please click terms",
    },
  },

};

export default validation;
