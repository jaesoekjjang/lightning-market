import React from 'react'
import Header from './header'
import axios from 'axios'

const Login = () => {
  const onSubmitRegisterForm = async (e) => {
    e.preventDefault();
    const { target } = e
    const email = target.email.value;
    const nickname = target.nickname.value;
    const password = target.password.value;
    console.log(email, nickname, password)
    try {
      return await axios.post('http://localhost:8000/login/register', {
        email,
        nickname,
        password
      });
    } catch (err) {
      console.error(err);
    }
  }

  const onSubmitLoginForm = async (e) => {
    try {
      e.preventDefault();
      const { target } = e
      const email = target.email.value;
      const password = target.password.value;
      await axios.post('http://localhost:8000/login', {
        email,
        password
      })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div>
      <Header />
      <form onSubmit={onSubmitRegisterForm}>
        <input type="email" name='email' />
        <input type="text" name='nickname' />
        <input type="password" name='password' />
        <button type='submit'>회원가입</button>
      </form>
      <form onSubmit={onSubmitLoginForm}>
        <input type="email" name='email' />
        <input type="password" name='password' />
        <button type='submit'>로그인</button>
      </form>
    </div>
  )
}

export default Login