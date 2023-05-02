const db = require('../../utils/db');

const sqlquery = {
  addQuery: (info) => {
    return `
            INSERT INTO t_book
            VALUES( ${info.title}, ${info.qty}, ${info.price}, ${info.desc}, ${info.img}, ${info.gn} )
        `;
  },
};

const AddBookRepository = {
  addBook: async (info) => {
    try {
      const query = sqlquery.addQuery(info);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = AddBookRepository;
