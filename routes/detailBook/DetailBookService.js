const DetailBookRepository = require('./DetailBookRepository');

const DetailBookService = {
  detailBook: async (info) => {
    try {
      const result = await DetailBookRepository.detailBook(info);

      if (result) {
        return result;
      } else {
        console.log('DetailBook Service Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = DetailBookService;
