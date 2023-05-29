const AddBookRepository = require('./AddBookRepository');

const AddBookService = {
  addBook: async (info) => {
    try {
      if (info.img) {
        info.img = 'X';
      }

      const result = await AddBookRepository.addBook(info);

      if (result) {
        return result;
      } else {
        console.log('AddBook Service Failed');
      }
    } catch (e) {
      console.log(e);
      return;
    }
  },
};

module.exports = AddBookService;
