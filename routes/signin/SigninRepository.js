const db = require('../../utils/db');
const sqls = require('../../utils/sql');

const SigninRepository = {
  detailUser: async (info) => {
    try {
      const query = sqls.detailuserQuery(info);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);

      console.log('Sign Result');
      console.log(result);

      if (result.length >= 1) {
        return result;
      } else {
        console.log('Signin Repository Failed');
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = SigninRepository;
