const OrderBookRepository = require('./OrderBookRepository');
const uuid = require('uuid');

const OrderBookService = {
  orderBook: async (info) => {
    try {
      const uuidbox = uuid.v4();

      // Order
      info.order_id = uuidbox;
      info.user_id = 'name1';

      info.order_address += ' ';
      info.order_address += info.order_detailaddress;

      // Order Detail
      info.order_detail_price = info.order_price;
      info.order_detail_qty = info.order_qty;
      info.order_detail_total = info.order_total;

      const result = await OrderBookRepository.orderBook(info);

      return result;
    } catch (e) {
      console.log(e);
      return;
    }
  },
};

module.exports = OrderBookService;
