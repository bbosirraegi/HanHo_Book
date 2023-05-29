const db = require('../../utils/db');
const sqls = require('../../utils/sql');

const OrderBookRepository = {
  orderBook: async (info) => {
    try {
      const queries = [sqls.orderQuery(info), sqls.orderdetailQuery(info)];

      const conn = await db.getConnection();

      let pass = false;

      await conn.query('START TRANSACTION');

      for (const query of queries) {
        await conn.query(query);
      }

      const result = await conn.query('COMMIT');

      pass = true;

      return result;
    } catch (e) {
      console.log(e);

      if (!pass) {
        await conn.query('ROLLBACK');
      }
      return;
    }
  },
};

module.exports = OrderBookRepository;
