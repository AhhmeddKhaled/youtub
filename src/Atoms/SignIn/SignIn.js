import React from 'react';
import './SignIn.css';
import { BsPersonCircle } from 'react-icons/bs';
const SignIn = () => {
  return (
      <button className='signIn d-flex align-items-center justify-content-between'>
        <BsPersonCircle />
        <span>
            Sign in
        </span>
      </button>
  )
}

export default SignIn