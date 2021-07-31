const express = require('express');
const User = require('../models/user')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.route('/')
  .post(async (req, res, next) => {
    try {
      // 1. 아이디 있는지 확인 / 없으면 에러처리
      const user = await User.findOne({
        attributes: ['email', 'nickname', 'password'],
        where: {
          email: body.email
        }
      })
      if (!user) {
        const error = new Error("존재하지 않는 이메일 입니다.")
        return res.send(error.message);
      }
      const { body } = req
      // 2. 비밀번호 해쉬화
      await bcrypt.compare(body.password, user.password, (err, result) => {
        if (err) {
          console.error(err)
          return next(err);
        }
        // 3. 데이터베이스와 비교
        if (!result) {
          const error = new Error("비밀번호가 올바르지 않습니다.")
          next(error)
        } else {
          return res.status(200).send("로그인 성공")
        }
      })
    } catch (err) {
      console.error(err)
      next(err)
    }
  })




router.route('/register')
  .post(async (req, res, next) => {
    try {
      console.log(req.body.password)
      await bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.error(err)
        } else {
          const user = User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hash,
          })
          console.log(user);
          res.status(201).json(user);
        }
      })
    } catch (err) {
      console.error(err);
      next(err)
    }
  })



module.exports = router;