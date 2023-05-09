const AddBookRepository = require('./AddBookRepository');

const AddBookService = {
  addBook: async (info) => {
    try {
      const result = await AddBookRepository.addBook(info);

      if (result) {
        return result;
      } else {
        console.log('AddBook Service Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = AddBookService;
