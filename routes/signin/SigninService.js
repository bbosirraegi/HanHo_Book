const SigninRepository = require('./SigninRepository');

const SigninService = {
  detailUser: async (info) => {
    try {
      const result = await SigninRepository.detailUser(info);

      if (result) {
        return result;
      } else {
        console.log('Signin Service Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = SigninService;
