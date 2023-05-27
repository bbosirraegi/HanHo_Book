const uuid = require('uuid');

const sql = {
  // 유저 정보 가져오기
  detailuserQuery: (info) => {
    return `
      SELECT
        user_id, user_pw, user_nm, user_grade
      FROM
        t_user
      WHERE
        ( user_id = '${info.user_id}' AND user_pw = '${info.user_pw}' )
    `;
  },

  // 도서 전체 조회
  listBookQuery: () => {
    return `
            SELECT
                book_id,book_title,book_qty,book_price,book_desc,book_img,book_gn
            FROM
                t_book
        `;
  },

  detailBookQuery: (info) => {
    return `
            SELECT
                book_id,book_title,book_qty,book_price,book_desc,book_img,book_gn
            FROM
                t_book
            WHERE
                ( book_id = '${info}')
    `;
  },

  // 도서 추가
  addQuery: (info) => {
    const uuidbox = uuid.v4();

    // 모두 String으로 받아오는 문제
    return `
            INSERT INTO 
              t_book( book_id, book_title, book_qty, book_price, book_desc, book_img, book_gn )
            VALUES( '${uuidbox}', '${info.title}', ${info.qty}, ${info.price}, '${info.desc}', '${info.img}', '${info.gn}' )
            `;
  },

  // 도서 삭제
  deleteQuery: (info) => {
    return `
      DELETE
        FROM
          t_book
        WHERE
          ( book_id = '${info.id}' )
    `;
  },

  // 도서 주문
  orderQuery: (info) => {
    return `
      INSERT INTO 
        t_order( order_id, user_id, order_date, order_total )
      VALUES( '${info.orderid}', '${info.userid}', CURRENT_TIMESTAMP, ${info.total} )
    `;
  },

  // 주문 상세
  orderdetailQuery: (info) => {
    return `
      INSERT INTO
        t_order_detail( t_book_book_id, t_order_order_id, order_qty, order_address, order_phone )
      VALUES( '${info.book_id}', '${info.orderid}', ${info.qty}, '${info.address}', '${info.phone}' )
    `;
  },
};

module.exports = sql;
