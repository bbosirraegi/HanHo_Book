const OrderBookRepository = require('./OrderBookRepository');
const uuid = require('uuid');

const OrderBookService = {
  orderBook: async (info) => {
    try {
      const uuidbox = uuid.v4();

      info.orderid = uuidbox;
      info.userid = 'name1';

      console.log('DetailBook Service Info');
      console.log(info);
      const result = await OrderBookRepository.orderBook(info);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = OrderBookService;
