const db = require('../../utils/db');
const sqls = require('../../utils/sql');

const ListRepository = {
  getBookList: async () => {
    try {
      const query = sqls.listBookQuery();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);

      if (result) {
        return result;
      } else {
        console.log('Repository Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },

  deleteBook: async (info) => {
    try {
      const query = sqls.deleteQuery(info);
      const conn = await db.getConnection();
      cosnt[result] = await conn.query(query);

      if (result) {
        return result;
      } else {
        console.log('Repository Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = ListRepository;
