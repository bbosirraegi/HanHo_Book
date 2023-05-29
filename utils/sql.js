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

  // 유저 등록
  signupQuery: (info) => {
    return `
      INSERT INTO
        t_user
      VALUES( '${info.user_id}', '${info.user_pw}', '${info.user_nm}', 'vip1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP )
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
        t_order( order_id, user_id, order_date, order_total, order_postcode, order_address, order_phone, order_card )
      VALUES( '${info.order_id}', '${info.user_id}', CURRENT_TIMESTAMP, ${info.order_total}, '${info.order_postcode}', '${info.order_address}', '${info.order_phone}', '${info.card}' )
    `;
  },

  // 주문 상세
  orderdetailQuery: (info) => {
    return `
      INSERT INTO
        t_order_detail( book_id, order_id, order_detail_price, order_detail_qty, order_detail_total )
      VALUES( '${info.book_id}', '${info.order_id}', ${info.order_detail_price}, '${info.order_detail_qty}', '${info.order_detail_total}' )
    `;
  },
};

module.exports = sql;
