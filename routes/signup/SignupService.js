const SignupRepository = require('./SignupRepository');

const SignupService = {
  signUp: async (info) => {
    try {
      const result = SignupRepository.signUp(info);

      if (result) {
        return result;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};

module.exports = SignupService;
