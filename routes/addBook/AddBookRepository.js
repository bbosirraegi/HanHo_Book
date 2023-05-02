const db = require('../../utils/db');

const sqlquery = {
  addQuery: (info) => {
    let img;

    if (info.img) {
      img = info.img;
    } else {
      img = "'X'";
    }

    // 모두 String으로 받아오는 문제
    return `
            INSERT INTO 
              t_book( book_id, book_title, book_qty, book_price, book_desc, book_img, book_gn )
            VALUES( 11, ${info.title}, ${info.qty}, ${info.price}, ${info.desc}, ${img}, ${info.gn} )
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
