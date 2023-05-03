
import React, {useContext, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Input,message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import AuthContext from '../ContextAuth/ContextAuth'


const ResetPassword = () => {

  const { resetPassw } = useContext(AuthContext)

    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const navigate = useNavigate()
    const {token}= useParams()

    const handelSubmit = async (e) => {
        e.preventDefault()
   
   try{
  
    
      let payload ={
        password,
        token,
        confirmPassword
      }
     
    const result =  await resetPassw(payload)
  
    message.success('success')
    console.log(result)
navigate('/')
  
    }

  catch(err) {
    console.log(err)
  }
} 

  return (
    <>
<Form style={{ position: 'relative', top: '300px' }}>
    <h1>Please Enter Your New Password</h1>
    <br />
    <br />
    <h4 style={{ color: 'gray' }}>
      Your new password must be different from previous used passwords.
    </h4>
    <p>Link will be send to your email adress</p>

    <Input.Password
      prefix={
        <UserOutlined
          className="site-form-item-icon"
          style={{ fontSize: '20px', color: 'rgba(0,0,0,.25)' }}
        />
      }
      name='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={{ width: '50%', height: '40px' }}
      placeholder="Password"
    />
    <br />
    <br />

    <Input.Password
      prefix={
        <UserOutlined
          className="site-form-item-icon"
          style={{ fontSize: '20px', color: 'rgba(0,0,0,.25)' }}
          
        />
      }
      name='confirmPassword'
      value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
      placeholder="Confirm Password"
      style={{ width: '50%', height: '40px' }}
    />

    <br />
    <br />

    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      onClick={handelSubmit}
    >
      Confirm
    </Button>
  </Form>

    </>
  )
}

export default ResetPassword