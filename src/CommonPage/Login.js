import React, { useState } from 'react'
import firebase from 'firebase/app'
import { auth } from '../fbase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState([])


  const onChangeInput = (e) => {
    const { target } = e
    if (target.name === "email") {
      setEmail(target.value);
    } else if (target.name === 'password') {
      setPassword(target.value);
    }
  }

  const onSubmitForm = async (e) => {
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

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="email" name='email' onChange={onChangeInput} />
        <input type="password" name='password' onChange={onChangeInput} />
        <button>회원가입</button>
      </form>
    </div>
  )
}

export default Login