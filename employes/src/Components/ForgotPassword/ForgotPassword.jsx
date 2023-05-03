import './ForgotPassword.css'
import React, {useContext, useState} from 'react'
import { validateEmail } from '../ValidationForm/RegExp'
import { UserOutlined , MailOutlined } from '@ant-design/icons'
import { Button, Form, Input,notification } from 'antd'
import AuthContext from '../ContextAuth/ContextAuth'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const [ErrEmail, setErrEmail] = useState(false)
    const { forgotPassw} = useContext(AuthContext)

    const forgotSubmit = async(e) => {
        e.preventDefault()
    
        if (!validateEmail.test(email)) {
          setErrEmail(true)
        }
    
        try
         {
          let payload = {
            email,
           
          }
    
          
          await forgotPassw(payload)
      
          notification.open({
          
            message:   <div style={{color:'green',textAlign:'center'}}><MailOutlined style={{fontSize:'30px',textAlign:'center'}}/> <br/>Please Check  Your mail </div>,
            description: 'We have sent a link of reset password to your email ',
          
          })
    
    
        } catch (err) {
          console.log(err)
    
        }
       
      }

  return (
    <>
<Form style={{ position: 'relative', top: '200px' }}>
        <h1>Reset Your Password</h1>
        <MailOutlined style={{position:'relative',top:'120px',right:'30px',fontSize:'50px',color:'gray',backgroundColor:'#ced4da',padding:'15px',borderRadius:'45%'}}/>
        <div className='reset' style={{border:'1px solid gray',padding:'130px',height:'220px',width:'50%',borderRadius:'10px',position:'relative',left:'550px'}}>
        <h4>Reset Via Email</h4>
        <p>Link will be send to your email adress</p>
     <br/><br/>
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
            style={{ width: '50%', height: '40px' }}
          />
          <br/>
          <br/>
             <Button
       style={{color:"white",backgroundColor:'gray',border:"2px gray",padding:'10px 20px 40px',fontSize:'20px'}}
          htmlType="submit"
         
          onClick={forgotSubmit}
        >
      
          Send Via Email
        </Button>
          </div>
        {ErrEmail && <p style={{ color: 'red' }}>Email Is Invalid</p>}
        <br />
        <br />

     
      </Form>

    </>
  )
}

export default ForgotPassword