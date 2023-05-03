import './SignIn.css'
import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail, validatePassword } from '../ValidationForm/RegExp'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import { UserOutlined ,LockOutlined } from '@ant-design/icons'
import instanceAxios from '../instanceAxios/ApiGlobal'
const SignIn = () => {
    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [ErrPassword, setErrPassword] =  useState(false)
const [ErrEmail, setErrEmail] = useState(false)


 const navigate = useNavigate()

 const loginSubmit = async (e) => {
    e.preventDefault()

    if (!validateEmail.test(email)) {
      setErrEmail(true)
    }
    if (!validatePassword.test(password)) {
      setErrPassword(true)
    }
      const  payload = {
        email,
        password,
      }
      try{
      const apiResponse = await instanceAxios.post(
        '/auth/login',
        payload,
      )
     let {token, refreshToken} = apiResponse.data

      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      console.log(token)
      console.log(refreshToken)

      localStorage.setItem('user_data', JSON.stringify(apiResponse.data.user))

    console.log(apiResponse)

     console.log(apiResponse.data.user.role)
     if(apiResponse.data.user.role  === 'Super Admin'){
      notification.success({

        message:  <div style={{color:'green'}}> success</div>,
        description: 'Login',
      })
      navigate('/dashboard')
    }
     
    }

    

 

    catch(error) {
      
        console.log(error.response.data)
        notification.error(error.response.data);
      }
}



  return (
    <>
<Form style={{ position: 'relative', top: '200px' }}>
        <h1>Welcome Back</h1>
        <br />
        <br />
        <h4 style={{ color: 'gray' }}>
          Welcome back! Please enter your details
        </h4><br/><br/>
        <Form.Item name="email">
          <Input
            type="email"
            placeholder="Enter Your Email address"
            prefix={
              <UserOutlined
                className="site-form-item-icon"
                style={{ fontSize: '20px', color: 'rgba(0,0,0,.25)' }}
              />
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '50%', height: '50px' }}
          />
        </Form.Item>
        {ErrEmail && <p style={{ color: 'red' }}>Email Is Invalid</p>}
        <Form.Item name="password">
          <Input.Password
   
            prefix={
              <LockOutlined
                className="site-form-item-icon"
                style={{ fontSize: '20px', color: 'rgba(0,0,0,.25)' }}
              />
            }
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '50%', height: '50px' }}
          />
        </Form.Item>
        {ErrPassword && <p style={{ color: 'red' }}>Password Is Invalid </p>}
        <br />
        <br />
 <div style={{display:'flex',justifyContent:'center' ,alignItems:'center',textAlign:'center'}} >
          <Form.Item name="remember" valuePropName="checked" >
            <Checkbox  className="login-form-remember" style={{fontSize:'20px',position:'relative',bottom:'25px'}}>Remember for 30 Days</Checkbox>
          </Form.Item>
          <Form.Item className='forgot-form' >
          <Link className="login-form-forgot" to="/reset-password" style={{fontSize:'20px',gap:'100px'}} >
            Forgot password?
          </Link>
        </Form.Item>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
    onClick={loginSubmit}

        >
          Sign In
        </Button>
 
      </Form>
    </>
  )
}

export default SignIn