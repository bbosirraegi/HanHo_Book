const ListRepository = require('./ListRepository');

const ListService = {
  getList: async () => {
    try {
      const result = await ListRepository.getBookList();

      if (result) {
        return result;
      } else {
        console.log('Service Faile ');
      }
    } catch (e) {
      console.log(e);
    }
  },

  deleteBook: async (info) => {
    try {
      const result = await ListRepository.deleteBook(info);

      if (result) {
        return result;
      } else {
        console.log('Service Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = ListService;

