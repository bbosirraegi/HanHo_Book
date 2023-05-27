const db = require('../../utils/db');
const sqls = require('../../utils/sql');

const DetailBookRepository = {
  detailBook: async (info) => {
    try {
      const query = sqls.detailBookQuery(info);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);

      if (result) {
        return result;
      } else {
        console.log('DetailBook Repository Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = DetailBookRepository;
