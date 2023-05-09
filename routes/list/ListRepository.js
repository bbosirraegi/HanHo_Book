// DataBase와 관련된 작업을 수행

const db = require('../../utils/db');
const sqls = require('../../utils/sql');

const ListRepository = {
  getBookList: async () => {
    try {
      const query = sqls.listQuery();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = ListRepository;
