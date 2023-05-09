const db = require('../../utils/db');
const sqls = require('../../utils/sql');
const uuid = require('uuid');

const AddBookRepository = {
  addBook: async (info) => {
    try {
      const query = sqls.addQuery(info);
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
};

module.exports = AddBookRepository;
