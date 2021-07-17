import React, { useState, useContext } from 'react'
import { UserDispatch } from '../App'
import firebase from 'firebase/app'
import { auth } from '../fbase'
import Header from './header'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState([])

  const dispatch = useContext(UserDispatch);


  const onChangeInput = (e) => {
    const { target } = e
    if (target.name === "email") {
      setEmail(target.value);
    } else if (target.name === 'password') {
      setPassword(target.value);
    }
  }

  const onSubmitRegisterForm = async (e) => {
    e.preventDefault();
    let userInfo;
    try {
      userInfo = await auth.createUserWithEmailAndPassword(email, password)
      setUserData((prev) => {
        return [...prev, userInfo.user]
      })
    } catch (error) {
      alert(error)
    }
  }

  const onSubmitSignInForm = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password)
      Login();
      alert('Hi');
    } catch (err) {
      let errCode = err.code;
      let errMsg = err.message;
      if (errCode === 'auth/wrong-password') {
        alert("비밀번화 틀렸습니다.")
      } else {
        alert(errMsg);
      }

    }
  }

  const Login = () => {
    dispatch({
      type: "LOG_IN"
    })
  }

  console.log(auth.currentUser);
  return (
    <div>
      <Header />
      <form onSubmit={onSubmitRegisterForm}>
        <input type="email" name='email' onChange={onChangeInput} />
        <input type="password" name='password' onChange={onChangeInput} />
        <button>회원가입</button>
      </form>
      <form onSubmit={onSubmitSignInForm}>
        <input type="email" name='email' onChange={onChangeInput} />
        <input type="password" name='password' onChange={onChangeInput} />
        <button>로그인</button>
      </form>
    </div>
  )
}

export default Login