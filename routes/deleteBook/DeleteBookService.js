const DeleteBookRepository = require('./DeleteBookRepository');

const DeleteBookService = {
  deleteBook: async (info) => {
    try {
      const result = await DeleteBookRepository.deleteBook(info);

      if (result) {
        return result;
      } else {
        console.log('DeleteBook Service Failed');
      }
    } catch (e) {
      console.log(e);
    }
  },
};
