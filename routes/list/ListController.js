// 클라이언트의 요청을 처리한 후 서버에서 처리된 겨로가를 반환해주는 역할

//  - 클라이언트의 요청을 수신
//  - 요청에 들어온 데이터 및 내용을 검증
//  - 서버에서 수행된 결과를 클라이언트에게 반환
//  - 클라이언트의 요청을 Service로 데이터를 전달

const express = require('express');
const router = express.Router();
const ListService = require('./ListService');

router.get('/', async function (req, res, next) {
  try {
    const result = await ListService.getList();
    if (result) {
      console.log('Success');
      console.log(result);
      res.render('index', { page: 'page/list', bookList: result });
    } else {
      console.log('Fail');
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
