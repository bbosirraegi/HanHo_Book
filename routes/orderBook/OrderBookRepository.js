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
    }
  },
};

module.exports = OrderBookRepository;

// const db = require('../../utils/db');
// const sqls = require('../../utils/sql');

// const OrderBookRepository = {
//   orderBook: async (info) => {
//     try {
//       const query1 = sqls.orderQuery(info);
//       const query2 = sqls.orderdetailQuery(info);

//       // console.log('****Query1****');
//       // console.log(query1);
//       // console.log('****Query2****');
//       // console.log(query2);

//       let result;

//       const connection = await db.getConnection((err, conn) => {
//         if (err) {
//           console.log(err);
//           throw err;
//         }

//         result = conn.beginTransaction((err) => {
//           if (err) {
//             console.log(err);
//             throw err;
//           }

//           conn.query(query1, (err, result1) => {
//             if (err) {
//               console.log(err);
//               return conn.rollback(() => {
//                 throw err;
//               });
//             }
//             conn.query(query2, (err, result2) => {
//               if (err) {
//                 console.log(err);
//                 return conn.rollback(() => {
//                   throw err;
//                 });
//               }

//               conn.commit((err) => {
//                 if (err) {
//                   console.log(err);
//                   return conn.rollback(() => {
//                     throw err;
//                   });
//                 }
//               });
//             });
//           });
//         });
//       });

//       if (result) {
//         return result;
//       } else {
//         console.log('OrderBook Repository Failed');
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   },
// };

// module.exports = OrderBookRepository;
