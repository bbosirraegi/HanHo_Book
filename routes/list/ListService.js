// 아키텍처의 가장 핵심적인 비즈니스 로직을 수행하고 실제 사용자(클라이언트)가 원하는 요구사항을 구현

//  - 데이터가 필요할때 Repository로 데이터를 요청
//  - 클라이언트들의 요구사항을 반영하여 원하는 결과를 반환해주는 계층
//  - 비즈니스 로직을 수행하기 위해 필요한 데이터를 Repository에 요청

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
};

module.exports = ListService;
