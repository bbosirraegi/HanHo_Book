// DataBase와 관련된 작업을 수행

const db = require('../../utils/db');

const sqlquery = {
  listQuery: () => {
    return `
        SELECT
            book_id,book_title,book_qty,book_price,book_desc,book_img,book_gn
        FROM
            t_book
    `;
  },
};

const ListRepository = {
  getBookList: async () => {
    try {
      const query = sqlquery.listQuery();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = ListRepository;
