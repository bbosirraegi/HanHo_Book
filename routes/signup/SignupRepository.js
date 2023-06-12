const db = require('../../utils/db');
const sqls = require('../../utils/sql');

const SignupRepository = {
  signUp: async (info) => {
    try {
      const query = sqls.signupQuery(info);

      const conn = await db.getConnection();

      const result = await conn.query(query);

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

module.exports = SignupRepository;
